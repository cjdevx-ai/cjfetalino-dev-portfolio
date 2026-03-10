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
  LANGCHAIN = "langchain",
  LLAMAINDEX = "llamaindex",
  OPENAI = "openai",
  HUGGINGFACE = "huggingface",
  DOCKER = "docker",
  FASTAPI = "fastapi",
  NEXTJS = "nextjs",
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
  [SkillNames.LANGCHAIN]: {
    id: 18,
    name: "langchain",
    label: "LangChain",
    shortDescription: "Building applications with LLMs through chaining. 🔗🤖",
    color: "#00A67E",
    icon: "/svgs/06-langgraph.svg",
  },
  [SkillNames.LLAMAINDEX]: {
    id: 19,
    name: "llamaindex",
    label: "LlamaIndex",
    shortDescription: "Data framework for LLM applications. 🦙📚",
    color: "#FFD700",
    icon: "/svgs/12-llamaindex.svg",
  },
  [SkillNames.OPENAI]: {
    id: 20,
    name: "openai",
    label: "OpenAI",
    shortDescription: "Pioneering AI with models like GPT-4. 🤖🧠",
    color: "#412991",
    icon: "/svgs/08-openai.svg",
  },
  [SkillNames.HUGGINGFACE]: {
    id: 21,
    name: "huggingface",
    label: "HuggingFace",
    shortDescription: "The home of open-source ML models. 🤗🔥",
    color: "#FFD21E",
    icon: "/svgs/09-huggingface.svg",
  },
  [SkillNames.DOCKER]: {
    id: 22,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerizing applications for consistency. 🐳📦",
    color: "#2496ed",
    icon: "/svgs/15-docker.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 23,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "High performance Python web framework. ⚡🐍",
    color: "#05998b",
    icon: "/svgs/02-fastapi.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 24,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "The React framework for the web. ⚛️🌐",
    color: "#000000",
    icon: "/svgs/07-nextjs.svg",
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
    startDate: "Oct 2023",
    endDate: "Present",
    title: "Intelligent Software Lead Engineer",
    company: "GEARTech",
    description: [
      "Developed and deployed a RAG-based chatbot to fully digitize the ECE department's thesis manuscript library, solving a critical physical storage crisis.",
      "Engineered a real-time semantic retrieval pipeline over the entire archive, enabling future research students to access manuscripts anytime.",
      "Shipped an AI research assistant that surfaces relevant studies, generates topic ideas, and suggests potential thesis titles on demand.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.LANGCHAIN, SkillNames.LLAMAINDEX, SkillNames.OPENAI],
  },
  {
    id: 2,
    startDate: "February 2025",
    endDate: "Present",
    title: "Quality Analyst",
    company: "WSC Sports",
    description: [
      "Monitored and validated real-time sports data and game parameters before live delivery to major league clients including the NBA, NCAA, MLB, La Liga, and FIBA.",
      "Ensured precise event tagging and fulfillment of client-specific data requirements, maintaining high accuracy standards across simultaneous live games.",
      "Supported the delivery of industry-grade, real-time sports data feeds directly to some of the world's most prominent sports organizations.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.SQL],
  },
  {
    id: 3,
    startDate: "October 2024",
    endDate: "February 2026",
    title: "Network Technology Engineer",
    company: "ElectrifAI Solutions PH",
    description: [
      "Designed and engineered a dual-connectivity network system for a real-time AI-powered electricity consumption monitoring pipeline, supporting both fixed residential and mobile vehicle deployments.",
      "Built edge devices capable of transmitting data packets over LoRaWAN and GSM 3G/2G, ensuring stable connectivity across two strategic locations.",
      "Enabled real-time anomaly detection for both residential and in-transit electricity consumption by carefully optimizing network parameters for each deployment scenario.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.SQL],
  },
  {
    id: 4,
    startDate: "July 2025",
    endDate: "August 2025",
    title: "AI Software Engineer Intern",
    company: "Simplevia Technologies Inc.",
    description: [
      "Designed and developed responsive websites tailored to client requirements for government agencies and private organizations.",
      "Troubleshot and optimized legacy web systems to enhance performance and reliability.",
      "Shipped 6 projects within 2 months and was formally commended as a strong candidate for full-time absorption.",
    ],
    skills: [SkillNames.REACT, SkillNames.JS, SkillNames.HTML, SkillNames.CSS],
  },
  {
    id: 5,
    startDate: "Jul 2024",
    endDate: "Sep 2024",
    title: "Electronics Engineering Intern",
    company: "Packetworx Inc",
    description: [
      "Developed a real-time data visualization dashboard for LoRaWAN devices, enabling clients to monitor their data streams live.",
      "Built an automated pipeline for web visualizations using Packetworx's proprietary software stack, the only platform compatible with LoRa data protocols.",
      "Successfully shipped and presented the completed dashboard directly to the CEO by end of internship.",
    ],
    skills: [SkillNames.JS, SkillNames.REACT, SkillNames.NODEJS],
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
