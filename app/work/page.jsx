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
