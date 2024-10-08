import { StatusCodes } from "http-status-codes";
import { categoryServices } from "../services/category.js";

const getAllCategory = async (req, res, next) => {
  try {
    const category = await categoryServices.getAllCategory();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: category });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { name, decription } = req.body;
    const category = await categoryServices.createCategory({
      name,
      decription,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: category });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const id = req.query.id;
    const { name, decription } = req.body;
    const category = await categoryServices.updateCategory(id, {
      name,
      decription,
    });
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: category });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const id = req.query.id;
    const category = await categoryServices.deleteCategory(id);
    return res
      .status(StatusCodes.OK)
      .josn({ status: 200, message: "Xử lý thành ccông", content: category });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

export const categoryControllers = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
