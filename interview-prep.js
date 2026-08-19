/* ML Engineer / MLOps Interview Prep
   Generic, company-agnostic prep organized by round type — based on the
   common structure of ML/MLOps interview loops industry-wide (Codility,
   Coding, ML System Design, Tech Stack/Architecture, Behavioral).
   Extensible: add new sections as you gather more round types.
*/
const SECTIONS = [
{
  id: "coding",
  title: "Coding Round — Python & Data Structures",
  why: "Almost every ML/software role loop has a live or take-home coding round. The bar isn't cleverness — it's clean, correct, well-communicated code under time pressure.",
  groups: [
    { label: "Core practice", tasks: [
      "Do 8-10 timed (30-45 min) problems covering arrays, hashmaps, and strings at easy/medium difficulty.",
      "Do 3-4 medium problems involving sliding window, two pointers, or basic DP — common in 45-60 min coding rounds.",
      "Practice on an unfamiliar platform (Codility/HackerRank style) at least twice so the format itself isn't a surprise."
    ]},
    { label: "Python fluency", tasks: [
      "Review Python idioms you'd actually use under time pressure: list/dict comprehensions, itertools, collections (Counter, defaultdict, deque).",
      "Practice narrating time/space complexity out loud as you write — interviewers grade communication, not just the final answer."
    ]},
    { label: "Interview simulation", tasks: [
      "Do 1-2 full mock rounds (peer, mentor, or timed solo with no notes) and review what you'd do differently.",
      "Practice the 'clarify → plan out loud → code → test with an example → discuss complexity' loop until it's automatic."
    ]}
  ]
},
{
  id: "serving",
  title: "ML System Design — Model Serving Architecture",
  why: "A very common system-design prompt: design serving for both real-time and batch use cases. Interviewers are checking whether you understand the actual tradeoffs, not whether you know a specific vendor's product.",
  groups: [
    { label: "Core concepts", tasks: [
      "Know the real-time vs batch distinction cold: real-time = low latency/online, request-driven; batch = high throughput/offline, schedule-driven.",
      "Understand why serving paths are usually separated (a real-time API vs a batch processor/cron/Spark job) rather than sharing one path.",
      "Learn the role of containerization (Docker) and a serving framework (FastAPI, TensorFlow Serving, TorchServe, or similar) in packaging a model for serving.",
      "Learn the basics of inference orchestration options: Kubernetes jobs/deployments, serverless functions, batch schedulers (Spark, Airflow)."
    ]},
    { label: "Practice prompts", tasks: [
      "Whiteboard (or write a 1-page design doc for) 'design a serving system that supports both real-time and batch predictions' from scratch, 30-45 min, no notes.",
      "In your design, explicitly cover: how inputs differ (stream vs dataset), deployment/scaling/rollback strategy, and monitoring/logging for both paths.",
      "Practice explaining your own Week 6/8 portfolio project's serving approach (even if simple) using this same vocabulary — real project, real answer."
    ]}
  ]
},
{
  id: "drift",
  title: "ML System Design — Model Monitoring, Drift & Alerting",
  why: "This tests whether you think about a model as a living system that degrades, not a one-time artifact. It's one of the most common 'senior enough to be trusted in production' filter questions.",
  groups: [
    { label: "Core concepts", tasks: [
      "Learn the 3 types of drift: concept drift (the relationship between inputs and outputs changes), data drift (input distribution changes), performance drift (metrics degrade).",
      "Learn at least one concrete statistical method for detecting distribution drift: the KS-test (compares two distributions non-parametrically) and PSI (Population Stability Index — a single-number drift metric per feature).",
      "Understand the full loop: detect → store the metric over time → automate the check → alert (Slack/email/monitoring tool) — not just 'notice it manually'."
    ]},
    { label: "Practice prompts", tasks: [
      "Design (30-45 min, write it out) 'a system to monitor model drift and alert the team' — cover what kind(s) of drift you'd monitor, how you'd compute it, where you'd store results, and how alerting triggers.",
      "Practice explaining the difference between monitoring input drift vs. only monitoring output/accuracy metrics, and why relying on accuracy alone is a common red-flag answer.",
      "Write 3-4 sentences on how you'd avoid alert fatigue (thresholds, aggregation windows, severity tiers) — a strong differentiator most candidates skip."
    ]}
  ]
},
{
  id: "training-infra",
  title: "ML System Design — Training Infra, CLI Tools & Experiment Tracking",
  why: "Tests whether you've actually worked with (or deeply understand) how ML training happens on real infrastructure, not just in a notebook.",
  groups: [
    { label: "Training job orchestration", tasks: [
      "Learn the shape of a good answer to 'design a system for submitting model training jobs via a CLI on cloud-native infra': containerize training code, CLI accepts config/dataset/code-path inputs, jobs run on cloud-native infra (Kubernetes, SageMaker, Vertex AI), with job queueing, status reporting, and log collection.",
      "Note the auth/authz angle if multi-user — this is exactly where your IAM background becomes a genuine differentiator in this kind of interview, not just a security-role skill.",
      "Practice a mock answer: 30-45 min, cover containerization, job submission flow, and how you'd report status/errors back to the user."
    ]},
    { label: "Experiment tracking", tasks: [
      "Learn what a good experiment-tracking system tracks: parameters, metrics, artifacts (model files), code/data versions, and how runs are compared.",
      "Learn 1-2 real tools at a conceptual level (MLflow, Weights & Biases) — what problem they solve, not implementation detail.",
      "Know the common 'over-engineering' red flag: building a full custom MLflow clone when a simpler, focused tracking approach would do — practice explaining how you'd scope this pragmatically.",
      "Practice explaining how tracked experiments connect downstream to serving/evaluation — a complete answer closes this loop, an incomplete one stops at 'log the metrics'."
    ]}
  ]
},
{
  id: "tech-stack",
  title: "Tech Stack / Architecture Round",
  why: "This round checks whether you can reason about real tradeoffs in a system you've actually worked on, and think forward rather than just describe what exists.",
  groups: [
    { label: "Prep", tasks: [
      "Pick 1-2 real projects (your Week 6/8 portfolio projects, or your infosec work) and rehearse: why you chose that stack over alternatives, what scalability/performance/cost tradeoffs you hit.",
      "Practice discussing how a stack supports CI/CD and observability — for ML-flavored systems this means model versioning + monitoring, not just app deployment.",
      "Prepare a forward-looking answer to 'how would you evolve this system over the next few years' — interviewers weight this heavily; avoid answers that just restate the current design."
    ]}
  ]
},
{
  id: "behavioral",
  title: "Behavioral, Hiring Manager & Round Table",
  why: "These rounds decide fit and conviction as much as skill. Your story (background + pivot + break) needs to land as confident and coherent, not rehearsed-defensive.",
  groups: [
    { label: "Story bank", tasks: [
      "Build/refresh your STAR story bank (reuse from your 12-week plan Week 11) — make sure at least 2 stories now reference your new ML/software portfolio projects, not only your infosec role.",
      "Practice your career-break-and-pivot narrative until it sounds matter-of-fact, not apologetic.",
      "Prepare a tight 60-second self-introduction/pitch for round-table settings where you might only get one shot to frame yourself."
    ]},
    { label: "Questions to ask them", tasks: [
      "Prepare 3-4 specific questions per company about their ML/engineering practices (how they handle drift, deployment, on-call) — shows you're already thinking like their team.",
      "Prepare 1-2 questions for the hiring manager specifically about team structure and how success is measured in the first 6 months."
    ]}
  ]
}
];
