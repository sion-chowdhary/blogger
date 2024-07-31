import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://chowdharysayan2805:Sion1234@cluster0.gnvg1d7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("DB Connected");
}