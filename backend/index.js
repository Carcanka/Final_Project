const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
const port = 3000;
app.use(express.json());
const authRoutes = require ("./routes/auth.routes");
const middlewareAuth = require ("./middlewares/auth.middleware");
const userRoutes = require("./routes/user.routes");
const reqmid = require ("./middlewares/request-tracking.middleware");
const { initalLogging, finalLogging } = require("./middlewares/loggin.middleware");
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(reqmid)
app.use(initalLogging)
app.use("/auth", authRoutes);
app.use("/user",middlewareAuth, userRoutes);
app.use(finalLogging)

app.listen(port, () => {
  console.log("escuchando puerto 3000");
});

module.exports = app;