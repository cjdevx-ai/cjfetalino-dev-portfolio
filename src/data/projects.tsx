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
  SiPytorch,
  SiTensorflow,
  SiOnnx,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GiSpaceSuit } from "react-icons/gi";
import { HiLightningBolt } from "react-icons/hi";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
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
      )}
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
  onnx: {
    title: "ONNX",
    bg: "black",
    fg: "white",
    icon: <SiOnnx />,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
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
    id: "portfolio",
    category: "Web Development",
    title: "Interactive 3D Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [
      "/assets/projects-screenshots/portfolio/landing.png",
      "/assets/projects-screenshots/portfolio/navbar.png",
      "/assets/projects-screenshots/portfolio/project.png",
      "/assets/projects-screenshots/portfolio/projects.png",
      "/assets/projects-screenshots/portfolio/skills.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion, PROJECT_SKILLS.threejs],
      backend: [PROJECT_SKILLS.node],
    },
    live: "https://clarence-ai-canvas.lovable.app",
    github: "https://github.com/cjdevx-ai/cjfetalino-dev-portfolio",
    get content() {
      return (
        <div className="flex flex-col gap-6 mt-8">
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
          <div className="space-y-4 px-4">
            <TypographyP className="italic text-zinc-400 text-lg leading-relaxed">
              Why settle for a flat resume when you can have a fully interactive 3D experience?
            </TypographyP>
            <TypographyP className="leading-relaxed">
              This portfolio is not just a collection of links; it&apos;s a cosmic playground. 
              I integrated a custom <strong>Spline</strong> 3D keyboard where each key represents a skill. 
              The entire site features buttery-smooth animations powered by <strong>GSAP</strong> and 
              <strong>Framer Motion</strong>, all wrapped in a Next.js framework.
            </TypographyP>
            <TypographyP className="leading-relaxed font-bold text-zinc-300">
              It&apos;s a showcase of what happens when engineering precision meets creative design.
            </TypographyP>
          </div>
        </div>
      );
    },
  },
  {
    id: "ovoscan-ai",
    category: "AI / Agri-Tech",
    title: "OvoScan AI: Egg Fertility Detection",
    src: "/assets/projects-screenshots/ovoscan_ai/1.png",
    screenshots: [
      "/assets/projects-screenshots/ovoscan_ai/1.png",
      "/assets/projects-screenshots/ovoscan_ai/2.png",
      "/assets/projects-screenshots/ovoscan_ai/3.png",
      "/assets/projects-screenshots/ovoscan_ai/4.png",
      "/assets/projects-screenshots/ovoscan_ai/5.png",
      "/assets/projects-screenshots/ovoscan_ai/6.png",
      "/assets/projects-screenshots/ovoscan_ai/7.png",
      "/assets/projects-screenshots/ovoscan_ai/8.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.fastapi, PROJECT_SKILLS.python, PROJECT_SKILLS.docker, PROJECT_SKILLS.onnx],
    },
    live: "https://ovoscan-ai-683774943632.asia-southeast1.run.app",
    github: "https://github.com/cjdevx-ai/OvoScan-AI",
    get content() {
      return (
        <div className="flex flex-col gap-6 mt-8">
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
          <div className="space-y-4 px-4">
            <TypographyP className="italic text-zinc-400 text-lg leading-relaxed">
              In commercial hatcheries, every egg counts. OvoScan AI was built to bring the power of 
              deep learning to the agricultural front lines.
            </TypographyP>
            <TypographyP className="leading-relaxed">
              I developed a high-performance platform that uses a fine-tuned <strong>YOLO</strong> model 
              to detect egg fertility in real-time. By leveraging <strong>ONNX Runtime</strong> for 
              blazing-fast inference and <strong>FastAPI</strong> for a robust backend, the system 
              delivers instant diagnostic results.
            </TypographyP>
            <TypographyP className="leading-relaxed">
              The frontend features a modern glassmorphic design with custom particle systems, 
              providing a polished and professional experience for industrial users. It&apos;s a perfect 
              synergy of computer vision and modern web architecture.
            </TypographyP>
          </div>
        </div>
      );
    },
  },
  {
    id: "nova-mmda",
    category: "AI / Computer Vision",
    title: "NOVA: Lowlight Speed Detection",
    src: "/assets/projects-screenshots/nova_mmda/1.png",
    screenshots: [
      "/assets/projects-screenshots/nova_mmda/1.png",
      "/assets/projects-screenshots/nova_mmda/2.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.onnx, PROJECT_SKILLS.opencv],
    },
    live: "",
    github: "https://github.com/cjdevx-ai/NOVA-Lowlight-Vehicle-Speed-Detection-Dashboard",
    get content() {
      return (
        <div className="flex flex-col gap-6 mt-8">
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
          <div className="space-y-4 px-4">
            <TypographyP className="italic text-zinc-400 text-lg leading-relaxed">
              Conventional speed cameras struggle in the dark. NOVA (Nocturnal Object & Vehicle Analysis) 
              was engineered to see what others can&apos;t.
            </TypographyP>
            <TypographyP className="leading-relaxed">
              This system uses a fine-tuned <strong>YOLOv11</strong> model combined with 
              <strong>perspective homography</strong> to accurately estimate vehicle speeds under 
              extreme lowlight conditions. It features a real-time dashboard built with Streamlit, 
              capable of tracking multiple vehicles simultaneously using ByteTrack.
            </TypographyP>
            <TypographyP className="leading-relaxed font-bold text-zinc-300">
              It correctly accounts for perspective distortion, transforming pixel coordinates 
              into real-world meters for precise km/h readings at night.
            </TypographyP>
          </div>
        </div>
      );
    },
  },
  {
    id: "nova-experimentation-tool",
    category: "AI / Research",
    title: "NOVA Research Tool",
    src: "/assets/projects-screenshots/nova_experimentation_tool/1.png",
    screenshots: [
      "/assets/projects-screenshots/nova_experimentation_tool/1.png",
      "/assets/projects-screenshots/nova_experimentation_tool/2.png",
      "/assets/projects-screenshots/nova_experimentation_tool/3.png",
      "/assets/projects-screenshots/nova_experimentation_tool/4.png",
      "/assets/projects-screenshots/nova_experimentation_tool/5.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.onnx, PROJECT_SKILLS.opencv, PROJECT_SKILLS.googlecloud],
    },
    live: "https://nova-vehicle-detection.streamlit.app/",
    github: "https://github.com/cjdevx-ai/NOVA-Low-Light-Vehicle-Speed-Detection-Research-Tool",
    get content() {
      return (
        <div className="flex flex-col gap-6 mt-8">
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
          <div className="space-y-4 px-4">
            <TypographyP className="italic text-zinc-400 text-lg leading-relaxed">
              Every great AI model starts with rigorous experimentation. This tool was built to 
              stress-test vehicle detection models across thousands of simulated scenarios.
            </TypographyP>
            <TypographyP className="leading-relaxed">
              I designed this research platform to systematically evaluate how camera resolution, 
              mounting height, and lighting conditions affect model accuracy. It supports ONNX models 
              and provides automated precision/recall metrics by comparing AI detections against 
              human-annotated ground truth.
            </TypographyP>
            <TypographyP className="leading-relaxed">
              Researchers can adjust brightness from -100% to +100% to simulate extreme nighttime 
              environments, ensuring the final NOVA system is battle-tested for real-world deployment.
            </TypographyP>
          </div>
        </div>
      );
    },
  },
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
          <ProjectsLinks live={this.live} repo={this.github} />
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
          <ProjectsLinks live={this.live} repo={this.github} />
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
        </div>
      );
    },
  },
];
export default projects;
