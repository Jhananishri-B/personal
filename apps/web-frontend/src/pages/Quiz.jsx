import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import QuizQuestion from "../components/quiz/QuizQuestion";

export default function Quiz() {
  const { courseId } = useParams();
  const nav = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(()=> {
    api.post(`/quizzes/start/${courseId}`).then(r => setQuestions(r.data.questions)).catch(()=>nav("/courses"));
  }, [courseId]);

  useEffect(()=>{
    if (!questions.length) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return ()=>clearInterval(timer);
  }, [questions]);

  function onAnswer(qid, val) {
    setAnswers({...answers, [qid]: val});
  }

  async function handleSubmit() {
    try {
      await api.post(`/quizzes/submit/${courseId}`, { answers });
      if (document.fullscreenElement) document.exitFullscreen().catch(()=>{});
      nav("/dashboard");
    } catch (e) {
      alert("Submit failed");
    }
  }

  if (!questions.length) return <div>Preparing quiz...</div>;
  const q = questions[index];

  return (
    <div className="quiz-page">
      <div className="quiz-top">
        <div>Question {index+1} / {questions.length}</div>
        <div className="timer">Time: {Math.floor(timeLeft/60)}:{String(timeLeft%60).padStart(2,'0')}</div>
      </div>
      <QuizQuestion q={q} value={answers[q.id]} onChange={(v)=>onAnswer(q.id, v)} />
      <div className="quiz-actions">
        <button onClick={()=>setIndex(i=>Math.max(0,i-1))} disabled={index===0}>Prev</button>
        {index < questions.length - 1 ? <button onClick={()=>setIndex(i=>i+1)}>Next</button>
          : <button onClick={handleSubmit} className="btn-primary">Submit</button>}
      </div>
    </div>
  );
}