import React, { useEffect, useState } from "react";
import api from "../services/api";
import CourseCard from "../components/course/CourseCard";
import Header from "../components/layout/Header";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(()=> {
    api.get("/courses").then(r=> setCourses(r.data)).catch(()=> setCourses([]));
  }, []);
  const sorted = courses.slice().sort((a,b)=> a.title.localeCompare(b.title));
  return (
    <div>
      <Header />
      <main className="page courses">
        <h2>Available Courses</h2>
        <div className="grid">
          {sorted.map(c => <CourseCard key={c.id} course={c} />)}
        </div>
      </main>
    </div>
  );
}