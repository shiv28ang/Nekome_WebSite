import mongoose from "mongoose";

const connectDB=async()=> {
    await mongoose.connect('mongodb+srv://21ucs192:<password>@cluster0.um2rnbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}