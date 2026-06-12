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

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto pt-[60px] xl:pt-[150px]">
      <div className="flex flex-col lg:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
            {project.num}
          </div>
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {project.category} Project
          </h2>
          <p className="text-white/60">
            {project.description}
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
          </p>
        </div>
        <div className="w-full xl:w-[50%]">slider</div>
      </div>
    </div>
    </motion.div>
  )
}

export default Work
