const express = require("express");
const router = express.Router();
const crypto = require("crypto");

// naive generator (8 MCQ + 2 code), similar to FastAPI starter
function generateQuizForCourse(courseId) {
  const mcqs = [];
  for (let i=0;i<8;i++){
    const id = `mcq_${i+1}`;
    mcqs.push({
      id,
      type: "mcq",
      question: `Sample MCQ ${i+1} for course ${courseId}: What is 2+${i}?`,
      options: [String(i+1), String(i+2), String(i+3), String(i+4)],
      answer: String(i+2)
    });
  }
  const coding = [];
  for (let i=0;i<2;i++){
    const id = `code_${i+1}`;
    coding.push({
      id,
      type: "code",
      question: `Sample coding problem ${i+1}: Write a function that returns sum of two numbers.`,
      template: "def solve(a,b):\n    return a+b"
    });
  }
  const qs = mcqs.concat(coding);
  // shuffle
  for (let i = qs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [qs[i], qs[j]] = [qs[j], qs[i]];
  }
  return qs;
}

router.post("/start/:courseId", (req, res) => {
  const questions = generateQuizForCourse(req.params.courseId);
  const safe = questions.map(q=>{
    const copy = Object.assign({}, q);
    if (q.type === "mcq") delete copy.answer;
    return copy;
  });
  res.json({ quiz_id: `quiz_${req.params.courseId}_${Date.now()}`, questions: safe });
});

router.post("/submit/:courseId", (req, res) => {
  const answers = req.body.answers || {};
  const questions = generateQuizForCourse(req.params.courseId);
  const answerMap = {};
  questions.forEach(q => { if (q.type === "mcq") answerMap[q.id] = q.answer; });
  let correct = 0;
  const wrong = [];
  Object.entries(answerMap).forEach(([qid, correctAns]) => {
    const given = answers[qid];
    if (String(given) === String(correctAns)) correct++;
    else wrong.push(qid);
  });
  const codingIds = questions.filter(q=>q.type==="code").map(q=>q.id);
  let codingCorrect = 0;
  codingIds.forEach(cid => {
    const code = (answers[cid] || "").toString().trim();
    if (code.length > 5) codingCorrect++;
    else wrong.push(cid);
  });
  const score = ((correct + codingCorrect) / (Object.keys(answerMap).length + codingIds.length)) * 100;
  // simplistic awarded xp
  const awarded_xp = score >= 60 ? 50 : 0;
  res.json({ score, awarded_xp });
});

module.exports = router;