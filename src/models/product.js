import mongoose from "mongoose";

const Product = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
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
