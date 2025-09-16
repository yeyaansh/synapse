import express from "express";
import {
  getUserProfile,
  pathChooser,
  resultAfterEvaluation,
  verifyCredentials,
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
userRoutes.get("/exist", async (req, res) => {
  const { token } = req.cookies;

  const validToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!validToken) {
    return res.status(403).send({
      message: "user is not logged-in",
    });
  }

  const userExist = await user.findById(validToken._id);

  if (!userExist) {
    return res.status(403).send({
      message: "user is not logged-in",
    });
  }

  const userData = {
    full_name: userExist.full_name,
    email_id: userExist.email_id,
  };

  return res.status(200).send({
    userData,
    message: "user is logged-in",
  });
});

export default userRoutes;
