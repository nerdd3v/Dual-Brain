import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors());



mongoose.connect('URL').then(()=>{
    app.listen(3000,()=>{
        console.log("listening on port 3000");
    })
})