const express = require("express");
const router = express.Router();
const { listCourses, getCourse, createCourse } = require("../controllers/courseController");
const bodyParser = require("body-parser");

// simple auth middleware placeholder
function requireAuth(req, res, next) {
  // In starter, accept any request; production must validate JWT
  next();
}

router.use(bodyParser.json());

router.get("/", requireAuth, (req, res) => listCourses(req, res));
router.get("/:id", requireAuth, (req, res) => getCourse(req, res));
router.post("/", (req,res) => createCourse(req,res));

module.exports = router;