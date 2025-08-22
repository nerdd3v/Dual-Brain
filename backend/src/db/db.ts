import mongoose, { Schema } from "mongoose";

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
    title: String,
    link: String,
    
})