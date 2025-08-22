import express from "express";
//@ts-ignore
import {userModel} from '../db/db.js';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import {bcryptPass} from '../../.env';
import {generateToken} from '../middleWares/generateToken.js'

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


