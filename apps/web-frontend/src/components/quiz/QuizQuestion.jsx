import React from "react";

export default function QuizQuestion({ q, value, onChange }) {
  if (q.type === "mcq") {
    return (
      <div className="question">
        <h3>{q.question}</h3>
        {q.options.map((opt, i) => (
          <label key={i}><input type="radio" name={q.id} checked={value === opt} onChange={()=>onChange(opt)} /> {opt}</label>
        ))}
      </div>
    );
  }
  return (
    <div>
      <h3>{q.question}</h3>
      <textarea value={value||""} onChange={(e)=>onChange(e.target.value)} placeholder={q.template || "Write your solution"} />
    </div>
  );
}