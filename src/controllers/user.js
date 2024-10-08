import { StatusCodes } from "http-status-codes";
import { userServices } from "../services/user.js";

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await userServices.register({ name, email, password });
    return res
      .status(StatusCodes.CREATED)
      .json({ status: 201, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const user = await userServices.getAllUser();
    return res
      .status(StatusCodes.OK)
      .json({ status: 200, message: "Xử lý thành công", content: user });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { accesstoken, refreshToken, user } = userServices.login({
      email,
      password,
    });
    return res.status(StatusCodes.OK).json({
      status: 200,
      message: "Xử lý thành công",
      content: user,
      accesstoken,
      refreshToken,
    });
  } catch (error) {
    console.log(error);
    next(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: 500, message: "Server Error" });
  }
};

export const userControllers = {
  getAllUser,
  register,
  login,
};
