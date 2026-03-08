export enum SkillNames {
  PYTHON = "python",
  POWERBI = "powerbi",
  TABLEAU = "tableau",
  SQL = "sql",
  PANDAS = "pandas",
  NUMPY = "numpy",
  SCIKITLEARN = "scikitlearn",
  TENSORFLOW = "tensorflow",
  PYTORCH = "pytorch",
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NODEJS = "nodejs",
  GIT = "git",
  GITHUB = "github",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "The Swiss Army knife of data science and AI. 🐍🔥",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.POWERBI]: {
    id: 2,
    name: "powerbi",
    label: "Power BI",
    shortDescription: "Turning raw data into interactive insights. 📊✨",
    color: "#f2c811",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  [SkillNames.TABLEAU]: {
    id: 3,
    name: "tableau",
    label: "Tableau",
    shortDescription: "Visualizing data like a pro. 📈🎨",
    color: "#e97627",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
  },
  [SkillNames.SQL]: {
    id: 4,
    name: "sql",
    label: "SQL",
    shortDescription: "Querying the truth out of databases. 🗄️🔍",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.PANDAS]: {
    id: 5,
    name: "pandas",
    label: "Pandas",
    shortDescription: "Data manipulation made easy. 🐼📁",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.NUMPY]: {
    id: 6,
    name: "numpy",
    label: "NumPy",
    shortDescription: "The backbone of numerical computing. 🔢⚡",
    color: "#013243",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.SCIKITLEARN]: {
    id: 7,
    name: "scikitlearn",
    label: "Scikit-learn",
    shortDescription: "Machine learning simplified. 🤖📚",
    color: "#f7931e",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  [SkillNames.TENSORFLOW]: {
    id: 8,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Powering deep learning models. 🧠🔥",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.PYTORCH]: {
    id: 9,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Flexible deep learning for researchers. 🔥🏗️",
    color: "#ee4c2c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.JS]: {
    id: 10,
    name: "js",
    label: "JavaScript",
    shortDescription: "Making the web interactive since '95. 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 11,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript with superpowers. 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 12,
    name: "html",
    label: "HTML",
    shortDescription: "The skeleton of the web. 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 13,
    name: "css",
    label: "CSS",
    shortDescription: "Styling with the ultimate drip. 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 14,
    name: "react",
    label: "React",
    shortDescription: "Building UI components with ease. ⚛️✨",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 15,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript on the backend. 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.GIT]: {
    id: 16,
    name: "git",
    label: "Git",
    shortDescription: "Version control for code safety. 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 17,
    name: "github",
    label: "GitHub",
    shortDescription: "Where code lives and collaborates. 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "July 2025",
    endDate: "August 2025",
    title: "Software Engineer Intern",
    company: "Simplevia Technologies Inc.",
    description: [
      "Designed and developed responsive websites tailored to client requirements.",
      "Troubleshot and optimized existing systems to enhance performance and reliability.",
    ],
    skills: [SkillNames.HTML, SkillNames.CSS, SkillNames.JS, SkillNames.REACT],
  },
  {
    id: 2,
    startDate: "February 2025",
    endDate: "August 2025",
    title: "Quality Analyst",
    company: "WSC Sports",
    description: [
      "Monitored, analyzed, and maintained real-time sports data accuracy and integrity during live games.",
      "Conducted in-depth data analysis and implemented immediate corrective actions on sports event data.",
    ],
    skills: [SkillNames.SQL, SkillNames.PYTHON],
  },
  {
    id: 3,
    startDate: "October 2024",
    endDate: "August 2025",
    title: "Chief Network Technology Officer",
    company: "ElectrifAI Solutions PH",
    description: [
      "Engineered and optimized automated data collection and transfer systems for IoT devices.",
      "Developed investor-focused dashboards by extracting and analyzing key database insights.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.POWERBI, SkillNames.SQL],
  },
  {
    id: 4,
    startDate: "Oct 2024",
    endDate: "August 2025",
    title: "Data and AI/ML Lead",
    company: "Guild of Enthusiasts at Research and Technology",
    description: [
      "Leads end-to-end AI project execution, managing resources and coordinating teams.",
      "Spearheaded web scraping of Metro Manila hospital data and leveraged ML Logistic Regression for predictive forecasting.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.SCIKITLEARN, SkillNames.PANDAS],
  },
  {
    id: 5,
    startDate: "Jan 2022",
    endDate: "Present",
    title: "Freelance Developer",
    company: "Upwork",
    description: [
      "Developed a real-time dashboard that tracks worker entries, exits, and PPE compliance.",
      "Developed an AI model using hospital data for predictive forecasting, reducing wait times by 90%.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.JS, SkillNames.REACT, SkillNames.NODEJS],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
