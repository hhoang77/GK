import express from "express";
import { categoryControllers } from "../controllers/category.js";

const router = express.Router();

router.route("/").get(categoryControllers.getAllCategory);
router.route("/create").post(categoryControllers.createCategory);
router.route("/update").put(categoryControllers.updateCategory);
router.route("/delete").delete(categoryControllers.deleteCategory);

export default router;
