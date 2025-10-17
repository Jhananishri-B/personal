// Simple Express API that mirrors the FastAPI starter functionality but in Node/Express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/courses");
const quizzes = require("./routes/quizzes"); // we'll create a small quizzes route here
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/courses", courseRoutes);
app.use("/quizzes", quizzes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> console.log(`API listening on ${PORT}`));