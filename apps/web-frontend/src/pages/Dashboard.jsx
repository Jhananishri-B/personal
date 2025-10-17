import React from "react";
import Header from "../components/layout/Header";
import ProgressCard from "../components/dashboard/ProgressCard";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <main className="page dashboard">
        <h2>Dashboard</h2>
        <div className="cards">
          <ProgressCard title="Total XP" value="120" />
          <ProgressCard title="Courses Completed" value="2" />
          <ProgressCard title="Quizzes Taken" value="5" />
        </div>
        <section>
          <h3>Recent Quizzes</h3>
          <ul>
            <li>Python Basics — 80% — Wrong: Q3</li>
            <li>Data Structures — 70% — Wrong: Q2, Q7</li>
          </ul>
        </section>
      </main>
    </div>
  );
}