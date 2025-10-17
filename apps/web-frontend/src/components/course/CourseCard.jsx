import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="card-actions">
        <Link to={`/courses/${course.id}`} className="btn-primary">Open</Link>
      </div>
    </div>
  );
}