import React, { useState } from "react";
import auth from "../../services/auth";

export default function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault();
    try {
      await auth.login(email, password);
      onSuccess && onSuccess();
    } catch (err) {
      alert("Login failed");
    }
  }
  return (
    <form onSubmit={submit} className="login-form">
      <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <div className="actions">
        <button type="submit" className="btn-primary">Login</button>
      </div>
      <div className="google">
        <button type="button" onClick={()=>alert("Google sign-in placeholder")} className="btn-google">Sign in with Google</button>
      </div>
    </form>
  );
}