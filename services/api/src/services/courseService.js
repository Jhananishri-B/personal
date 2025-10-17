const { createCourse, listCourses, getCourse } = require("../models/Course");

// seed some courses if empty
function ensureSeed() {
  if (listCourses().length === 0) {
    const desired = ["C", "C++", "CSS", "DL", "HTML", "Java", "JavaScript", "ML", "Numpy", "Pandas", "Python", "Matplotlib"];
    // sort alphabetically as requested
    desired.sort((a,b)=>a.localeCompare(b));
    desired.forEach(title => createCourse({ title, description: `${title} course`, xp: 50, duration_minutes: 30, modules_json: JSON.stringify([{ title: "Intro", content: "..." }]) }));
  }
}

function list() {
  ensureSeed();
  return listCourses();
}

module.exports = { list, get: getCourse, create: createCourse };