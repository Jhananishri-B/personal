# API Spec (Minimal)

This file documents the minimal endpoints implemented in the starter API.

Auth
- POST /auth/register
  - body: { name, email, password }
  - response: { msg, email }
- POST /auth/token
  - form data: username, password
  - response: { access_token, token_type }

Courses
- GET /courses
  - headers: Authorization: Bearer <token>
  - response: [ { id, title, description, xp, duration_minutes, modules_json } ]

- GET /courses/{id}

Quizzes
- POST /quizzes/start/{course_id}
  - start a quiz (returns questions without answers)
- POST /quizzes/submit/{course_id}
  - body: { answers: { questionId: answer } }
  - response: { score, awarded_xp }

Admin
- POST /admin/courses
  - body: { title, description, xp, duration_minutes, modules_json }
  - requires admin JWT (role=admin)

Notes:
- The quiz generator in this starter is deterministic/stubbed; replace with AI or database-backed generator in production.
- Use HTTPS and secure token storage in clients.