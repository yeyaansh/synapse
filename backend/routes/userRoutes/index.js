import express from "express";
import {
  getUserProfile,
  pathChooser,
  resultAfterEvaluation,
  verifyCredentials,
  userDashboard,
  // onboardingUserAnswer,onboardingQuestion
} from "../../controllers/userController.js";
import userAuthMiddleware from "../../middlewares/userMiddleware/index.js";
const userRoutes = express.Router();

userRoutes.get("/:id", getUserProfile);
userRoutes.get("/:id", userAuthMiddleware, verifyCredentials);
// userRoutes.get("/onboardingQuestion/:questionNumber",userAuthMiddleware,onboardingQuestion);
// userRoutes.post("/onboardingUserAnswer/:questionNumber",userAuthMiddleware,onboardingUserAnswer);
userRoutes.get("/result", userAuthMiddleware, resultAfterEvaluation);
userRoutes.post("/profession/:professionId", userAuthMiddleware, pathChooser);
userRoutes.get("dashboard",userAuthMiddleware,userDashboard)

export default userRoutes;
