import mongoose from "mongoose";

export default async function dbConnect() {
    await mongoose.connect(`${process.env.MONGODB_STRING}/Synapse`)
    console.log("db cconnected")
} 