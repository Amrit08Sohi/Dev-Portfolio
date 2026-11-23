export const profile = {
  name: "Amritpal Singh",
  brand: "Amritpal.dev",
  title: "Software Engineer",
  positioning: "I build modern web applications, robust backend systems " +
    "and AI-powered solutions using modern technologies.",
  availability: "Available for opportunities",
  location: "India",
  email: "amritpalsingh003963@gmail.com",
  github: "https://gh.amritsohi.online",
  linkedin: "https://www.linkedin.com/in/amritpal-singh-a2b201227/",
  heroDescription: "Hi, I'm Amritpal Singh, a Full-Stack Software Engineer passionate about building modern web applications, scalable backend systems, and practical AI solutions.",
  about: "I'm a Full-Stack Software Engineer who enjoys turning complex ideas into reliable, user-friendly software solutions.My development experience spans frontend engineering with React, Next.js and TypeScript, alongside backend development using Java, Spring Boot and REST APIs.I'm also exploring the intersection of software engineering and artificial intelligence. I work with technologies such as Spring AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) and Python to build applications that go beyond traditional software functionality.Currently, I'm focused on strengthening my system design, backend engineering and AI integration skills while building products that solve practical problems.",
};


export const navItems = ["about", "skills", "projects", "experience", "achievements", "contact"].map((id) => ({ id, label: id[0].toUpperCase() + id.slice(1) }));

export const skillGroups = [
  { title: "Frontend", icon: "Frontend", skills: ["React","Next.js","TypeScript", "JavaScript", "HTML5", "CSS", "Tailwind"] },
  { title: "Backend", icon: "Backend", skills: ["Java", "Spring Boot","Spring AI", "Node.js", "Express", "Microservices"] },
  { title: "Database", icon: "Database", skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL", "Vector Databases"] },
  { title: "Cloud & DevOps", icon: "Cloud & DevOps", skills: ["Azure", "Docker", "GitHub Actions", "Azure Devops"] },
  { title: "Tools", icon: "Tools", skills: ["Git", "Postman","Selenium","JUnit", "IntelliJ IDEA", "VS Code"] },
  { title: "AI & Machine Learning", icon: "AI & Machine Learning", skills: ["Pyhton", "LLMs", "RAG", "Embeddings", "Vector Search"] },
];

export const projects = [
  { id: "placement", number: "01", title: "Placement Management System", description: "A role-based platform for managing student information and jobs, placement records and related activities.", tags: ["React", "Spring Boot", "MongoDB"], category: "Java", accent: "violet", architecture: "Role-based React client → REST API → Spring Boot services → MongoDB", features: ["Admin Panel", "RBAC (Student, Admin)", "Export Pleacement Records in CSV" ] },
  { id: "azure-files", number: "02", title: "Azure File Management Application", description: "A cloud-based file management solution with secure file access and shareable links.", tags: [".NET", "Azure", "Blob Storage"], category: "Cloud", accent: "blue", architecture: "Web client → .NET API → Azure Blob Storage → SAS access layer", features: ["Secure upload flows", "Time-bound share links", "Cloud-native storage"] },
  // { id: "task-api", number: "03", title: "Task Management API", description: "A REST API for task management with authentication and task operations.", tags: ["Node.js", "Express", "JWT", "Jest"], category: "Node.js", accent: "orange", architecture: "HTTP clients → Express routes → JWT middleware → task service", features: ["Token authentication", "Task CRUD operations", "Jest test coverage"] },
];

export const experience = [
  { period: "Jan 2026 - Present", role: "System Engineer", company: "TCS", description: "Working with Sitecore Content Hub and Sitecore AI for a multi country-language website environment. Contributing to enterprise web development using Next.js, React and TypeScript.", tags: ["Sitecore Content Hub", "Sitecore DAM", "Sitecore XM Cloud", "Next.js", "Git"] },
  { period: "May 2025 - Dec 2025", role: "Assistant System Engineer - Trainee", company: "TCS", description: "Developed familiarity with enterprise content management and Digital asset management. Gained practical exposure to Sitecore Content Hub administration.", tags: ["Sitecore Content Hub", "DAM"] },
  { period: "Jan 2025 - Apr 2025", role: "Graduate Trainee", company: "TCS", description: "Built foundational knowledge across Java, Spring Boot, MERN, DevOps and AI/ML.", tags: ["Spring Boot", "MERN Stack", "DevOps", "AI/ML"] },
];

export const achievements = [
  { icon: "✦", title: "Academic milestone", detail: "First Rank in College Academics.Runner Up in Hackathon organized by AOSC. Ranked 5th among 400 trainees in the TCS Ignite training program" },
  { icon: "◈", title: "Certifications", detail: "Azure Administrator Associate (AZ-104), Github Actions (GH-200), Google Cloud Certified - Generative AI Leader" },
  { icon: "★", title: "Problem solving", detail: "Solved 200+ DSA Problems on Leetcode." },
];