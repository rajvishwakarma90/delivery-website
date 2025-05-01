import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://gofood:6468148@cluster0.hyfktfz.mongodb.net/asdssda').then(()=>console.log("DB Connected"));
}