# Deployment Notes

This repo includes example infrastructure manifests for reference. They are not production-ready.

- docker-compose.yml: development compose bringing up api, web, admin and worker
- infra/nginx/nginx.conf: example reverse proxy
- infra/k8s/deployment.yaml: simple k8s deployment example
- infra/terraform/main.tf: placeholder terraform to provision infra resources

Recommended production steps:
1. Move secrets to environment variables or a secret manager.
2. Use a managed database (Postgres) instead of SQLite.
3. Replace local runner with a secure isolated code-execution service (Judge0, Google Cloud Run sandbox, etc.)
4. Use CI/CD to build, lint and test before deployment.