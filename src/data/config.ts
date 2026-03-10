const config = {
  title: "Clarence Jay M. Fetalino | Data Scientist & Software Engineer",
  description: {
    long: "Explore the portfolio of Clarence Jay M. Fetalino, a Data Scientist, AI/ML Specialist, and Software Engineer with over 3 years of experience in data analytics, AI solutions, and full-stack development. Discover my projects and expertise in Python, React, and more.",
    short:
      "Portfolio of Clarence Jay M. Fetalino, a Data Scientist and Software Engineer specializing in AI/ML and interactive web experiences.",
  },
  keywords: [
    "Clarence Jay M. Fetalino",
    "portfolio",
    "Data Scientist",
    "Software Engineer",
    "AI/ML Specialist",
    "web development",
    "Python",
    "React",
    "Data Analytics",
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
