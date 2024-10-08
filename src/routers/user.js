import express from "express";
import { userControllers } from "../controllers/user.js";

const router = express.Router();

router.route("/").get(userControllers.getAllUser);

export default router;
