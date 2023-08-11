const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
const port = 3000;
app.use(express.json());
const authRoutes = require ("./routes/auth.routes");
const middlewareAuth = require ("./middlewares/auth.middleware");
const userRoutes = require("./routes/user.routes");


app.use("/auth", authRoutes);
app.use("/api",middlewareAuth, userRoutes);

app.listen(port, () => {
  console.log("escuchando puerto 3000");
});

module.exports = app;