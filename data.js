// data.js
// Edit this file to add/update experiences, projects, skills, etc.

const portfolioData = {
  profile: {
    name: "Michael Thomas",
    title: "Discord Bot Developer",
    company: "delivrroblox.net",
    companyUrl: "https://delivrroblox.net",
    bio: "Passionate Discord bot developer specializing in discord.py. Currently crafting scalable bots and automation systems at delivrroblox.net.",
    email: "michael@delivrroblox.net",
    location: "United States",
    avatar: "https://ui-avatars.com/api/?name=Michael+Thomas&size=200&background=5865F2&color=fff&bold=true",
    socials: {
      github: "https://github.com/michaelthomas",
      twitter: "https://twitter.com/michaelthomas",
      linkedin: "https://linkedin.com/in/michaelthomas"
    }
  },

  skills: [
    { name: "discord.py",  level: 95 },
    { name: "Python",      level: 90 },
    { name: "JavaScript",  level: 75 },
    { name: "MongoDB",     level: 70 },
    { name: "Redis",       level: 65 },
    { name: "Docker",      level: 60 },
    { name: "Git",         level: 85 },
    { name: "REST APIs",   level: 80 }
  ],

  experiences: [
    {
      role: "Discord Bot Developer",
      company: "delivrroblox.net",
      companyUrl: "https://delivrroblox.net",
      period: "2023 — Present",
      description: "Developing and maintaining Discord bots using discord.py. Building custom commands, moderation systems, and automation tools for the community.",
      technologies: ["discord.py", "Python", "MongoDB", "Redis"],
      current: true
    },
    {
      role: "Freelance Bot Developer",
      company: "Self-Employed",
      companyUrl: "",
      period: "2021 — 2023",
      description: "Built custom Discord bots for various clients, including moderation bots, economy systems, and music bots.",
      technologies: ["discord.py", "Python", "PostgreSQL"],
      current: false
    }
  ],

  projects: [
    {
      title: "Delivery Bot",
      description: "A comprehensive delivery tracking bot for delivrroblox.net with real-time updates and notifications.",
      technologies: ["discord.py", "Python", "MongoDB"],
      link: "https://delivrroblox.net",
      featured: true
    },
    {
      title: "Moderation Suite",
      description: "Advanced moderation bot with auto-mod, warning system, and comprehensive logging.",
      technologies: ["discord.py", "Python", "Redis"],
      link: "",
      featured: true
    },
    {
      title: "Economy Bot",
      description: "Feature-rich economy system with gambling, shops, and inventory management.",
      technologies: ["discord.py", "Python", "PostgreSQL"],
      link: "",
      featured: false
    }
  ]
};
