const config = {
  title: "Clarence Jay M. Fetalino | AI Software Engineer",
  description: {
    long: "Explore the portfolio of Clarence Jay M. Fetalino, an AI Software Engineer with over 3 years of experience in shipping next-gen AI products, autonomous AI agents, and multimodal systems. Discover my projects and expertise in Python, React, and LLMs.",
    short:
      "Portfolio of Clarence Jay M. Fetalino, an AI Software Engineer specializing in Generative AI solutions and interactive web experiences.",
  },
  keywords: [
    "Clarence Jay M. Fetalino",
    "portfolio",
    "AI Software Engineer",
    "Software Engineer",
    "AI/ML Specialist",
    "web development",
    "Python",
    "React",
    "Generative AI",
    "LLMs",
  ],
  author: "Clarence Jay M. Fetalino",
  email: "cjmfetalino18@gmail.com",
  site: "https://clarence-ai-canvas.lovable.app",

  // for github stars button
  githubUsername: "ahley18",
  githubRepo: "cjfetalino-dev-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/ahley18",
    linkedin: "https://www.linkedin.com/in/clarencefetalino/",
    instagram: "https://www.instagram.com/ahley18",
    facebook: "https://www.facebook.com/clarencefetalino",
    github: "https://github.com/ahley18",
  },
};
export { config };
