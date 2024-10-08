import CategoryModel from "../models/category.js";

const getAllCategory = async () => {
  return await CategoryModel.find();
};

const createCategory = async ({ name, decription }) => {
  try {
    return await CategoryModel.create({ name, decription });
  } catch (error) {
    console.log(error);
  }
};

const updateCategory = async (id, { name, decription }) => {
  try {
    const category = await CategoryModel.findById(id);
    if (!category) {
      throw Error("Category Not Found");
    }
    return await CategoryModel.findByIdAndUpdate(
      id,
      { name, decription },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = async (id) => {
  try {
    const category = await CategoryModel.findById(id);
    if (!category) {
      throw Error("Category Not Found");
    }
    return await CategoryModel.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
};

export const categoryServices = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
