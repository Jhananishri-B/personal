const courseService = require("../services/courseService");

async function listCourses(req, res) {
  try {
    const courses = await courseService.list();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getCourse(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const course = await courseService.get(id);
    if (!course) return res.status(404).json({ error: "Not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function createCourse(req, res) {
  try {
    const payload = req.body;
    const created = await courseService.create(payload);
    res.json({ msg: "created", id: created.id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { listCourses, getCourse, createCourse };