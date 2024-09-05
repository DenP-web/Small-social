const jwt = require("jsonwebtoken");

const generateTokenAndSendCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "15d",
  });
  res.cookie("token", token, {
    maxAge: 15 * 24 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== 'development' 
  });
};

module.exports = generateTokenAndSendCookies;
