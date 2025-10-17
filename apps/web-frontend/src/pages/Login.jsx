import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import "../styles/globals.css";

export default function Login() {
  const nav = useNavigate();
  return (
    <div className="login-page">
      <div className="login-card">
        <img src="/src/assets/logo.svg" width="84" alt="logo" />
        <h1>LearnQuest</h1>
        <p className="quote">"Master skills faster — learn, practice, and earn XP."</p>
        <LoginForm onSuccess={()=>nav("/courses")} />
      </div>
    </div>
  );
}