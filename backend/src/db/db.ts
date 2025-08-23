import mongoose, { Schema } from "mongoose";
import { ta } from "zod/locales";

const userSchema  = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


const contentSchema = new mongoose.Schema({
    title: String, //
    link: String, //
    url: String, //
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'tag'}],
    user: {type: mongoose.Schema.Types.ObjectId, ref:'user',required:true,}
})

const tagSchema  = new mongoose.Schema({
    title: String
})

const linkSchema = new mongoose.Schema({
    hash: String,
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})


const userModel = mongoose.model('user', userSchema);
const contentModel = mongoose.model('content', contentSchema);
const tagModel = mongoose.model('tag', tagSchema);
const linkModel = mongoose.model('link', linkSchema);




module.exports = {
    userModel: userModel,
    contentModel: contentModel,
    tagModel: tagModel,
    linkModel: linkModel
}