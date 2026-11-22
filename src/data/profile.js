export const profile = {
  name: "Amritpal Singh",
  brand: "Amritpal.dev",
  title: "Software Engineer",
  positioning: "Backend-focused engineer. Full-stack capabilities. Problem-solving mindset.",
  availability: "Available for opportunities",
  location: "India",
  email: "amritpalsingh003963@gmail.com",
  github: "https://github.com/Amrit08Sohi",
  linkedin: "https://www.linkedin.com/in/amritpal-singh-a2b201227/",
  heroDescription: "Hi, I'm Amritpal, a Software Engineer focused on backend development and building modern web applications. I enjoy designing REST APIs, working with databases and creating reliable software solutions.",
  about: "I’m a System Engineer at TCS who enjoys working across the stack, with a particular interest in backend systems, API design and data-driven applications. My approach is grounded in understanding the problem first, choosing straightforward solutions and writing code that is clear to the next person who works with it. I’m comfortable contributing to frontend work when a product needs it, too.",
};


export const navItems = ["about", "skills", "projects", "experience", "achievements", "contact"].map((id) => ({ id, label: id[0].toUpperCase() + id.slice(1) }));

export const skillGroups = [
  { title: "Backend", icon: "Backend", skills: ["Java", "Spring Boot", "Node.js", "Express", "Python"] },
  { title: "Frontend", icon: "Frontend", skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind"] },
  { title: "Database", icon: "Database", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
  { title: "Cloud & DevOps", icon: "Cloud & DevOps", skills: ["Azure", "Docker", "GitHub Actions", "Azure Devops"] },
  { title: "Tools", icon: "Tools", skills: ["Git", "Postman", "IntelliJ IDEA", "VS Code"] },
];

export const projects = [
  { id: "placement", number: "01", title: "Placement Management System", description: "A role-based platform for managing student information and jobs, placement records and related activities.", tags: ["React", "Spring Boot", "MongoDB"], category: "Java", accent: "violet", architecture: "Role-based React client → REST API → Spring Boot services → MongoDB", features: ["Admin Panel", "RBAC (Student, Admin)", "Export Pleacement Records in CSV" ] },
  { id: "azure-files", number: "02", title: "Azure File Management Application", description: "A cloud-based file management solution with secure file access and shareable links.", tags: [".NET", "Azure", "Blob Storage"], category: "Cloud", accent: "blue", architecture: "Web client → .NET API → Azure Blob Storage → SAS access layer", features: ["Secure upload flows", "Time-bound share links", "Cloud-native storage"] },
  // { id: "task-api", number: "03", title: "Task Management API", description: "A REST API for task management with authentication and task operations.", tags: ["Node.js", "Express", "JWT", "Jest"], category: "Node.js", accent: "orange", architecture: "HTTP clients → Express routes → JWT middleware → task service", features: ["Token authentication", "Task CRUD operations", "Jest test coverage"] },
];

export const experience = [
  { period: "Jan 2025 - Present", role: "System Engineer", company: "TCS", description: "Add a verified role, responsibilities and measurable contributions here.", tags: ["Sitecore Content Hub", "Sitecore DAM", "Sitecore XM Cloud", "Next.js", "Vercel", "Azure Cloud"] },
  { period: "Jan 2024 - NOV 2024", role: "Backend Developer", company: "NA", description: "Keep your professional story factual and configurable from this data file.", tags: ["Java", "Spring Boot", "Git", "MongoDB"] },
];

export const achievements = [
  { icon: "✦", title: "Academic milestone", detail: "First Rank in College Academics. Ranked 5th among 400 trainees in the TCS Ignite training program" },
  { icon: "◈", title: "Certifications", detail: "Azure Administrator Associate (AZ-104), Github Actions (GH-200), Google Cloud Certified - Generative AI Leader" },
  { icon: "★", title: "Problem solving", detail: "Solved 200+ DSA Problems on Leetcode." },
];