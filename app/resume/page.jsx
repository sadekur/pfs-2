"use client";

import { title } from "framer-motion/client";
import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaWordpress,
  FaGitAlt,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiWebpack,
  SiBabel,
  SiMysql,
  SiNpm
} from "react-icons/si";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a passionate web developer with expertise in creating modern, responsive websites and applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sadekur Rahman",
    },
    {
      fieldName: "Phone",
      fieldValue: "+880 1780664660",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ years",
    },
    {
      fieldName: "Location",
      fieldValue: "Dhaka, Bangladesh",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "shadekur.rahman60@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available for work",
    },
    {
      fieldName: "Languages",
      fieldValue: "Bengali, English",
    },
  ],
};

const experience = {
  // icon: <FaWordPress />,
  icon: "assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked on various projects, ranging from small business websites to large-scale web applications. My experience includes both frontend and backend development, allowing me to create seamless user experiences and robust server-side solutions.",
    items: [
      {
        company: "IGL WEB SOLUTIONS LTD.",
        position: "Jounior Web Developer",
        duration: "June 2018 - Aug 2018",
      },
      {
        company: "Codexpert Inc.",
        position: "Testing Engineer",
        duration: "June 2020 - Dec 2020",
      },
      {
        company: "Local Gov. Engineering Division (LGED)",
        position: "Computer Executive",
        duration: "Dec 2020 - Feb 2023",
      },
      {
        company: "Codexpert Inc.",
        position: "Junior Software Engineer",
        duration: "March 2023 - Dec 2025",
      },
      {
        company: "Progressive Bytes Ltd.",
        position: "Software Engineer",
        duration: "Jan 2026 - Present",
      },
    ],
};

const education = {
  // icon: <FaWordPress />,
  icon: "assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have a strong educational background in computer science, which has provided me with a solid foundation in programming, algorithms, and software development principles. I am committed to continuous learning and staying updated with the latest industry trends and technologies.",
    items: [
      {
        institution: "Bangladesh University (BU)",
        degree: "Bachelor of Science in Computer Science and Engineering",
        passingYear: "2018",
      },
      {
        institution: "Gobindaganj Govt. College",
        degree: "Higher Secondary Certificate (HSC)",
        passingYear: "2012",
      },
      {
        institution: "Kocashahar High School",
        degree: "Secondary School Certificate (SSC)",
        passingYear: " 2010",
      },
    ],
};

const skills = {
  icon: "assets/resume/skills.svg",
  title: "My Skills",
  description:
    "Experienced WordPress developer with strong expertise in plugin development, REST API integration, and modern frontend technologies like React and Next.js. Skilled in building scalable and maintainable web applications.",

  skillList: [
    // Frontend
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJsSquare />,
      name: "JavaScript (ES6+)",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },

    // Backend
    {
      icon: <FaPhp />,
      name: "PHP (OOP)",
    },
    {
      icon: <FaWordpress />,
      name: "WordPress (Theme & Plugin Dev)",
    },
    {
      icon: <FaWordpress />,
      name: "Headless WordPress",
    },

    // API & Data
    {
      icon: <FaJsSquare />,
      name: "REST API",
    },
    {
      icon: <FaJsSquare />,
      name: "AJAX",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },

    // Tools
    {
      icon: <FaGitAlt />,
      name: "Git (GitHub, Bitbucket)",
    },
    {
      icon: <SiWebpack />,
      name: "Webpack",
    },
    {
      icon: <SiBabel />,
      name: "Babel",
    },
    {
      icon: <SiNpm />,
      name: "NPM / CLI",
    },
    {
      icon: <FaDatabase />,
      name: "Database Design",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col xl:flex-col">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>
        
        <TabsContent value="experience">
          {/* Experience content goes here */}
        </TabsContent>
        
        <TabsContent value="education">
          {/* Education content goes here */}
        </TabsContent>
        
        <TabsContent value="skills">
          {/* Skills content goes here */}
        </TabsContent>
        
        <TabsContent value="about">
          {/* About content goes here */}
        </TabsContent>
      </Tabs>
    </div>
    </motion.div>
  )
};

export default Resume;
