import main from "../assets/work/main-project.png";
import vrinda from "../assets/work/dashboard-image.png";
import madhav from "../assets/work/Madhav-store-dashboard.png";
import creditCustomer from "../assets/work/Credit Card Customer Report_Dashboard.png";
import creditTransaction from "../assets/work/Credit Card Transaction Report_Dashboard.png";
import hr from "../assets/work/hr-analytics-dashboard.png";
import nptel from "../assets/certificate/NPTEL CERTIFICATE.png";
import internship from "../assets/certificate/Internship certidicate.png";

export const profile = {
  name: "Punu N Gowda",
  role: "Full Stack Developer",
  roles: ["Full Stack Developer", "Java & Spring Boot Engineer", "React Developer"],
  location: "Bengaluru, India",
  email: "punungowda6@gmail.com",
  phone: "+91 63616 66694",
  company: "Tata Consultancy Services",
  status: "Open to Opportunities",
  summary:
    "Full Stack Developer with 1 year of professional experience in Java, Spring Boot and React across healthcare and enterprise integration domains. I built backend services for OneCIAM at TCS and independently engineered a full-stack algorithmic trading system.",
  summary2:
    "I work comfortably with AI-assisted development tools — Claude, GitHub Copilot and Cursor — to ship reliable software faster.",
  socials: [
    { label: "GitHub", href: "https://github.com/PunuNGowda" },
    { label: "LinkedIn", href: "https://linkedin.com/in/punungowda" },
    { label: "Twitter", href: "https://twitter.com/punungowda" },
  ],
  stats: [
    { value: "1+", label: "Years Experience" },
    { value: "10+", label: "Projects Built" },
    { value: "20+", label: "Technologies" },
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    org: "Tata Consultancy Services (TCS)",
    period: "Jun 2025 – Jul 2026",
    desc: "Full Stack Developer on OneCIAM, a healthcare identity and integration platform — Java, Spring Boot, SAP CDC, MuleSoft, Redis and REST APIs for secure healthcare identity data exchange.",
  },
  {
    role: "Data Quality Analyst",
    org: "Anakin Technologies",
    period: "May 2025 – Jun 2025",
    desc: "Validated data across 4 client platforms (Uber, Foodpanda, Blacklane, Pincode) and monitored hourly data updates to keep error rates low.",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    org: "Acharya Institute of Technology, Bengaluru",
    period: "2022 – 2024",
    note: "GPA: 9.4/10",
  },
  {
    degree: "BSc in Computer Science",
    org: "Government Science College, Bengaluru",
    period: "2019 – 2022",
    note: "",
  },
];

export const coreSkills = [
  { name: "Java", level: 82 },
  { name: "JavaScript", level: 78 },
  { name: "Python", level: 74 },
  { name: "SQL", level: 80 },
];

export const skillGroups = [
  { title: "Frontend", skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Recharts"] },
  { title: "Backend", skills: ["Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs", "Microservices", "Node.js", "FastAPI"] },
  { title: "Databases", skills: ["MySQL", "Redis", "TimescaleDB", "H2 Database"] },
  { title: "DevOps & Tools", skills: ["Git", "Maven", "CI/CD", "Linux", "Agile/Scrum", "Postman"] },
  { title: "Integration", skills: ["SAP CDC", "MuleSoft", "ServiceNow"] },
  { title: "AI/ML Exposure", skills: ["LLM APIs", "RAG Pipelines", "Prompt Engineering", "Embeddings"] },
];

export const certificates = [
  { title: "NPTEL Certificate", category: "NPTEL", image: nptel },
  { title: "Internship Certificate", category: "Edunet Foundation", image: internship },
];

export const featuredProjects = [
  {
    title: "Quantitative Algorithmic Trading System",
    tag: "Full Stack · Independently built",
    description:
      "Multi-market quant trading system covering NSE/BSE equities, Binance crypto and Forex — end-to-end from a microservices-based signal engine (MA Crossover, RSI, Bollinger Bands confluence) over Redis Streams and TimescaleDB, to a live React + Recharts dashboard.",
    stack: ["Java", "Spring Boot", "Redis Streams", "TimescaleDB", "React", "Recharts", "Tailwind CSS"],
    link: "",
  },
  {
    title: "AI Tools — Code Analyser Web Platform",
    tag: "Full Stack · Live",
    description:
      "Production web app (FastAPI ASGI on Vercel + Postgres) that maps source code to functional and technical specs across 20+ languages, with Excel compliance reports, full account lifecycle and an admin Ops dashboard with live health probes.",
    stack: ["Vite", "Alpine.js", "FastAPI", "PostgreSQL", "Resend", "Vercel"],
    link: "",
  },
  {
    title: "OneCIAM — Healthcare Identity Platform",
    tag: "Professional · TCS",
    description:
      "Backend services for a healthcare identity and integration platform: REST APIs and MuleSoft integration flows enabling secure identity data exchange between SAP CDC and downstream systems, with Redis caching and zero-defect migrated customer data.",
    stack: ["Java", "Spring Boot", "SAP CDC", "MuleSoft", "Redis", "REST APIs"],
    link: "",
  },
  {
    title: "Data Quality Monitoring",
    tag: "Professional · Anakin Technologies",
    description:
      "Validated and monitored data across four client platforms — Uber, Foodpanda, Blacklane and Pincode — running hourly quality checks to identify defects and keep client datasets accurate.",
    stack: ["Python", "Pandas", "NumPy", "SciPy", "SQL"],
    link: "",
  },
  {
    title: "Sentiment Analysis Web Application",
    tag: "Machine Learning · Live",
    description:
      "Real-time ML web app for sentiment classification achieving 85% accuracy, implementing Random Forest, KNN and Logistic Regression models with hyperparameter tuning and NLP preprocessing.",
    stack: ["Python", "Scikit-learn", "Pandas", "Streamlit", "NLP"],
    link: "https://sentiment-analysis-using-twitter.streamlit.app/",
  },
];

export const analyticsProjects = [
  {
    title: "Vrinda Store Data Analysis",
    category: "Data Analytics using Excel",
    image: vrinda,
    link: "https://github.com/PunuNGowda/Vrinda-Store",
  },
  {
    title: "Madhav Store",
    category: "Data Analytics using Power BI",
    image: madhav,
    link: "https://github.com/PunuNGowda/Madhav-Store-Sales",
  },
  {
    title: "Credit Card Financial Dashboard",
    category: "Data Analytics using Power BI",
    image: creditCustomer,
    link: "https://github.com/PunuNGowda/Credit-Card-Financial-Dashboard",
  },
  {
    title: "HR Analytics",
    category: "Data Analytics using Power BI",
    image: hr,
    link: "https://github.com/PunuNGowda/HR-Analytics",
  },
  {
    title: "Twitter Sentiment Dashboard",
    category: "Streamlit · Live",
    image: main,
    link: "https://sentiment-analysis-using-twitter.streamlit.app/",
  },
  {
    title: "Credit Card Transaction Report",
    category: "Data Analytics using Power BI",
    image: creditTransaction,
    link: "https://github.com/PunuNGowda/Credit-Card-Financial-Dashboard",
  },
];
