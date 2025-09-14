import express from "express";
import {
  registerController,
  loginController,
  logoutController,
  changePasswordController,
  forgotPasswordController
} from "../../controllers/authController.js";
import userAuthMiddleware from "../../middlewares/userMiddleware/index.js"

const authRoutes = express.Router();

authRoutes.post("/register", registerController);
authRoutes.post("/login",userAuthMiddleware, loginController);
authRoutes.post("/logout",userAuthMiddleware, logoutController);
authRoutes.post("/changePassword",userAuthMiddleware, changePasswordController);
authRoutes.post("/forgot-password", forgotPasswordController);


export default authRoutes;