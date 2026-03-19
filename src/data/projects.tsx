import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGooglecloud,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GiSpaceSuit } from "react-icons/gi";
import { HiLightningBolt } from "react-icons/hi";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  threejs: {
    title: "Three.js",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  huggingface: {
    title: "Hugging Face",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  googlecloud: {
    title: "GCP",
    bg: "black",
    fg: "white",
    icon: <SiGooglecloud />,
  },
  stabilityai: {
    title: "Stability AI",
    bg: "black",
    fg: "white",
    icon: <HiLightningBolt />,
  },
  pollinations: {
    title: "Pollinations.ai",
    bg: "black",
    fg: "white",
    icon: <GiSpaceSuit />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "sentiment-ai",
    category: "AI / NLP",
    title: "Reddit Sentiment Analysis",
    src: "/assets/projects-screenshots/sentiment_ai/1.png",
    screenshots: [
      "/assets/projects-screenshots/sentiment_ai/1.png",
      "/assets/projects-screenshots/sentiment_ai/2.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.vite, PROJECT_SKILLS.docker],
      backend: [PROJECT_SKILLS.fastapi, PROJECT_SKILLS.python, PROJECT_SKILLS.huggingface],
    },
    live: "https://reddit-sentiment-analysis-683774943632.europe-west1.run.app",
    github: "https://github.com/cjdevx-ai/Reddit-Sentiment-Analysis",
    get content() {
      return (
        <div className="flex flex-col gap-6 mt-8">
          <SlideShow images={this.screenshots} />
          <div className="space-y-4 px-4">
            <TypographyP className="italic text-zinc-400 text-lg leading-relaxed">
              Have you ever wondered what the collective voice of a Reddit community truly feels? 
              This project was born from the desire to peek behind the curtain of thousands of comments.
            </TypographyP>
            <TypographyP className="leading-relaxed">
              I built a bridge between the chaotic energy of Reddit and the precision of machine learning. 
              By simply feeding it a URL, the system dives deep into the thread using the <strong>DistilBERT</strong> model. 
              It doesn't just read words; it deciphers intent, classifying emotions into a visual map of 
              positivity, negativity, and neutrality—all delivered through a high-performance FastAPI backend.
            </TypographyP>
            <TypographyP className="leading-relaxed font-bold text-zinc-300">
              It&apos;s not just data; it&apos;s the digital pulse of the internet, analyzed in real-time.
            </TypographyP>
          </div>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "shoe-ai",
    category: "AI / Generative 3D",
    title: "ShoeAI: Prompt to 3D",
    src: "/assets/projects-screenshots/shoe_ai/1.png",
    screenshots: [
      "/assets/projects-screenshots/shoe_ai/1.png",
      "/assets/projects-screenshots/shoe_ai/2.png",
      "/assets/projects-screenshots/shoe_ai/3.png",
      "/assets/projects-screenshots/shoe_ai/4.png",
      "/assets/projects-screenshots/shoe_ai/5.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.threejs, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.fastapi, PROJECT_SKILLS.stabilityai, PROJECT_SKILLS.pollinations, PROJECT_SKILLS.googlecloud],
    },
    live: "https://prompt-to-3d-12190233308.europe-west1.run.app",
    github: "https://github.com/cjdevx-ai/Promt-to-3D-Shoe-AI",
    get content() {
      return (
        <div className="flex flex-col gap-6 mt-8">
          <SlideShow images={this.screenshots} />
          <div className="space-y-4 px-4">
            <TypographyP className="italic text-zinc-400 text-lg leading-relaxed">
              Imagine describing your dream sneaker and seeing it materialize in 3D right before your eyes. 
              That was the mission behind ShoeAI.
            </TypographyP>
            <TypographyP className="leading-relaxed">
              I engineered a complex pipeline that merges <strong>Stability AI</strong> and <strong>Pollinations.ai</strong> 
              to turn abstract text into high-fidelity .glb models. Within 60 seconds, the system handles everything from 
              initial image generation to mesh creation and PBR texturing. 
            </TypographyP>
            <TypographyP className="leading-relaxed">
              Wrapped in a sleek glassmorphic UI, it allows creators to rotate, zoom, and inspect their footwear concepts 
              in a fully interactive environment. It&apos;s where professional design meets the speed of generative AI.
            </TypographyP>
          </div>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
