import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <img src={logo} alt="LearnQuest" width="36" />
        <Link to="/courses" className="brand-title">LearnQuest</Link>
      </div>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/courses">Courses</Link>
      </nav>
    </header>
  );
}