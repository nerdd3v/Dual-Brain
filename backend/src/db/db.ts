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





const userModel = mongoose.model('user', userSchema);





module.exports = {
    userModel: userModel
}