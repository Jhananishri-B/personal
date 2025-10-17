// judge0.js - simple wrapper to call Judge0 API (placeholder)
const fetch = require("node-fetch");

const JUDGE0_URL = process.env.JUDGE0_URL || "https://judge0-ce.p.rapidapi.com";
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY || "";

async function submitToJudge0(sourceCode, languageId = 71) {
  // languageId default = 71 (Python 3) on Judge0
  // This is a stub. Replace with your API key and proper request.
  return {
    token: "stub-token",
    status: "submitted",
    compile_output: null,
    stdout: "stubbed stdout"
  };
}

module.exports = { submitToJudge0 };