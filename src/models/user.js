import mongoose from "mongoose";

const User = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  avarta: {
    type: String,
    default: "",
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});
const UserModel = mongoose.model("User", User);
export default UserModel;
