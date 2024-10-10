import mongoose from "mongoose";

const Product = mongoose.Schema({
  name: {
    price: { type: String },
    type: String,
  },
  image: {
    type: String,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const ProductModel = mongoose.model("Product", Product);
export default ProductModel;
