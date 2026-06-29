const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ======================
// Register User
// ======================
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log("✅ User Registered:", user.email);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      message: "User Registered Successfully",
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================
// Login User
// ======================
const loginUser = async (req, res) => {
  try {
    console.log("====================================");
    console.log("LOGIN REQUEST");
    console.log("JWT_SECRET =", process.env.JWT_SECRET);

    const { email, password } = req.body;

    console.log("Email:", email);

    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ User not found");

      return res.status(400).json({
        message: "User Not Found",
      });
    }

    console.log("✅ User Found:", user.email);

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      console.log("❌ Invalid Password");

      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    console.log("✅ Password Matched");

    if (!process.env.JWT_SECRET) {
      console.log("❌ JWT_SECRET is Missing");

      return res.status(500).json({
        message: "JWT_SECRET is Missing",
      });
    }

    console.log("Generating JWT...");

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    console.log("✅ JWT Generated Successfully");

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};