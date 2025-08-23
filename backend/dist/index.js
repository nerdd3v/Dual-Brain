import express from 'express';
import mongoose from 'mongoose';
//@ts-ignore
import cors from 'cors';
//@ts-ignore
import { userRouter } from './api/user.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use('/user', userRouter);
// mongoose.connect('URL').then(()=>{
app.listen(3000, () => {
    console.log("listening on port 3000");
});
// })
//# sourceMappingURL=index.js.map