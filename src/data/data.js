export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS" },
      { name: "JavaScript (ES6+)" },
      { name: "React Router DOM" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "REST API Design" },
      { name: "JWT Authentication" }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub" },
      { name: "Cloudinary" },
      { name: "Multer" },
      { name: "Axios" },
      { name: "Postman" },
      { name: "VS Code" }
    ]
  },
  {
    category: "AI / APIs",
    highlight: true,
    items: [
      { name: "Google Gemini API" },
      { name: "Claude (Anthropic) API" }
    ]
  }
];

export const experience = [
  {
    id: 1,
    role: "Software Developer Trainee",
    company: "eSkill Indore",
    period: "Jul 2025 - Present",
    location: "Indore, MP",
    description: [
      "Built full-stack applications with React.js, Node.js, Express.js & MongoDB for better performance",
      "Integrated AI APIs (Google Gemini, Claude) for intelligent content generation",
      "Implemented JWT authentication, role-based access control & secure REST APIs",
      "Managed file uploads via Multer and cloud media storage via Cloudinary",
      "Used Redux Toolkit for global state management across complex applications"
    ]
  }
];

export const projects = [
  {
    id: 1,
    name: "ImagineX - AI-Powered Social Media Platform",
    description: "Social media platform with AI-generated captions via Google Gemini API.",
    tech: ["React", "Vite", "Redux Toolkit", "Node.js", "MongoDB", "JWT", "Cloudinary", "Gemini API"],
    features: [
      "Admin Dashboard to manage users (ban/unban), moderate posts, handle reports",
      "JWT authentication & bcrypt password hashing",
      "Cloudinary-based secure image upload pipeline"
    ],
    github: "https://github.com/manglapatidar",
    live: "#",
    image: "" // Placeholder to be handled in component
  },
  {
    id: 2,
    name: "NoteNest - Study Notes Sharing Platform",
    description: "Students upload study notes (PDF/text) with admin moderation before going live.",
    tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "JWT", "Multer", "Claude API"],
    features: [
      "Claude API integration auto-generates 5-point AI summaries per note",
      "Ratings, comments, saved collections",
      "Subject-wise filtering via MongoDB Aggregation"
    ],
    github: "https://github.com/manglapatidar",
    live: "#",
    image: "" // Placeholder
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mandsaur University, Mandsaur",
    status: "Currently Pursuing",
    score: "CGPA: 7.89",
    year: "Present"
  },
  {
    id: 2,
    degree: "Class XII",
    institution: "Vivekananda Higher Secondary School",
    status: "Completed",
    score: "86%",
    year: "2023"
  },
  {
    id: 3,
    degree: "Class X",
    institution: "Shree J.K. Public School, Sitamau",
    status: "Completed",
    score: "71%",
    year: "2021"
  }
];

export const personalInfo = {
  name: "Mangla Patidar",
  roles: ["MERN Stack Developer", "AI Integration Enthusiast", "Software Developer Trainee"],
  tagline: "I build full-stack web applications powered by React, Node.js, MongoDB — and bring them to life with AI (Gemini & Claude APIs).",
  about: "Software Developer Trainee at eSkill Indore (since Jul 2025), currently pursuing BCA at Mandsaur University (CGPA 7.89), passionate about combining full-stack development with AI integration.",
  email: "monipatel1084@gmail.com",
  phone: "+91 7879536876",
  location: "Sitamau, Mandsaur, MP",
  github: "https://github.com/manglapatidar",
  linkedin: "https://linkedin.com/in/mangla-patidar"
};
