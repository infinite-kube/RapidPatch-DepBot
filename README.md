# RapidPatch-DepBot
Demo for automated patching
Rapid Patch Dependabot Bot (Dependabot + CI)  **Demo flow** 
1) Show `dependabot.yml` (daily schedule, grouping minor/patch).
2) Open a Dependabot PR; CI runs smoke + `npm audit`.
3) Minor/patch PR auto-merges (repo setting: Allow auto-merge).
4) Show branch protection requiring CI on `main`.

**Service scope (v0)** - Node.js only (Java/Python/.NET later) - Minor/patch auto-merge; majors need approval (CODEOWNERS optional)  

**Metrics to report (manual for MVP)** - # PRs opened/merged today - % auto-merged (minor/patch) - Any majors pending approval
