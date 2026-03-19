"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Reddit Sentiment Analysis",
    description: `Deciphering the digital pulse of Reddit. By leveraging the DistilBERT model and a high-performance FastAPI backend, this system transforms thousands of comments into a visual map of collective emotion. It's not just data; it's a peek behind the curtain of online discourse.`,
    link: "https://github.com/cjdevx-ai/Reddit-Sentiment-Analysis",
    images: [
      "/assets/projects-screenshots/sentiment_ai/1.png",
      "/assets/projects-screenshots/sentiment_ai/2.png",
    ],
  },
  {
    id: 2,
    name: "ShoeAI: Prompt to 3D",
    description: `Where imagination meets materialization. ShoeAI merges Stability AI with specialized 3D generative pipelines to turn text prompts into high-fidelity footwear models in under 60 seconds. A professional design suite powered by the cutting edge of generative AI.`,
    link: "https://github.com/cjdevx-ai/Promt-to-3D-Shoe-AI",
    images: [
      "/assets/projects-screenshots/shoe_ai/1.png",
      "/assets/projects-screenshots/shoe_ai/2.png",
      "/assets/projects-screenshots/shoe_ai/3.png",
      "/assets/projects-screenshots/shoe_ai/4.png",
      "/assets/projects-screenshots/shoe_ai/5.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
