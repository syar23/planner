/* 12-Week Career Rebuild Plan
   Track: Identity & Access Management (IAM) / Auth  +  AI Security & Governance
   Convergence toward one of: IAM Solutions Architect, AI Security/Governance,
   Security Product Manager, or the Hybrid IAM+AI Security specialist —
   decided by YOU during weeks 1-2 and re-checked at week 7.
*/
const PLAN = [
{
  week: 1,
  theme: "Self-Audit & Reconnaissance",
  hoursPerDay: "1-2 hrs/day",
  why: "You're coming back after a 4-year break with real infosec experience that's easy to undersell. Before learning anything new, get an honest map of what you already have, and scout all four target directions so week 2's decision is based on evidence, not guessing.",
  days: [
    { label: "Day 1", tasks: [
      "Write a skills inventory of your Information Security Engineer role: tools, tech stack, incidents/projects you owned, and what you were actually good at.",
      "Journal 10 minutes: what specifically burned you out (undergrad CS and/or the role) — name it precisely, not vaguely. This matters for picking a track that won't repeat it."
    ]},
    { label: "Day 2", tasks: [
      "Find and read 3 real job descriptions for 'IAM Engineer' or 'Identity Solutions Architect'. List every required skill.",
      "Mark which of those skills you already have from your current role."
    ]},
    { label: "Day 3", tasks: [
      "Find and read 3 real job descriptions for 'AI Security Engineer' or 'AI Governance / Trust & Safety'. List required skills.",
      "Note which overlap with security fundamentals you already know."
    ]},
    { label: "Day 4", tasks: [
      "Find and read 3 real job descriptions for 'Security Product Manager'. List required skills (notice how many are communication/strategy, not coding).",
      "Search LinkedIn for 'security engineer to product manager' — read 2 pivot stories."
    ]},
    { label: "Day 5", tasks: [
      "Search LinkedIn for people whose title blends identity/auth + AI (e.g. 'Identity & Fraud', 'Adaptive Authentication'). Save 3 profiles.",
      "Message or note-down 1 question you'd ask each if you did an informational interview."
    ]},
    { label: "Day 6", tasks: [
      "Score each of the 4 directions 1-5 on: Interest, Pay potential, Burnout risk (lower=better), Time-to-readiness given your visa timeline.",
      "Pick a primary direction and a backup. Write 2 sentences on why."
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
  why: "Lock the target so the next 6 weeks of skill-building aren't scattered. Everything you build from here (IAM fundamentals, then AI security) is useful across all four directions, so committing now costs you nothing even if you adjust later.",
  days: [
    { label: "Day 1", tasks: [
      "Write a 1-paragraph positioning statement: who you are, what you're moving toward, and why your infosec background makes you credible for it.",
      "Pin it somewhere you'll see daily (top of your resume doc, notes app, etc.)."
    ]},
    { label: "Day 2", tasks: [
      "Create a free-tier AWS or Azure account if you don't have one — this is your IAM practice lab.",
      "Create a public GitHub repo for your portfolio work (separate from this planner)."
    ]},
    { label: "Day 3", tasks: [
      "Read an overview of FIDO2/WebAuthn (the standard behind YubiKeys and platform biometrics). Take notes on: what problem it solves, and how it differs from passwords/OTP.",
      "Watch one intro video on passwordless authentication."
    ]},
    { label: "Day 4", tasks: [
      "Hands-on: go to webauthn.io (or similar) and register + authenticate with a WebAuthn credential (use your phone/laptop biometric or a security key).",
      "Write 5-6 sentences explaining what actually happened cryptographically — public/private key pair, no shared secret sent."
    ]},
    { label: "Day 5", tasks: [
      "Read the OWASP Top 10 for LLM Applications. Summarize each of the 10 risks in your own words (1 line each).",
      "Note which of these connects to attacks you already understand from traditional appsec."
    ]},
    { label: "Day 6", tasks: [
      "Write your first public portfolio post: 'Why I'm rebuilding my career' — your break, your background, where you're headed. Publish it (LinkedIn article, dev.to, or GitHub README).",
      "Share it with 2-3 people for honest feedback."
    ]},
    { label: "Day 7 — Review", tasks: [
      "Rest day.",
      "Look back at your Week 1 scorecard — still confident in your primary direction? Adjust if needed, no penalty."
    ]}
  ]
},
{
  week: 3,
  theme: "IAM & Auth Fundamentals I",
  hoursPerDay: "1-3 hrs/day",
  why: "This is the technical core that every one of your 4 target directions needs credibly — not slide-deck knowledge, actual working understanding.",
  days: [
    { label: "Day 1", tasks: [
      "Study authentication factors (something you know/have/are) and why MFA composition matters. Map your own accounts' MFA setup and rate it.",
      "Read how credential stuffing and phishing attacks defeat passwords + SMS OTP."
    ]},
    { label: "Day 2", tasks: [
      "Learn how TOTP (Google Authenticator style codes) actually works: shared secret + time step + HMAC.",
      "Hands-on: write a ~30-line script (Python) that generates a TOTP code from a secret and verify it matches a real authenticator app."
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
      "Study SAML basics and when enterprises still use it over OIDC (legacy SSO, education/gov sectors).",
      "Compare OAuth2/OIDC vs SAML in a short table you write yourself."
    ]},
    { label: "Day 6", tasks: [
      "Hands-on project start: set up a minimal OAuth2/OIDC login demo (use a free tier IdP like Auth0/Okta dev tenant, or a simple open-source library) in your portfolio repo.",
      "Commit progress with a clear README explaining the flow."
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day.", "Re-read your notes from Day1-6 out loud as if explaining to an interviewer."] }
  ]
},
{
  week: 4,
  theme: "IAM & Auth Fundamentals II — Biometrics, Keys, PAM",
  hoursPerDay: "1-3 hrs/day",
  why: "This is where your specific interest — fingerprint detection, YubiKeys — gets real depth, plus the privileged-access side that enterprises pay well for.",
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
      "Study Privileged Access Management (PAM): just-in-time access, credential vaulting, session recording — why it exists beyond normal IAM.",
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
    { label: "Day 7 — Review", tasks: ["Rest day.", "Update your resume skeleton with concrete IAM/auth skills gained so far (be specific, not 'familiar with')."] }
  ]
},
{
  week: 5,
  theme: "AI Security Fundamentals",
  hoursPerDay: "2-3 hrs/day",
  why: "Now layer AI security on top of your (now solid) IAM foundation. This is the fastest-growing, least-saturated niche of the four directions.",
  days: [
    { label: "Day 1", tasks: [
      "Study prompt injection: direct vs indirect injection, with real documented examples. Write your own example attack against a toy prompt.",
      "Study jailbreaking vs prompt injection — know the difference clearly."
    ]},
    { label: "Day 2", tasks: [
      "Study training data / model risks: data poisoning, model theft, sensitive data leakage via outputs.",
      "Read one real incident writeup (e.g. a documented LLM data leak or prompt injection exploit) and summarize it."
    ]},
    { label: "Day 3", tasks: [
      "Study securing the ML/AI pipeline (MLOps security basics): where secrets live, model supply chain, dependency risks (similar to software supply chain but for models/datasets).",
      "Map this against appsec supply-chain concepts you already know from your current role."
    ]},
    { label: "Day 4", tasks: [
      "Study AI risk governance frameworks at a high level: NIST AI RMF and the EU AI Act's risk-tier approach. You don't need to memorize — understand the shape of the reasoning.",
      "Write a half-page summary comparing a technical control (e.g. input filtering) to a governance control (e.g. risk assessment before deployment)."
    ]},
    { label: "Day 5", tasks: [
      "Study how AI is used defensively in security: anomaly detection for fraud/login abuse, behavioral biometrics, deepfake/liveness detection for biometric auth.",
      "This is the direct bridge between your IAM track and AI — note 3 ways AI already touches authentication systems."
    ]},
    { label: "Day 6", tasks: [
      "Hands-on: using a notebook (Python + scikit-learn or similar), build a toy anomaly-detection model on synthetic login data (impossible travel, odd hours, new device) — flag suspicious logins.",
      "Commit it to your portfolio repo with a short writeup of the approach."
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day.", "Re-read Week 5 notes; write down 3 questions you still can't answer confidently and research them next week."] }
  ]
},
{
  week: 6,
  theme: "AI + Identity: The Bridge Project",
  hoursPerDay: "2-3 hrs/day",
  why: "Build the portfolio piece that sits exactly at your chosen intersection — this single project is evidence for all four directions.",
  days: [
    { label: "Day 1", tasks: [
      "Scope a bridge project: 'AI-assisted adaptive authentication' — a login system where risk signals (device, location, behavior) feed a model that decides whether to step up to MFA.",
      "Sketch the architecture on paper/diagram tool before writing code."
    ]},
    { label: "Day 2", tasks: [
      "Build the auth layer: reuse your Week 3-4 OIDC/WebAuthn demo as the login flow.",
      "Add a basic risk-scoring hook (even rule-based to start) that gates whether step-up MFA is required."
    ]},
    { label: "Day 3", tasks: [
      "Wire your Week 5 anomaly-detection model into the risk-scoring hook so it's genuinely AI-assisted, not just rules.",
      "Test with normal vs suspicious simulated logins and confirm behavior changes correctly."
    ]},
    { label: "Day 4", tasks: [
      "Polish the project: clean README with architecture diagram, setup instructions, and a 'why this matters' section connecting it to real-world adaptive auth (e.g. how banks/enterprises do this).",
      "Record a 2-3 minute screen-capture demo walkthrough."
    ]},
    { label: "Day 5", tasks: [
      "Write a portfolio post about the bridge project — publish it, link the repo and demo video.",
      "Post it on LinkedIn with a short summary of what you learned building it."
    ]},
    { label: "Day 6", tasks: [
      "Do 1 informational interview or async Q&A (LinkedIn DM/email) with someone from your Week 1 saved profiles. Ask about their day-to-day and what got them noticed for their role.",
      "Log what you learned — does it confirm or shift your primary direction?"
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day.", "Step back and look at your 3 portfolio pieces so far as a stranger/recruiter would."] }
  ]
},
{
  week: 7,
  theme: "Direction Checkpoint & Strategy/Product Layer",
  hoursPerDay: "2-3 hrs/day",
  why: "Checkpoint #2: with real technical depth now behind you, re-decide your primary target with actual evidence. Then add the strategy/communication layer that matters most if you're leaning Product Manager or Governance/GRC.",
  days: [
    { label: "Day 1 — Decision Checkpoint", tasks: [
      "Re-run your Week 1 scorecard (Interest / Pay / Burnout risk / Time-to-readiness) now that you have real project experience.",
      "Commit to ONE primary direction for the job-search phase (weeks 9-12). Backup direction stays as a secondary set of applications."
    ]},
    { label: "Day 2", tasks: [
      "Learn the basics of product thinking: problem framing, user stories, and one prioritization framework (RICE or MoSCoW).",
      "Apply it: prioritize 5 hypothetical features for your bridge project as if you were its PM."
    ]},
    { label: "Day 3", tasks: [
      "Learn how to write a PRD (Product Requirements Doc). Read 1-2 real example PRDs online.",
      "Start drafting a PRD for 'AI-powered adaptive authentication' — problem, users, requirements, success metrics."
    ]},
    { label: "Day 4", tasks: [
      "Finish the PRD draft.",
      "Learn how to translate technical risk into business risk language (e.g. 'unpatched CVE' → 'X% chance of a $Y incident') — this is the core GRC/PM skill."
    ]},
    { label: "Day 5", tasks: [
      "Write a short AI governance memo/risk-assessment template for a hypothetical AI feature (e.g. the anomaly-detection model from Week 5) — inputs, risks, mitigations, sign-off criteria.",
      "Add both the PRD and governance memo to your portfolio repo/site as strategy artifacts."
    ]},
    { label: "Day 6", tasks: [
      "Do 1 more informational interview, this time specifically in your now-committed primary direction.",
      "Ask directly: 'what would make a candidate with my background stand out to you?'"
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day.", "Review all portfolio artifacts produced so far; list what's still missing for your chosen direction."] }
  ]
},
{
  week: 8,
  theme: "Portfolio Assembly & Gap-Filling",
  hoursPerDay: "2-4 hrs/day",
  why: "Turn scattered projects into a coherent, presentable portfolio, and fill any gap your committed direction still needs.",
  days: [
    { label: "Day 1", tasks: [
      "Build a simple portfolio site or a polished GitHub profile README that ties together: positioning statement, the bridge project, the WebAuthn/YubiKey post, the PRD, and the governance memo.",
      "Make sure every link works and every writeup is readable by a non-technical reviewer too."
    ]},
    { label: "Day 2", tasks: [
      "Identify your single biggest remaining gap for your committed direction (e.g. a cert, a specific tool, a cloud IAM service like AWS IAM Identity Center / Azure AD).",
      "Start closing it — first study session."
    ]},
    { label: "Day 3", tasks: ["Continue closing the gap identified Day 2 — hands-on practice, not just reading."] },
    { label: "Day 4", tasks: [
      "If pursuing a relevant certification (e.g. a foundational cloud security/IAM cert) is realistic within your visa timeline, register for it or schedule the exam now.",
      "If not pursuing a cert, instead write a comparison post ('IAM cert X vs Y — which is actually worth it') as a portfolio/credibility piece."
    ]},
    { label: "Day 5", tasks: [
      "Ask 2 people (mentor, peer, or one of your informational-interview contacts) to review your portfolio and give blunt feedback.",
      "Revise based on feedback."
    ]},
    { label: "Day 6", tasks: [
      "Finalize your portfolio. Publish a short 'here's what I built and learned' recap post.",
      "Update your GitHub pinned repos to show your best 3-4 pieces first."
    ]},
    { label: "Day 7 — Review", tasks: ["Rest day.", "Portfolio is done. Next week the focus shifts fully to job search."] }
  ]
},
{
  week: 9,
  theme: "Resume, LinkedIn & Target List",
  hoursPerDay: "3+ hrs/day",
  why: "Job search ramp begins. Everything before this was to make this week's materials true and specific instead of generic.",
  days: [
    { label: "Day 1", tasks: [
      "Rewrite your resume fully tailored to your committed direction — lead with impact/outcomes from your infosec role, then your new IAM/AI portfolio work as evidence of the pivot.",
      "Keep it to 1 page unless you have 10+ years experience."
    ]},
    { label: "Day 2", tasks: [
      "Rewrite LinkedIn: headline, About section, and Featured section (link portfolio pieces).",
      "Turn on 'Open to Work' visibly if you're comfortable, or keep it recruiter-only."
    ]},
    { label: "Day 3", tasks: [
      "Build a target company list: 20 companies that hire for your direction (mix of realistic + stretch). Note visa/sponsorship policy for each if relevant.",
      "Set up a simple tracker (spreadsheet or the notes area of this site) with columns: company, role, status, date, contact."
    ]},
    { label: "Day 4", tasks: [
      "Get your resume reviewed by 1-2 people ideally in security/product roles.",
      "Revise."
    ]},
    { label: "Day 5", tasks: [
      "Write 2-3 reusable cover-letter/outreach message templates for your direction (one per role type if applying to more than one).",
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
  why: "Volume and targeting both matter now — tailored applications plus real conversations, given your tight visa timeline.",
  days: [
    { label: "Day 1", tasks: ["Apply to 3-4 tailored roles (customize resume bullets + a short note per application).", "Follow up on last week's connection requests."] },
    { label: "Day 2", tasks: ["Apply to 3-4 more roles.", "Do 1 informational interview or coffee chat."] },
    { label: "Day 3", tasks: ["Apply to 3-4 more roles.", "Engage genuinely with 3 posts in your target field on LinkedIn (comment, don't just like)."] },
    { label: "Day 4", tasks: ["Apply to 3-4 more roles.", "Publish 1 piece of content (a lesson from your rebuild, a technical tip)."] },
    { label: "Day 5", tasks: ["Apply to remaining target-list roles for the week.", "Reach out to 2 more contacts for informational interviews."] },
    { label: "Day 6", tasks: ["Review the week: response rate, what's landing, what's silent.", "Adjust resume/outreach message if response rate is low."] },
    { label: "Day 7 — Review", tasks: ["Rest day.", "Target: 15+ tailored applications sent this week, tracker fully up to date."] }
  ]
},
{
  week: 11,
  theme: "Interview Preparation",
  hoursPerDay: "3+ hrs/day",
  why: "By now you should have interviews landing or close. Prepare deliberately rather than winging it.",
  days: [
    { label: "Day 1", tasks: [
      "Build a behavioral story bank using the STAR method — 6-8 stories from your infosec role, including one that reframes your 4-year break honestly and confidently.",
      "Practice saying the break story out loud until it feels natural, not defensive."
    ]},
    { label: "Day 2", tasks: [
      "Technical prep: review IAM/auth scenario questions (e.g. 'design SSO for a company with legacy SAML apps and new OIDC apps', 'how would you roll out phishing-resistant MFA').",
      "Practice explaining your bridge project out loud in under 3 minutes."
    ]},
    { label: "Day 3", tasks: [
      "Technical prep: review AI security scenario questions (e.g. 'how would you secure an internal LLM tool against prompt injection').",
      "If leaning Product/GRC: practice a case-style question ('how would you prioritize security fixes vs new features')."
    ]},
    { label: "Day 4", tasks: [
      "Do 1 mock interview (peer, mentor, or record yourself answering 5 questions and review the recording).",
      "Identify your weakest answer and rewrite it."
    ]},
    { label: "Day 5", tasks: [
      "Research each company you have an active interview with: recent news, their product, their security/AI posture if public.",
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
    { label: "Day 2", tasks: ["Research market compensation for your target role/level (levels.fyi, Glassdoor, peer conversations).", "Know your number and your walk-away point before any offer conversation."] },
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
