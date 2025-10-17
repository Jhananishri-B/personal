// Minimal in-memory user store. Replace with real DB and hashed passwords in production.
let _uid = 1;
const users = [];

function createUser({ name, email, hashed_password, role = "student", total_rewards = 0 }) {
  const u = { id: _uid++, name, email, hashed_password, role, total_rewards };
  users.push(u);
  return u;
}

function findByEmail(email) {
  return users.find(u => u.email === email);
}

module.exports = { createUser, findByEmail, users };