"use client";
import {motion} from 'framer-motion';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import {BsArrowRight, BsGithub} from 'react-icons/bs';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'Project One',
    description: 'Description of Project One',
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "JavaScript"}],
    image: '/assets/work/thumb1.png',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'Project Two',
    description: 'Description of Project Two',
    stack: [{name: "Next.js"}, {name: "Tailwind CSS"}, {name: "Node.js"}],
    image: '/assets/work/thumb2.png',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    num: '03',
    category: 'Backend',
    title: 'Project Three',
    description: 'Description of Project Three',
    stack: [{name: "Php"}, {name: "Wordpress"}, {name: "MySQL"}],
    image: '/assets/work/thumb3.png',
    github: 'https://github.com',
    live: 'https://example.com',
  },
]
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <div className="container mx-auto pt-[60px] xl:pt-[150px]">
      <div className="flex flex-col lg:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} Project
            </h2>
            <p className="text-white/60">
              {project.description}
            </p>
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                );
              })}
            </ul>
            <div className="border border-white/28"></div>
            <div className="flex items-center gap-4">
              <Link href={project.live} target="_blank" className="flex items-center gap-2 text-white/60 hover:text-white transition-all duration-500">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.github} target="_blank" className="flex items-center gap-2 text-white/60 hover:text-white transition-all duration-500">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPerView={1} loop={true} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
            {projects.map((item, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group felx items-center justify-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full">
                    <Image src={item.image} alt={item.title} width={600} height={400} className="object-cover" />
                  </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Work
