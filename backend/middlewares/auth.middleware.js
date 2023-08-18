const jwt = require("jsonwebtoken");
const { secret } = require("../controllers/auth.controllers");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ mensjae: "acceso denegado" });
  }

  try {
    const payload = jwt.verify(token, secret);
    // console.log("payload", payload);
    req.usuario = payload;
  } catch (e) {
    if (e.name === "JsonWebTokenError") {
      return res.status(401).json({ mensjae: "token invalido" });
    }
  }


  next();
};

module.exports = authMiddleware;