import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { getUserForSidebar } from "../controller/message.controller";

const router = express.Router();

router.get("/users", protectRoute, getUserForSidebar);
export default router;
