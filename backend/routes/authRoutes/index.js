import express from "express";
import {
  registerController,
  loginController,
  logoutController,
  changePasswordController,
  forgotPasswordController,
} from "../../controllers/authController.js";
import userAuthMiddleware from "../../middlewares/userMiddleware/index.js";
import jwt from "jsonwebtoken";
import user from "../../models/userSchema.js";
const authRoutes = express.Router();

authRoutes.post("/register", registerController);
authRoutes.post("/login", loginController);
authRoutes.post("/logout", userAuthMiddleware, logoutController);
authRoutes.post(
  "/change-password",
  userAuthMiddleware,
  changePasswordController
);
authRoutes.post("/forgot-password", forgotPasswordController);
authRoutes.get("/exist", async (req, res) => {
  const { token } = req.cookies;

  if (!token)
  {
    console.log("token hi nahi hai..")
    return res.status(200).send({
      message: "user is not logged in",
    });

  }

  const validToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!validToken) {
    console.log("token vaid nahi hai..")
    return res.status(200).send({
      message: "user is not logged-in",
    });
  } 
  console.log(validToken);
  const userExist = await user.findById(validToken._id);
  console.log(userExist);
  if (!userExist) {
    console.log("user exist hi nahi karta..")
    return res.status(200).send({
      message: "user is not logged-in",
    });
  }

  const reply = {
    full_name: userExist.full_name,
    email_id: userExist.email_id,
  };

  res.status(200).send({
    user: reply,
    message: "user is logged-in",
  });
});

export default authRoutes;
