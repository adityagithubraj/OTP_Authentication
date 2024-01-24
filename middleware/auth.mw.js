const jwt = require("jsonwebtoken");
const { BlacklistModel } = require("../model/blacklist_token.model");
require("dotenv").config();

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization; // Correcting the header name to use 'Authorization'
    
    if (!token) {
      return res.status(401).json({ msg: "Please provide a token" });
    }

    const tokenData = await BlacklistModel.findOne({ token });
    if (tokenData) {
      return res.status(401).json({ msg: "Token blacklisted. Please login again" });
    }

    jwt.verify(token, process.env.jwtkey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ msg: "Invalid token" });
      }

      req.decodedData = decoded;
      next();
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { authentication };
