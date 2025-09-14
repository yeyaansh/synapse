import express from "express"
import { assessmentQuestions, assessmentSubmit } from "../../controllers/assessmentController.js";
const assessmentRoutes = express.Router();


assessmentRoutes.get("/onboardingQuestion/:questionNumber",assessmentQuestions)
assessmentRoutes.post("/onboardingUserAnswer/submit",assessmentSubmit)


export default assessmentRoutes;