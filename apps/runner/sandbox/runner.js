// runner.js - simplistic local "sandbox" runner (DO NOT USE IN PRODUCTION)
// This file only demonstrates how a runner could be wired. For safety, DO NOT execute untrusted code here.
const { spawn } = require("child_process");

function runPython(code, timeoutMs = 3000) {
  return new Promise((resolve, reject) => {
    const proc = spawn("python3", ["-u", "-c", code], { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => {
      proc.kill("SIGKILL");
      reject(new Error("Timeout"));
    }, timeoutMs);
    proc.stdout.on("data", (d) => (stdout += d.toString()));
    proc.stderr.on("data", (d) => (stderr += d.toString()));
    proc.on("close", (code) => {
      clearTimeout(timer);
      resolve({ code, stdout, stderr });
    });
  });
}

module.exports = { runPython };