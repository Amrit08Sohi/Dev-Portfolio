export const profile = {
  name: "Amritpal Singh",
  brand: "Amritpal.dev",
  title: "Software Engineer",
  positioning: "Backend-focused engineer. Full-stack capabilities. Problem-solving mindset.",
  availability: "Available for opportunities",
  location: "[Add location]",
  email: "[add-email@example.com]",
  github: "https://github.com/[your-handle]",
  linkedin: "https://linkedin.com/in/[your-handle]",
  heroDescription: "Hi, I'm Amritpal, a Software Engineer focused on backend development and building modern web applications. I enjoy designing REST APIs, working with databases and creating reliable software solutions.",
  about: "I build dependable systems with a backend-first mindset, then shape the interface around the people using them. My work sits at the intersection of thoughtful APIs, durable data models and focused product experiences.",
};

export const navItems = ["about", "skills", "projects", "experience", "achievements", "contact"].map((id) => ({ id, label: id[0].toUpperCase() + id.slice(1) }));

export const skillGroups = [
  { title: "Backend", icon: "Backend", skills: ["Java", "Spring Boot", "Node.js", "Express"] },
  { title: "Frontend", icon: "Frontend", skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { title: "Database", icon: "Database", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
  { title: "Cloud & DevOps", icon: "Cloud & DevOps", skills: ["Azure", "AWS", "Docker", "GitHub Actions"] },
  { title: "Tools", icon: "Tools", skills: ["Git", "Postman", "IntelliJ IDEA", "VS Code"] },
];

export const projects = [
  { id: "placement", number: "01", title: "Placement Management System", description: "A role-based platform for managing student information, placement records and related activities.", tags: ["React", "Spring Boot", "MongoDB"], category: "Java", accent: "violet", architecture: "Role-based React client → REST API → Spring Boot services → MongoDB", features: ["Student and company records", "Placement workflows", "Role-aware access"] },
  { id: "azure-files", number: "02", title: "Azure File Management Application", description: "A cloud-based file management solution with secure file access and shareable links.", tags: [".NET", "Azure", "Blob Storage"], category: "Cloud", accent: "blue", architecture: "Web client → .NET API → Azure Blob Storage → SAS access layer", features: ["Secure upload flows", "Time-bound share links", "Cloud-native storage"] },
  { id: "task-api", number: "03", title: "Task Management API", description: "A REST API for task management with authentication and task operations.", tags: ["Node.js", "Express", "JWT", "Jest"], category: "Node.js", accent: "orange", architecture: "HTTP clients → Express routes → JWT middleware → task service", features: ["Token authentication", "Task CRUD operations", "Jest test coverage"] },
];

export const experience = [
  { period: "Add dates", role: "Your next role", company: "Company name", description: "Add a verified role, responsibilities and measurable contributions here.", tags: ["Technology", "Technology"] },
  { period: "Add dates", role: "Earlier experience", company: "Company name", description: "Keep your professional story factual and configurable from this data file.", tags: ["Technology", "Technology"] },
];

export const achievements = [
  { icon: "✦", title: "Academic milestone", detail: "Add a verified achievement" },
  { icon: "◈", title: "Certification", detail: "Add a verified certification" },
  { icon: "★", title: "Problem solving", detail: "Add a verified milestone" },
];