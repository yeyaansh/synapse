import express from "express";
import "dotenv/config";
import authRoutes from "./routes/authRoutes/index.js";
import userRoutes from "./routes/userRoutes/index.js";
import adminRoutes from "./routes/adminRoutes/index.js";
import userAuthMiddleware from "./middlewares/userMiddleware/index.js";
import assessmentRoutes from "./routes/assessmentRoutes/index.js";
import cookieParser from "cookie-parser";
import dbConnect from "./config/db.js";
import cors from "cors"

const app = express();


app.use(cookieParser());
app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_API_BASE_URL || "http://localhost:5173",
    credentials:true,
}))





 
app.use("/auth",authRoutes);
app.use("/user",userRoutes);
app.use("/assessment",userAuthMiddleware,assessmentRoutes);
app.use("/admin",adminRoutes);



async function initialize (){

    // await Promise.all[]
    await dbConnect();

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server listening at port ${process.env.PORT}`)
})
}

initialize();


