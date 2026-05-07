# Git Workflow

## Branch Strategy
- `main` → production only, never commit directly
- `develop` → integration branch, landing zone for finished features
- `feature/*` → one branch per feature
- `fix/*` → bug fixes

## Daily Workflow
1. Always start from develop: `git checkout develop && git pull origin develop`
2. Create feature branch: `git checkout -b feature/name`
3. Work and commit: `git commit -m "feat: description"`
4. Push: `git push origin feature/name`
5. Open PR on GitHub → merge into develop
6. When V1 ready → PR develop into main = deployment

## Commit Message Format
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation
- `chore:` config, tooling
- `refactor:` restructure, no behavior change
- `test:` adding tests