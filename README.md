# 12-Week Career Rebuild Plan

An interactive, day-by-day task list: rebuilding from Information Security Engineer
toward Identity & Access Management / AI Security — built after a 4-year career break.

Live site: https://syar23.github.io/planner/

## What it is

- 12 weeks × 7 days of concrete tasks (not generic advice) covering IAM/Auth
  fundamentals (WebAuthn, YubiKeys, OAuth2/OIDC, biometrics), AI security &
  governance, a portfolio-building bridge project, and a job-search sprint.
- Two decision checkpoints (Week 1 and Week 7) to converge on one of four
  target directions: IAM Architect, AI Security/Governance, Security Product
  Manager, or the Hybrid IAM+AI specialist.
- Progress (checkboxes + notes) is saved in your browser via `localStorage` —
  nothing is uploaded anywhere. Sharing the link lets others view the plan;
  it does not sync your progress to them.

## Running locally

Just open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Structure

- `plan.js` — the 12-week content (edit this to adapt the plan)
- `index.html` / `styles.css` / `app.js` — the interactive tracker
- `.github/workflows/deploy.yml` — auto-deploys to GitHub Pages on push to `main`
