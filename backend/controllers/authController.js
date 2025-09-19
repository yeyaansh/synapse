import bcrypt from "bcrypt";
import user from "../models/userSchema.js";
import jwt from "jsonwebtoken";

const registerController = async (req, res) => {
  try {
    console.log("server side body mein ye aaya hai...");
    
    console.log(req.body)
    const { full_name, gender, email_id } = req.body;

    if (!full_name || !gender || !email_id || !req.body.password) {
      throw new Error("Please enter the credentials");
    }

    const userExist = await user.findOne({ email_id });
    if (userExist) {
      return res.status(200).send("User Already Exist...");
    }

    // req.body.password = await bcrypt.hash(req.body.password, 12);
    req.body.password = await bcrypt.hash(req.body.password,12);
    const userRegistration = {
      full_name,
      gender,
      email_id,
      password: req.body.password,
    };

    const userData = await user.create(userRegistration);

    const token = jwt.sign(
      { _id: userData._id, full_name, email_id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    // res.cookie('token',token,{maxAge:1000*60*60, httpOnly:true, path:'/'});
    res.cookie("token", token, { maxAge: 1000 * 60 * 60 });
    const reply = {
      full_name: userData.full_name,
      email_id: userData.email_id,
      password: userData.password,
    };

    res.status(200).json({
      user: reply,
      message: "account created successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
const loginController = async (req, res) => {
  try {
    if (!req.body.email_id || !req.body.password) {
      throw new Error("Please fill the valid credentials");
    }

    const isEmail = await user.findOne({ email_id: req.body.email_id });
    if (!isEmail) {
      return res.status(500).send("Invalid Credentials");
    }

    const credentialsMatching = await bcrypt.compare(
      req.body.password,
      isEmail.password
    );

    if (!credentialsMatching) {
      return res.status(500).send("Invalid Credentials");
    }

    const token = jwt.sign(
      { _id: isEmail._id, full_name:isEmail.full_name, email_id:isEmail.email_id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    // res.cookie('token',token,{maxAge:1000*60*60, httpOnly:true, path:'/'});
    res.cookie("token", token, { maxAge: 1000 * 60 * 60 });

    const reply = {
      full_name: isEmail.full_name,
      email_id: isEmail.email_id,
      password: isEmail.password,
    };
    res.status(200).json({
      user: reply,
      message: "logged in successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
const logoutController = async (req, res) => {
  try {
    res.clearCookie("token", { httpOnly: true, path: "/" });

    res.status(200).send("You have been logged-out successfully...");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
const changePasswordController = async (req, res) => {};
const forgotPasswordController = async (req, res) => {};
// const deleteProfileController = async (req, res) => {};

export {
  registerController,
  loginController,
  logoutController,
  changePasswordController,
  forgotPasswordController,
};
