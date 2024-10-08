import mongoose from "mongoose";

const Category = mongoose.Schema({
  name: {
    type: String,
  },
  decription: {
    type: String,
  },
});

const CategoryModel = mongoose.model("Category", Category);
export default CategoryModel;
