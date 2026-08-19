/* 12-Week Career Rebuild Plan
   North star: build AI/software for climate & energy problems (sustainability tech).
   Weeks 1-6: IAM/Auth + AI Security technical core (kept — genuinely transferable,
   your fastest route to credibility) layered with core software engineering
   fundamentals (Python, SQL, APIs, testing).
   Week 7: checkpoint — pick your sub-track (ML Engineer / Software Engineer /
   Data Engineer / Security-for-climate-infra) inside the climate & energy target.
   Week 8: flagship climate/energy AI-software portfolio project.
   Weeks 9-12: job search retargeted specifically at climate tech, clean energy,
   and sustainability-AI companies.
*/
const PLAN = [
{
  week: 1,
  theme: "Self-Audit & Reconnaissance",
  hoursPerDay: "1-2 hrs/day",
  why: "You're coming back after a 4-year break with real infosec experience that's easy to undersell, aiming at a new target: building AI/software for climate & energy problems. Before learning anything new, map what you already have — including your actual coding fitness — and scout the real sub-tracks inside climate tech so week 2's decision is evidence-based.",
  days: [
    { label: "Day 1", tasks: [
      "Write a skills inventory of your Information Security Engineer role: tools, tech stack, incidents/projects you owned, and what you were actually good at.",
      "Honestly self-rate 1-5 on: Python, SQL, data structures/algorithms, git, cloud platforms, and ML basics. This is your real coding-fitness baseline — no judgment, just data.",
      "Journal 10 minutes: what specifically burned you out (undergrad CS and/or the role) — name it precisely, not vaguely."
    ]},
    { label: "Day 2", tasks: [
      "Find and read 3 real job descriptions for 'ML Engineer' or 'AI Engineer' at climate/energy companies. List every required skill.",
      "Mark which of those skills you already have from your current role or past study."
    ]},
    { label: "Day 3", tasks: [
      "Find and read 3 real job descriptions for 'Software Engineer' at a climate-tech company (grid software, carbon accounting platforms, clean-energy SaaS). List required skills.",
      "Note the tech stacks they mention (languages, frameworks, cloud) — you'll want to target the most common ones."
    ]},
    { label: "Day 4", tasks: [
      "Find and read 3 real job descriptions for 'Data Engineer, Sustainability/ESG' AND 3 for 'Security/Infrastructure Engineer' at an energy or climate-tech company (your fastest bridge, given your background).",
      "List required skills for both; mark overlaps with what you already know."
    ]},
    { label: "Day 5", tasks: [
      "Find 5 climate-tech or clean-energy companies you'd actually want to work at. Note what they build and who their customers are.",
      "Search LinkedIn for 3 people who moved from a traditional tech/security role into climate tech. Save their profiles + 1 question you'd ask each."
    ]},
    { label: "Day 6", tasks: [
      "Score 4 sub-tracks — ML/AI Engineer, Software Engineer, Data Engineer, Security Engineer (climate/energy infra) — on: Interest, Pay potential, Time-to-readiness given your visa timeline, and how much of your current skillset transfers.",
      "Pick a primary sub-track and a backup. Write 2 sentences on why."
    ]},
    { label: "Day 7 — Review", tasks: [
      "Rest day. Skim everything you wrote this week.",
      "Create a private LinkedIn 'Open to Work' setting and start a resume skeleton doc (don't fill it in yet)."
    ]}
  ]
},
{
  week: 2,
  theme: "Decide & Set Up",
  hoursPerDay: "1-3 hrs/day",
  why: "Lock the target so the next weeks of skill-building aren't scattered, and get your dev environment and coding fundamentals to a baseline — everything from here (IAM, AI security, and now core software skills) feeds directly into the climate/energy portfolio project in week 8.",
  days: [
    { label: "Day 1", tasks: [
      "Write a 1-paragraph positioning statement: who you are, that you're moving toward building AI/software for climate & energy, and why your infosec + new technical work makes you credible for it.",
      "Pin it somewhere you'll see daily."
    ]},
    { label: "Day 2", tasks: [
      "Set up your dev environment properly: current Python, a virtual environment tool (venv/uv), VS Code, git configured with your name/email.",
      "Create a free-tier AWS or Azure account (you'll need this for both IAM practice and, later, hosting a small climate-data project).",
      "Create a public GitHub repo for your portfolio work (separate from this planner)."
    ]},
    { label: "Day 3 — Software fundamentals", tasks: [
      "Python refresher: work through core exercises covering functions, list/dict comprehensions, file I/O, and calling a REST API with the `requests` library.",
      "If this felt easy, also do 5-10 basic data-structure/algorithm practice problems (arrays, hashmaps, strings) — this matters for technical interviews later."
    ]},
    { label: "Day 4 — Software fundamentals", tasks: [
      "SQL refresher: joins, GROUP BY/aggregations, and window functions. Non-negotiable for data engineering and most ML roles.",
      "Practice against a free sample dataset (e.g. a public SQLite/CSV dataset) rather than just reading syntax."
    ]},
    { label: "Day 5", tasks: [
      "Read an overview of FIDO2/WebAuthn (the standard behind YubiKeys and platform biometrics) — still a strong differentiator, especially for the security-for-climate-infra sub-track. Note what problem it solves vs passwords/OTP.",
      "Hands-on: register + authenticate a WebAuthn credential at webauthn.io using your phone/laptop biometric or a security key."
    ]},
    { label: "Day 6", tasks: [
      "Write your first public portfolio post: 'Why I'm rebuilding my career toward climate & energy tech' — your break, your background, where you're headed. Publish it (LinkedIn article, dev.to, or GitHub README).",
      "Share it with 2-3 people for honest feedback."
    ]},
    { label: "Day 7 — Review", tasks: [
      "Rest day.",
      "Look back at your Week 1 scorecard — still confident in your primary sub-track? Adjust if needed, no penalty."
    ]}
  ]
},
{
  week: 3,
  theme: "IAM & Auth Fundamentals I",
  hoursPerDay: "1-3 hrs/day",
  why: "Identity & access work is the fastest, highest-credibility technical core you can build on right now, and it's directly useful if your climate/energy sub-track leans security or infrastructure. Real working understanding, not slide-deck knowledge.",
  days: [
    { label: "Day 1", tasks: [
      "Study authentication factors (something you know/have/are) and why MFA composition matters. Map your own accounts' MFA setup and rate it.",
      "Read how credential stuffing and phishing attacks defeat passwords + SMS OTP."
    ]},
    { label: "Day 2", tasks: [
      "Learn how TOTP (Google Authenticator style codes) actually works: shared secret + time step + HMAC.",
      "Hands-on: write a ~30-line Python script that generates a TOTP code from a secret and verify it matches a real authenticator app. (Good Python practice too.)"
    ]},
    { label: "Day 3", tasks: [
      "Study OAuth 2.0: the 4 core roles and the Authorization Code flow step by step.",
      "Diagram the Authorization Code flow from memory, then check it against a reference diagram."
    ]},
    { label: "Day 4", tasks: [
      "Study OpenID Connect (OIDC) — how it layers identity on top of OAuth2, and what an ID token contains.",
      "Decode a sample JWT by hand (header/payload/signature) and identify each claim."
    ]},
    { label: "Day 5", tasks: [
      "Study SAML basics and when enterprises still use it over OIDC (legacy SSO, education/gov/utilities sectors).",
      "Compare OAuth2/OIDC vs SAML in a short table you write yourself."
    ]},
    { label: "Day 6", tasks: [
      "Hands-on project start: set up a minimal OAuth2/OIDC login demo (a free-tier IdP like Auth0/Okta dev tenant, or a simple open-source library) in your portfolio repo.",
      "Commit progress with a clear README explaining the flow — good git/documentation practice."
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day.", "Re-read your notes from Day1-6 out loud as if explaining to an interviewer."] }
  ]
},
{
  week: 4,
  theme: "IAM & Auth Fundamentals II — Biometrics, Keys, PAM",
  hoursPerDay: "1-3 hrs/day",
  why: "This is where your specific interest — fingerprint detection, YubiKeys — gets real depth, plus the privileged-access side that matters for securing critical infrastructure like energy grids.",
  days: [
    { label: "Day 1", tasks: [
      "Study how fingerprint/biometric auth actually works on-device: enrollment, template storage (never raw image), liveness detection, and why it's usually local-only (not sent to a server).",
      "Read how FaceID/Windows Hello combine biometrics with a local secure enclave + WebAuthn."
    ]},
    { label: "Day 2", tasks: [
      "Deep dive on YubiKey / hardware security keys: what's physically inside (secure element), what protocols they speak (FIDO2/U2F, PIV, OTP), and why phishing can't intercept them.",
      "If you own or can borrow one, register it on 2 real services (GitHub, Google) and note the UX."
    ]},
    { label: "Day 3", tasks: [
      "Study Privileged Access Management (PAM): just-in-time access, credential vaulting, session recording — critical for protecting operational technology (OT) in energy/utilities.",
      "Compare PAM tools (CyberArk, HashiCorp Vault, Azure PIM) at a conceptual level."
    ]},
    { label: "Day 4", tasks: [
      "Study common auth attacks: SIM swap, MFA fatigue/push-bombing, session hijacking, token replay.",
      "For each attack, write the specific defense (phishing-resistant MFA, number-matching, token binding)."
    ]},
    { label: "Day 5", tasks: [
      "Hands-on: add WebAuthn/passwordless login to your Week 3 demo project (as an option alongside OIDC), or build a small standalone passwordless demo.",
      "Document the registration + login ceremony in your README with a diagram."
    ]},
    { label: "Day 6", tasks: [
      "Write a technical explainer blog post: 'How your YubiKey actually works' or 'What happens when you unlock your phone with your face' — publish to your portfolio.",
      "This is your first real portfolio artifact — link it from your GitHub profile and LinkedIn."
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day.", "Update your resume skeleton with concrete auth/security skills gained so far (be specific, not 'familiar with')."] }
  ]
},
{
  week: 5,
  theme: "AI Security & ML Engineering Fundamentals",
  hoursPerDay: "2-3 hrs/day",
  why: "Layer AI security and real ML-engineering skills on top of your IAM foundation. AI security is fast-growing and least-saturated; the ML fundamentals here (pandas, scikit-learn) are exactly what you'll need for the climate/energy project in week 8.",
  days: [
    { label: "Day 1", tasks: [
      "Study prompt injection: direct vs indirect injection, with real documented examples. Write your own example attack against a toy prompt.",
      "Study jailbreaking vs prompt injection — know the difference clearly."
    ]},
    { label: "Day 2", tasks: [
      "Study training data / model risks: data poisoning, model theft, sensitive data leakage via outputs.",
      "Read one real incident writeup (e.g. a documented LLM data leak or prompt injection exploit) and summarize it."
    ]},
    { label: "Day 3 — ML fundamentals", tasks: [
      "Learn the basics of the Python data-science stack: pandas for loading/cleaning tabular data, matplotlib/seaborn for a quick plot.",
      "Hands-on: load a public dataset (any CSV — energy consumption, weather, or emissions data works well) and produce 3 basic summary stats + 1 chart."
    ]},
    { label: "Day 4 — ML fundamentals", tasks: [
      "Learn the basics of scikit-learn: train/test split, fitting a simple model (linear regression or a decision tree), and evaluating it (MAE/RMSE or accuracy).",
      "Hands-on: train a simple model on the dataset from Day 3 (e.g. predict next-day energy usage from past usage + weather)."
    ]},
    { label: "Day 5", tasks: [
      "Study how AI is used defensively in security: anomaly detection for fraud/login abuse, behavioral biometrics, deepfake/liveness detection.",
      "Note 3 ways this same anomaly-detection pattern applies to energy/grid monitoring (e.g. detecting abnormal power draw or sensor tampering) — this is your bridge to week 8."
    ]},
    { label: "Day 6", tasks: [
      "Hands-on: build a toy anomaly-detection model on synthetic login data (impossible travel, odd hours, new device) using scikit-learn — flag suspicious logins.",
      "Commit it to your portfolio repo with a short writeup of the approach."
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day.", "Re-read Week 5 notes; write down 3 questions you still can't answer confidently and research them next week."] }
  ]
},
{
  week: 6,
  theme: "Bridge Project: Secure Monitoring for Energy Systems",
  hoursPerDay: "2-3 hrs/day",
  why: "Build a portfolio piece that fuses your security depth with your new ML skills, framed explicitly around energy infrastructure — evidence for the security-for-climate-infra sub-track and a stepping stone to the pure climate/AI project in week 8.",
  days: [
    { label: "Day 1", tasks: [
      "Scope the project: a secure monitoring dashboard for a (simulated) energy system — login via your Week 3-4 OIDC/WebAuthn flow, and an anomaly-detection model (from Week 5) flagging unusual power-consumption or sensor patterns.",
      "Sketch the architecture on paper/diagram tool before writing code."
    ]},
    { label: "Day 2", tasks: [
      "Build the auth layer: reuse your Week 3-4 OIDC/WebAuthn demo as the login flow for the dashboard.",
      "Set up a simple backend (Python — Flask or FastAPI) to serve the data and predictions. Good software-engineering practice: routing, request handling, basic API design."
    ]},
    { label: "Day 3", tasks: [
      "Wire your Week 5 anomaly-detection model into the backend so it scores incoming (simulated) energy data and flags anomalies.",
      "Test with normal vs anomalous simulated data and confirm behavior changes correctly."
    ]},
    { label: "Day 4", tasks: [
      "Build a minimal frontend (even a simple HTML/JS page or a Streamlit app) to visualize the data and flagged anomalies.",
      "Polish the project: clean README with architecture diagram, setup instructions, and a 'why this matters' section connecting it to real-world grid/energy security."
    ]},
    { label: "Day 5", tasks: [
      "Record a 2-3 minute screen-capture demo walkthrough.",
      "Write a portfolio post about the project — publish it, link the repo and demo video, and post on LinkedIn with a short summary."
    ]},
    { label: "Day 6", tasks: [
      "Do 1 informational interview or async Q&A with someone from your Week 1 saved profiles. Ask about their day-to-day and what got them noticed for their role.",
      "Log what you learned — does it confirm or shift your primary sub-track?"
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day.", "Step back and look at your portfolio pieces so far as a stranger/recruiter would."] }
  ]
},
{
  week: 7,
  theme: "Direction Checkpoint & Deeper Software/ML Skills",
  hoursPerDay: "2-3 hrs/day",
  why: "Checkpoint: with real technical depth now behind you, confirm your primary sub-track (ML Engineer / Software Engineer / Data Engineer / Security-for-climate-infra) inside climate & energy tech. Then deepen the software/ML skills that specific sub-track needs most before building the flagship project.",
  days: [
    { label: "Day 1 — Decision Checkpoint", tasks: [
      "Re-run your Week 1 scorecard (Interest / Pay / Time-to-readiness / skill transfer) now that you have real project experience.",
      "Commit to ONE primary sub-track for the flagship project and job-search phase. Backup stays as a secondary set of applications."
    ]},
    { label: "Day 2", tasks: [
      "If leaning ML Engineer: go deeper on model evaluation (train/validation/test splits, overfitting, cross-validation) and try a slightly harder dataset.",
      "If leaning Software/Data Engineer: learn the basics of building a simple data pipeline (scheduled script or Airflow-lite pattern) that ingests, cleans, and stores data on a schedule."
    ]},
    { label: "Day 3", tasks: [
      "Learn basic software testing: write unit tests (pytest) for a piece of code from one of your existing projects.",
      "Learn basic git workflow discipline: branches, meaningful commit messages, a simple PR-style review of your own code."
    ]},
    { label: "Day 4", tasks: [
      "Research 2-3 real public climate/energy datasets (e.g. grid demand, emissions, weather, solar/wind output) you could use for your week 8 flagship project.",
      "Pick one and do initial exploration: what's in it, what's missing, what a useful model or tool built on it could do."
    ]},
    { label: "Day 5", tasks: [
      "Scope the week 8 flagship project in detail: what it predicts/does, what data it uses, what the end deliverable looks like (a model + notebook, a small web app, a dashboard).",
      "Write a short project brief (problem, approach, success criteria) — this doubles as practice for how you'll talk about it in interviews."
    ]},
    { label: "Day 6", tasks: [
      "Do 1 more informational interview, this time specifically in your now-committed sub-track and industry (climate/energy tech).",
      "Ask directly: 'what would make a candidate with my background stand out to you?'"
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day.", "Review all portfolio artifacts produced so far; confirm your week 8 project plan is realistic for the time you have."] }
  ]
},
{
  week: 8,
  theme: "Flagship Project: AI/Software for Climate & Energy",
  hoursPerDay: "2-4 hrs/day",
  why: "This is the single project that most directly proves 'I can build AI/software for climate & energy problems' — not security-flavored, not adjacent, the real thing. Everything before this made you capable of building it credibly in a week.",
  days: [
    { label: "Day 1", tasks: [
      "Build the data pipeline: load and clean your chosen climate/energy dataset (from Week 7), handle missing data, and produce a clean working dataset.",
      "Document your data-cleaning decisions in the README as you go."
    ]},
    { label: "Day 2", tasks: [
      "Build the core: train a model (e.g. forecasting energy demand, predicting solar/wind output, or estimating emissions) OR build the core software feature if you're leaning Software Engineer (e.g. a tool that ingests and visualizes climate/energy data).",
      "Evaluate honestly — report real metrics, not just 'it works'."
    ]},
    { label: "Day 3", tasks: [
      "Build a simple interface for it: a Streamlit/Flask app, a clean Jupyter notebook with visualizations, or an API — whatever best fits your sub-track and is realistic to finish.",
      "Make sure someone non-technical could look at the output and understand what it does."
    ]},
    { label: "Day 4", tasks: [
      "Polish: clean README with problem statement, approach, results, and a 'why this matters for climate/energy' section written in plain language.",
      "Record a 2-3 minute demo walkthrough video."
    ]},
    { label: "Day 5", tasks: [
      "Write a portfolio post about the project — publish it, link the repo and demo, post on LinkedIn.",
      "Update your GitHub pinned repos so this project (and the Week 6 bridge project) show first."
    ]},
    { label: "Day 6", tasks: [
      "Ask 2 people (mentor, peer, or an informational-interview contact) to review the project and give blunt feedback.",
      "Revise based on feedback."
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day.", "Portfolio is done. Next week the focus shifts fully to job search."] }
  ]
},
{
  week: 9,
  theme: "Resume, LinkedIn & Target List",
  hoursPerDay: "3+ hrs/day",
  why: "Job search ramp begins, now specifically targeting climate tech, clean energy, and sustainability-AI companies. Everything before this was to make this week's materials true and specific instead of generic.",
  days: [
    { label: "Day 1", tasks: [
      "Rewrite your resume fully tailored to your committed sub-track and climate/energy industry — lead with impact/outcomes from your infosec role, then your new portfolio work (Week 6 and Week 8 projects) as direct evidence of the pivot.",
      "Keep it to 1 page unless you have 10+ years experience."
    ]},
    { label: "Day 2", tasks: [
      "Rewrite LinkedIn: headline, About section, and Featured section (link both portfolio projects).",
      "Turn on 'Open to Work' visibly if you're comfortable, or keep it recruiter-only."
    ]},
    { label: "Day 3", tasks: [
      "Build a target company list: 20 climate-tech/clean-energy/sustainability-AI companies that hire for your sub-track (mix of realistic + stretch). Note visa/sponsorship policy for each.",
      "Set up a tracker (spreadsheet or the notes area of this site): company, role, status, date, contact."
    ]},
    { label: "Day 4", tasks: [
      "Get your resume reviewed by 1-2 people ideally working in climate tech or your target sub-track.",
      "Revise."
    ]},
    { label: "Day 5", tasks: [
      "Write 2-3 reusable cover-letter/outreach message templates tailored to climate/energy tech.",
      "Start posting content on LinkedIn about your journey (aim for 2x/week going forward) — visibility drives inbound recruiter interest."
    ]},
    { label: "Day 6", tasks: [
      "Identify recruiters/hiring managers at 5 target companies on LinkedIn.",
      "Send 2-3 thoughtful connection requests referencing specific work they do."
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day.", "Materials are ready. Application sprint starts tomorrow."] }
  ]
},
{
  week: 10,
  theme: "Networking & Application Sprint",
  hoursPerDay: "3+ hrs/day",
  why: "Volume and targeting both matter now — tailored applications plus real conversations with people in climate tech, given your tight visa timeline.",
  days: [
    { label: "Day 1", tasks: ["Apply to 3-4 tailored roles (customize resume bullets + a short note per application).", "Follow up on last week's connection requests."] },
    { label: "Day 2", tasks: ["Apply to 3-4 more roles.", "Do 1 informational interview or coffee chat."] },
    { label: "Day 3", tasks: ["Apply to 3-4 more roles.", "Engage genuinely with 3 posts from climate-tech people/companies on LinkedIn (comment, don't just like)."] },
    { label: "Day 4", tasks: ["Apply to 3-4 more roles.", "Publish 1 piece of content (a lesson from your rebuild, a technical tip from your projects)."] },
    { label: "Day 5", tasks: ["Apply to remaining target-list roles for the week.", "Reach out to 2 more contacts for informational interviews."] },
    { label: "Day 6", tasks: ["Review the week: response rate, what's landing, what's silent.", "Adjust resume/outreach message if response rate is low."] },
    { label: "Day 7 — Review", tasks: ["Rest day.", "Target: 15+ tailored applications sent this week, tracker fully up to date."] }
  ]
},
{
  week: 11,
  theme: "Interview Preparation",
  hoursPerDay: "3+ hrs/day",
  why: "By now you should have interviews landing or close. Prepare deliberately across both the technical-coding side and your security/pivot story.",
  days: [
    { label: "Day 1", tasks: [
      "Build a behavioral story bank using the STAR method — 6-8 stories from your infosec role, including one that reframes your 4-year break honestly and confidently.",
      "Practice saying the break story out loud until it feels natural, not defensive."
    ]},
    { label: "Day 2 — Technical prep", tasks: [
      "Practice coding fundamentals: 5-10 data structure/algorithm problems (arrays, hashmaps, strings) at an easy/medium level, timed.",
      "Practice explaining your Week 8 flagship project out loud in under 3 minutes — problem, approach, results, why it matters."
    ]},
    { label: "Day 3 — Technical prep", tasks: [
      "Review ML/software system-design basics relevant to your sub-track (e.g. 'how would you design a data pipeline for real-time grid sensor data', 'how would you monitor a model for drift').",
      "If leaning security-for-climate-infra: also review IAM/auth scenario questions (SSO design, MFA rollout) and be ready to connect them to critical-infrastructure protection."
    ]},
    { label: "Day 4", tasks: [
      "Do 1 mock interview (peer, mentor, or record yourself answering 5 questions and review the recording).",
      "Identify your weakest answer and rewrite it."
    ]},
    { label: "Day 5", tasks: [
      "Research each company you have an active interview with: recent news, their product, their climate/energy focus and tech stack.",
      "Prepare 3-4 specific questions to ask them per company."
    ]},
    { label: "Day 6", tasks: ["Continue applications at a lighter pace (5-8 for the week) so the pipeline doesn't dry up.", "Rest your voice/mind before any interviews scheduled."] },
    { label: "Day 7 — Review", tasks: ["Rest day.", "Confidence check: read your positioning statement from Week 2 — does it still feel true? Update if so."] }
  ]
},
{
  week: 12,
  theme: "Interview Execution, Negotiation & Retro",
  hoursPerDay: "3+ hrs/day",
  why: "Land it, negotiate it well, and set yourself up for whatever comes after week 12 — visa timing means momentum matters here.",
  days: [
    { label: "Day 1", tasks: ["Attend/continue interviews.", "Send a genuine thank-you note within 24 hours of each interview, referencing something specific discussed."] },
    { label: "Day 2", tasks: ["Research market compensation for your target role/level (levels.fyi, Glassdoor, peer conversations) — climate-tech comp can vary widely from big tech, know the real range.", "Know your number and your walk-away point before any offer conversation."] },
    { label: "Day 3", tasks: ["Continue interviews.", "If a visa-timing conversation is needed with a prospective employer, prepare exactly how you'll frame it — proactively, not defensively."] },
    { label: "Day 4", tasks: ["Continue interviews.", "Keep light application volume going (5+ this week) — don't stop until you have a signed offer."] },
    { label: "Day 5", tasks: ["If you receive an offer: take 24-48 hours before responding. Negotiate at least once (comp, start date, or visa support) — don't accept the first number by default."] },
    { label: "Day 6", tasks: [
      "Write your 12-week retrospective: what worked, what you'd change, which portfolio pieces actually got attention.",
      "Decide your next 90-day plan (whether that's onboarding into a new role, or continuing the search with lessons applied)."
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day. You did 12 weeks of real work — take stock of it before starting whatever's next."] }
  ]
}
];
