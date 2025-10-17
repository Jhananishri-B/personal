// Minimal in-memory model (replace with DB in production)
let _id = 1;
const courses = [];

function createCourse({ title, description, xp = 50, duration_minutes = 30, modules_json = null }) {
  const c = { id: _id++, title, description, xp, duration_minutes, modules_json };
  courses.push(c);
  return c;
}

function listCourses() {
  return courses.slice();
}

function getCourse(id) {
  return courses.find(c => c.id === id);
}

module.exports = { createCourse, listCourses, getCourse };