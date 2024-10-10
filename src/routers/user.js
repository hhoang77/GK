import express from "express";
import { userControllers } from "../controllers/user.js";

const router = express.Router();

router.route("/").get(userControllers.getAllUser);
router.route("/register").post(userControllers.register);
router.route("/login").post(userControllers.login);

export default router;
