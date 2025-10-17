```markdown
# LearnQuest (Monorepo Starter)

Team 4 - LearnQuest is a modular starter for a personalized online tutoring platform with AI support.

Repository layout (matching your requested structure):
- apps/
  - admin-frontend
  - runner
  - web-frontend
- docs/
- infra/
- scripts/
- services/
  - api
  - embeddings-index
  - worker

Quick start (locally):
1. Install dependencies (on host)
   - You can run each app's install separately. Example:
     cd services/api && npm install
     cd apps/web-frontend && npm install
2. Seed DB (optional)
   - node scripts/seed-data.js
3. Start services
   - node services/api/src/app.js
   - start web frontends with vite / node as configured

This repo contains minimal working stubs and placeholders:
- Express API server (services/api)
- Vite + React web frontend (apps/web-frontend)
- Simple admin frontend stub (apps/admin-frontend)
- Runner with sandbox and an integrator placeholder (apps/runner)
- Worker process and embeddings sync script
- Infra manifests (k8s/nginx/terraform) as examples

Notes:
- Replace placeholder secrets and integrate real AI/runner services before production.
- Compiler / code execution must use a secure sandbox (external service like Judge0 or a properly isolated runner).

Team: Nithya Shri S K, Gokul V, Jhananishri B, Varun S
```