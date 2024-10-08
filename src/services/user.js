import UserModel from "../models/user.js";
import { hashPassword, passwordMatch } from "../utils/password.js";
import { generateToken } from "../utils/generateToken.js";

const getAllUser = async () => {
  try {
    return await UserModel.find();
  } catch (error) {
    console.log(error);
  }
};

const register = async ({ name, email, password }) => {
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      throw { message: "Email is Exited" };
    }
    const hashpassword = await hashPassword(password);
    return await UserModel.create({
      email,
      username,
      password: hashpassword,
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async ({ email, password }) => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw Error("Email Not Found");
    }
    const passwordmatch = await passwordMatch(password, user.password);
    if (!passwordmatch) {
      throw Error("Password Not Match");
    }
    const { accessToken, refreshToken } = generateToken(user?.id);
    return { accessToken, refreshToken, user };
  } catch (error) {
    console.log(error);
  }
};

export const userServices = {
  getAllUser,
  register,
  login,
};
