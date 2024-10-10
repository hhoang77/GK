import { StatusCodes } from "http-status-codes";
import { productServices } from "../services/product.js";

const getAllProduct = async (req, res, next) => {
  try {
    const product = await productServices.getAllProduct();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const getProductById = async (req, res, next) => {
  try {
    const id = req.query.id;
    const product = await productServices.getProductById(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server" });
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { name, price, image, categoryId } = req.body;
    const fileImage = req.file;
    const product = await productServices.createProduct({
      name,
      price,
      image: fileImage?.path,
      categoryId,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const id = req.query.id;
    const { name, price, image, categoryId } = req.body;
    const fileImage = req.file;
    const product = await productServices.updateProduct({
      name,
      price,
      image: fileImage?.path,
      categoryId,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.query.id;
    const product = await productServices.deleteProduct(id);
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: product });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

export const productControllers = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
