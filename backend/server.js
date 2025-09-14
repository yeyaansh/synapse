import express from "express";
import "dotenv/config";
import authRoutes from "./routes/authRoutes/index.js";
import userRoutes from "./routes/userRoutes/index.js";
import adminRoutes from "./routes/adminRoutes/index.js";
import userAuthMiddleware from "./middlewares/userMiddleware/index.js";
import assessmentRoutes from "./routes/assessmentRoutes/index.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser());



app.use("/auth",authRoutes);
app.use("/user",userRoutes);
app.use("/assessment",userAuthMiddleware,assessmentRoutes);
app.use("/admin",adminRoutes);





const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server listening at port ${process.env.PORT}`)
})