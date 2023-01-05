const express = require("express");
const errorHandler = require("../../middleware/error");
const User = require("../../models/user");
const { generateAuthToken } = require("../../utils/helpers");
const { FormateUserObj } = require("./UserFormatter");
const { loginUserSchema, signupUserSchema} = require("./validationSchema");
const jwt = require("jsonwebtoken");
const authHandler = require("../../middleware/auth");
const router = express.Router();
require("dotenv").config();

router.get(
  "/",
  authHandler,
  errorHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).send(users);
  })
);

router.get(
  "/logout",
  authHandler,
  errorHandler(async (req, res) => {
    const user = await User.findOne({ token: req.headers.token });
    await User.findOneAndUpdate({ _id: user._id }, { token: "" });
    res.status(200).send({
      status: true,
      message: "Logout successfull!",
    });
  })
);

router.get(
  "/:userId",
  authHandler,
  errorHandler(async (req, res) => {
    const user = await User.findOne({ _id: req.params.userId });
    const UserObj = FormateUserObj(user);
    res.status(200).send({
      status: true,
      message: "User found successfully",
      data: UserObj,
    });
  })
);

router.post("/login", async (req, res) => {
  const payload = req.body;
  const { error } = loginUserSchema(payload);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send({ message: "Invalid Email" });
  }

  if (req.body.password !== user.password) {
    return res.status(400).send({ message: "Invalid Password" });
  }

  const token = generateAuthToken({
    name: user.name,
    email: user.email,
    id: user._id,
  });

  user.token = token;

  await User.findOneAndUpdate({ _id: user._id }, { token: token });

  const UserObj = FormateUserObj(user);
  res.status(200).send({
    status: true,
    message: "Login successfull!",
    token,
    data: UserObj,
  });
});

router.post("/signup", async (req, res) => {
  const payload = req.body;
  const { error } = signupUserSchema(payload);
  if (error) {
    return res
      .status(400)
      .send({ status: false, message: error.details[0].message });
  }
  const checkUserEmail = await User.findOne({ email: req.body.email });
  if (checkUserEmail) {
    return res
      .status(400)
      .send({ status: false, message: "User already exists with this email!" });
  }

  let user = new User(payload);

  user = await user.save();
  const UserObj = FormateUserObj(user);
  res
    .status(200)
    .send({ status: true, message: "Signup successfull!", UserObj });
});

module.exports = router;