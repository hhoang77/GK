import express from "express";
import { productControllers } from "../controllers/product.js";
import uploadCloud from "../middlewares/cloudinary.js";

const router = express.Router();

router.route("/").get(productControllers.getAllProduct);
router
  .route("/create")
  .post(uploadCloud.single("image"), productControllers.createProduct);
router
  .route("/update")
  .put(uploadCloud.single("image"), productControllers.updateProduct);
router.route("/delete").delete(productControllers.deleteProduct);

export default router;
