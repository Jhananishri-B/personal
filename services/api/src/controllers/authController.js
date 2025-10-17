const authService = require("../services/authService");

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await authService.register({ name, email, password });
    res.json({ msg: "user created", email: user.email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function token(req, res) {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.json({ access_token: token, token_type: "bearer" });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}

module.exports = { register, token };