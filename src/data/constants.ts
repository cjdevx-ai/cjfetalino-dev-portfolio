export enum SkillNames {
  PYTHON = "python",
  FASTAPI = "fastapi",
  REACT = "react",
  RAG = "rag",
  PYTORCH = "pytorch",
  LANGCHAIN = "langchain",
  NEXTJS = "nextjs",
  OPENAI = "openai",
  HUGGINGFACE = "huggingface",
  TENSORFLOW = "tensorflow",
  LORA_FINETUNING = "lora finetuning",
  LLAMAINDEX = "llama index",
  POSTGRESQL = "postgresql",
  MONGODB = "mongodb",
  DOCKER = "docker",
  COMPUTER_VISION = "computer vision",
  FIREBASE = "firebase",
  AWS = "aws",
  LINUX = "linux",
  GIT = "git",
  GITHUB = "github",
  KERAS = "keras",
  SCIKITLEARN = "scikit learn",
  OLLAMA = "ollama",
  NODEJS = "nodejs",
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
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
    shortDescription: "Core language for AI and Backend. 🐍",
    color: "#3776ab",
    icon: "/svgs/01-python.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 2,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "High-performance AI backends. ⚡",
    color: "#05998b",
    icon: "/svgs/02-fastapi.svg",
  },
  [SkillNames.REACT]: {
    id: 3,
    name: "react",
    label: "React",
    shortDescription: "Building interactive AI UIs. ⚛️",
    color: "#61dafb",
    icon: "/svgs/03-react.svg",
  },
  [SkillNames.RAG]: {
    id: 4,
    name: "rag",
    label: "RAG",
    shortDescription: "Retrieval-Augmented Generation. 🔍",
    color: "#7c3aed",
    icon: "/svgs/04-rag.svg",
  },
  [SkillNames.PYTORCH]: {
    id: 5,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Deep learning research & production. 🔥",
    color: "#ee4c2c",
    icon: "/svgs/05-pytorch.svg",
  },
  [SkillNames.LANGCHAIN]: {
    id: 6,
    name: "langchain",
    label: "LangChain",
    shortDescription: "LLM orchestration and agents. 🔗",
    color: "#00A67E",
    icon: "/svgs/06-langgraph.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Full-stack React framework. ⚛️",
    color: "#000000",
    icon: "/svgs/07-nextjs.svg",
  },
  [SkillNames.OPENAI]: {
    id: 8,
    name: "openai",
    label: "OpenAI",
    shortDescription: "GPT-4 and advanced AI models. 🤖",
    color: "#412991",
    icon: "/svgs/08-openai.svg",
  },
  [SkillNames.HUGGINGFACE]: {
    id: 9,
    name: "huggingface",
    label: "HuggingFace",
    shortDescription: "Home of open-source AI. 🤗",
    color: "#FFD21E",
    icon: "/svgs/09-huggingface.svg",
  },
  [SkillNames.TENSORFLOW]: {
    id: 10,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "End-to-end ML platform. 🧠",
    color: "#ff6f00",
    icon: "/svgs/10-tensorflow.svg",
  },
  [SkillNames.LORA_FINETUNING]: {
    id: 11,
    name: "lora finetuning",
    label: "LoRA",
    shortDescription: "Efficient model adaptation. 🎯",
    color: "#FF6B6B",
    icon: "/svgs/11-lora-finetuning.svg",
  },
  [SkillNames.LLAMAINDEX]: {
    id: 12,
    name: "llama index",
    label: "LlamaIndex",
    shortDescription: "Data framework for LLMs. 🦙",
    color: "#FFD700",
    icon: "/svgs/12-llamaindex.svg",
  },
  [SkillNames.POSTGRESQL]: {
    id: 13,
    name: "postgresql",
    label: "PostgreSQL",
    shortDescription: "Vector search & relational data. 🐘",
    color: "#336791",
    icon: "/svgs/13-postgresql.svg",
  },
  [SkillNames.MONGODB]: {
    id: 14,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Flexible NoSQL database. 🍃",
    color: "#47A248",
    icon: "/svgs/14-mongodb.svg",
  },
  [SkillNames.DOCKER]: {
    id: 15,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerized AI deployments. 🐳",
    color: "#2496ed",
    icon: "/svgs/15-docker.svg",
  },
  [SkillNames.COMPUTER_VISION]: {
    id: 16,
    name: "computer vision",
    label: "Comp. Vision",
    shortDescription: "Teaching machines to see. 👁️",
    color: "#8E44AD",
    icon: "/svgs/16-computer-vision.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Real-time apps and hosting. 🔥",
    color: "#FFCA28",
    icon: "/svgs/17-firebase.svg",
  },
  [SkillNames.AWS]: {
    id: 18,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud infrastructure for AI. ☁️",
    color: "#FF9900",
    icon: "/svgs/19-aws.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "The foundation of all AI servers. 🐧",
    color: "#FCC624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.GIT]: {
    id: 20,
    name: "git",
    label: "Git",
    shortDescription: "Version control for code. 🕵️‍♂️",
    color: "#f1502f",
    icon: "/svgs/20-git.svg",
  },
  [SkillNames.GITHUB]: {
    id: 21,
    name: "github",
    label: "GitHub",
    shortDescription: "Collaboration and CI/CD. 🐙",
    color: "#000000",
    icon: "/svgs/github.png",
  },
  [SkillNames.KERAS]: {
    id: 22,
    name: "keras",
    label: "Keras",
    shortDescription: "Deep learning for humans. 🧠",
    color: "#D00000",
    icon: "/svgs/keras.png",
  },
  [SkillNames.SCIKITLEARN]: {
    id: 23,
    name: "scikit learn",
    label: "Sklearn",
    shortDescription: "Machine learning simplified. 🤖",
    color: "#f7931e",
    icon: "/svgs/sklearn.png",
  },
  [SkillNames.OLLAMA]: {
    id: 24,
    name: "ollama",
    label: "Ollama",
    shortDescription: "Local LLM execution. 🦙",
    color: "#000000",
    icon: "/svgs/ollama.png",
  },
  [SkillNames.NODEJS]: {
    id: 25,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript on the backend. 🔙",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.JS]: {
    id: 26,
    name: "js",
    label: "JavaScript",
    shortDescription: "Making the web interactive. 🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 27,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Typed JavaScript. 🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 28,
    name: "html",
    label: "HTML",
    shortDescription: "The structure of the web. 💀",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 29,
    name: "css",
    label: "CSS",
    shortDescription: "Styling the web. 🎨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
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
    endDate: "Present (2 yrs 6 mos)",
    title: "Intelligent Software Lead Engineer",
    company: "GEARTech",
    description: [
      "Developed and deployed a RAG-based chatbot to fully digitize the ECE department's thesis manuscript library, solving a critical physical storage crisis.",
      "Engineered a real-time semantic retrieval pipeline over the entire archive, enabling future research students to access manuscripts anytime.",
      "Shipped an AI research assistant that surfaces relevant studies, generates topic ideas, and suggests potential thesis titles on demand.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.LANGCHAIN, SkillNames.LLAMAINDEX, SkillNames.OPENAI, SkillNames.RAG],
  },
  {
    id: 2,
    startDate: "February 2025",
    endDate: "Present (1 yr 2 mos)",
    title: "Quality Analyst",
    company: "WSC Sports",
    description: [
      "Monitored and validated real-time sports data and game parameters before live delivery to major league clients including the NBA, NCAA, MLB, La Liga, and FIBA.",
      "Ensured precise event tagging and fulfillment of client-specific data requirements, maintaining high accuracy standards across simultaneous live games.",
      "Supported the delivery of industry-grade, real-time sports data feeds directly to some of the world's most prominent sports organizations.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.POSTGRESQL],
  },
  {
    id: 3,
    startDate: "October 2024",
    endDate: "February 2026 (1 yr 5 mos)",
    title: "Network Technology Engineer",
    company: "ElectrifAI Solutions PH",
    description: [
      "Designed and engineered a dual-connectivity network system for a real-time AI-powered electricity consumption monitoring pipeline, supporting both fixed residential and mobile vehicle deployments.",
      "Built edge devices capable of transmitting data packets over LoRaWAN and GSM 3G/2G, ensuring stable connectivity across two strategic locations.",
      "Enabled real-time anomaly detection for both residential and in-transit electricity consumption by carefully optimizing network parameters for each deployment scenario.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.POSTGRESQL],
  },
  {
    id: 4,
    startDate: "July 2025",
    endDate: "August 2025 (6 mos)",
    title: "AI Software Engineer Intern",
    company: "Simplevia Technologies Inc.",
    description: [
      "Designed and developed responsive websites tailored to client requirements for government agencies and private organizations.",
      "Troubleshot and optimized legacy web systems to enhance performance and reliability.",
      "Shipped 6 projects within 2 months and was formally commended as a strong candidate for full-time absorption.",
    ],
    skills: [SkillNames.REACT, SkillNames.NEXTJS, SkillNames.PYTHON],
  },
  {
    id: 5,
    startDate: "Jan 2025",
    endDate: "Jun 2025 (6 mos)",
    title: "Junior AI Engineer",
    company: "Omdena",
    description: [
      "Built and deployed a deepfake detection system using fine-tuned vision models and multimodal LLMs, enabling automated identification of synthetic media with explainable artifact-level reasoning.",
      "Developed an AI-powered fake job posting detector combining a fine-tuned NLP classifier with an agentic pipeline that cross-references company legitimacy, salary benchmarks, and scam pattern signals to generate structured fraud reports.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.COMPUTER_VISION, SkillNames.OPENAI, SkillNames.HUGGINGFACE],
  },
  {
    id: 6,
    startDate: "Jul 2024",
    endDate: "Sep 2024 (3 months)",
    title: "Electronics Engineering Intern",
    company: "Packetworx Inc",
    description: [
      "Developed a real-time data visualization dashboard for LoRaWAN devices, enabling clients to monitor their data streams live.",
      "Built an automated pipeline for web visualizations using Packetworx's proprietary software stack, the only platform compatible with LoRa data protocols.",
      "Successfully shipped and presented the completed dashboard directly to the CEO by end of internship.",
    ],
    skills: [SkillNames.REACT, SkillNames.NODEJS],
  },
];

export const AFFILIATIONS = [
  {
    title: "Data Tech Specialist",
    company: "AWS Cloud",
    startDate: "Nov 2024",
    endDate: "Aug 2025 (10 mos)",
  },
  {
    title: "Senior Data and ML Associate",
    company: "Google Developer Group",
    startDate: "Nov 2024",
    endDate: "Aug 2025 (10 mos)",
  },
  {
    title: "Researcher",
    company: "Hygears Inc",
    startDate: "Oct 2024",
    endDate: "Jul 2025 (10 months)",
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
