import ProductModel from "../models/product.js";

const getAllProduct = async () => {
  return await ProductModel.find().populate("categoryId");
};

const getProductById = async (id) => {
  try {
    const product = await ProductModel.findById(id).populate("categoryId");
    if (!product) {
      throw Error("Product Not Found");
    }
    return await product;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async ({ name, price, image, categoryId }) => {
  try {
    return await ProductModel.create({ name, price, image, categoryId });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (id, { name, price, image, categoryId }) => {
  try {
    const product = ProductModel.findById(id);
    if (!product) {
      throw Error("Product Not Found");
    }
    return await ProductModel.findByIdAndUpdate(
      id,
      { name, price, image, categoryId },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const product = ProductModel.findById(id);
    if (!product) {
      throw Error("Product Not Found");
    }
    return await ProductModel.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
};

export const productServices = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
