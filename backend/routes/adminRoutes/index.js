import express from "express"
import { getAdminProfile } from "../../controllers/adminController.js";
const adminRoutes = express.Router();

adminRoutes.get("/:id",getAdminProfile)

export default adminRoutes;