const { createUser, findByEmail, users } = require("../models/User");
const crypto = require("crypto");

// very simple password handling for starter: DO NOT USE IN PRODUCTION
function hashPassword(pw) {
  return crypto.createHash("sha256").update(pw).digest("hex");
}

async function register({ name, email, password }) {
  if (findByEmail(email)) throw new Error("Email exists");
  const hashed_password = hashPassword(password);
  return createUser({ name, email, hashed_password });
}

async function login(email, password) {
  const user = findByEmail(email);
  if (!user) throw new Error("Invalid credentials");
  if (user.hashed_password !== hashPassword(password)) throw new Error("Invalid credentials");
  // return a fake token for starter (use JWT in prod)
  return Buffer.from(`${email}:${Date.now()}`).toString("base64");
}

module.exports = { register, login, users };