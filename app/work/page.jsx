"use client";
import {motion} from 'framer-motion';
import React, { useState } from 'react'
import {swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {BsArrowRight, BsGithub} from 'react-icons/bs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'Project One',
    description: 'Description of Project One',
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "JavaScript"}],
    image: 'assets/work/thumb1.png',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'Project Two',
    description: 'Description of Project Two',
    stack: [{name: "Next.js"}, {name: "Tailwind CSS"}, {name: "Node.js"}],
    image: 'assets/work/thumb2.png',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'Project Three',
    description: 'Description of Project Three',
    stack: [{name: "React"}, {name: "Redux"}, {name: "Sass"}],
    image: 'assets/work/thumb3.png',
    github: 'https://github.com',
    live: 'https://example.com',
  },
]
const Work = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Work
    </div>
  )
}

export default Work
