import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function CourseDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    api.get(`/courses/${id}`).then(r=>setCourse(r.data)).catch(()=>nav("/"));
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="page course-detail">
      <aside className="left-rail">
        <div className="avatar">U</div>
        <button onClick={()=>nav("/dashboard")}>Profile / Dashboard</button>
        <button onClick={()=>alert("Feedback")}>Feedback</button>
        <button onClick={()=>{localStorage.removeItem("lj_token"); nav("/")}}>Logout</button>
      </aside>
      <main>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <div className="actions">
          <button onClick={()=>nav("/dashboard")} className="btn-primary">Learning</button>
          <button onClick={()=>{
            if (confirm("Enter full screen?")) document.documentElement.requestFullscreen().catch(()=>{});
            nav(`/quiz/${course.id}`);
          }} className="btn-ghost">Practice - Quiz</button>
        </div>
        <section>
          <h3>Modules</h3>
          <pre>{course.modules_json || "No modules added"}</pre>
        </section>
      </main>
    </div>
  );
}