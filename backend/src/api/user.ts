import express from "express";
//@ts-ignore
import {userModel} from '../db/db.js';
//@ts-ignore
import {contentModel} from '../db/db.js';
import { z } from 'zod';
//@ts-ignore
import bcrypt from 'bcrypt';
//@ts-ignore
import {bcryptPass} from '../../.env';
//@ts-ignore
import {generateToken} from '../middleWares/generateToken.ts'
//@ts-ignore
import {authMW} from '../middleWares/authMW.ts'
import {random} from '../middleWares/randomHash.js';
//@ts-ignore
import {linkModel} from '../db/db.js'

const userRouter: express.Router = express.Router();

const userSchema = z.object(
    {
        username: z.string().min(3).max(20),
        password: z.string().min(6).max(50)
    }
)

userRouter.post('/signup', async(req, res)=>{
    const {username, password} = req.body;
    const userInfoObject = {
        username, password
    }

    try {
        const validateInfo = userSchema.safeParse(userInfoObject);
        if(!validateInfo.success){
            return res.status(403).json({message:'Invalid Format for Usename or Password'})
        }
        const passwordHashed = await bcrypt.hash(validateInfo.data.password, 10);
        const userExists = await userModel.findOne({username});

        if(userExists){
            return res.status(403).json({message:" username already exists "});
        }
        const saveInfo = userModel({username, password:passwordHashed});
        await saveInfo.save();

        return res.status(200).json({message:"Signed up successfully", success:true})

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"})
    }
})

userRouter.post('/signin', async(req, res)=>{
    const {username, password} = req.body;
    if(!username || !password) {
        return res.status(403).json({message:"username and password required"});
    }
    const userInfoObject = {username, password}
    const validateInfo = userSchema.safeParse(userInfoObject);

    if(!validateInfo.success){
        return res.status(404).json({message:"Invalid username or password format"});
    }
    try{
        //check username and password exists in the db
        const userExists = await userModel.findOne({username});
        if(!userExists){
            return res.status(400).json({message:"Invalid username"});
        }
        const validatePassword = await bcrypt.compare(password, userExists.password)
        if(!validatePassword){
            return res.status(404).json({message:"Invalid password"})
        }
        const token = generateToken();
        return res.status(202).json({message:"Logged In successfully", token:token})
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal server error"})
    }
})


userRouter.post('/content',authMW, async(req, res)=>{
    const {title, link, url, tags} = req.body;
    if(!title || !link || !url ){
        return res.status(403).json({message:"Content not provided"})
    }
    //@ts-ignore
    const user = req.user;
    if(!user){
        return res.status(400).json({message:"You are not authorised"});
    }
    try {
        const contentInfo = contentModel({title, link, url, userID: user._id, tags});
        await contentInfo.save();
        return res.status(200).json({message: "Content posted successfully"})
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})
    }
    
})

userRouter.get('/content',authMW, async (req,res)=>{
    //@ts-ignore
    const user = req.user;
    if(!user){
        return res.status(400).json({message:"You are not authorised"});   
    }
    try {
        const data = await contentModel.find({user: user._id}).populate("username");
        return res.status(202).json({content: data})
    } catch (error) {
        return res.status(500).json({message:"internal server error"})
    }
})

userRouter.delete('/content',authMW,async(req,res)=>{
    //@ts-ignore
    const user = req.user;
    const {contentId} = req.body;
    if(!user){
        return res.status(404).json({message:'You are not authorized'});
    }
    try {
        const contentExists = await contentModel.findById(contentId)
         if (!contentExists) {
            return res.status(404).json({ message: "Content not found" });
        }
         if (contentExists.user.toString() !== user._id.toString()) {
            return res.status(403).json({ message: "You are not allowed to delete this content" });
         }
        await contentModel.deleteOne({_id: contentId});
        return res.status(200).json({message:"Deleted successfully"})
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})
    }
})

userRouter.post('/share',authMW, async(req,res)=>{
    //@ts-ignore
    const user = req.user;
    if(!user){
        return res.status(203).json({message:"You are not authorised"})
    }
    const {share} = req.body;
    try {
        if(share){
            const existingHash = await linkModel.findOne({userID: user._id});
            if(existingHash){
                return res.json(existingHash)
            }
            //generate hash;
            const hash = random(10);
            const linkSchemUpdate = await linkModel.create({hash, userID: user._id});
            return res.json({hash});
        }
        await linkModel.deleteOne({userID: user._id});
        res.json({message:"removed shareable link"})

    } catch (error) {
        return res.status(500).json({message:"Internal error occurred"})
    }
})

userRouter.get('/share/:shareLink',authMW, async(req, res)=>{
    //@ts-ignore
    const user = req.user;
    const hash = req.params.shareLink;

    if(!user){
        return res.status(404).json({message:"You are not authorised"});
    }
    if(!hash){
        
    }
})

module.exports = {
    userRouter
}