"use client";

import React from "react";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiWebpack,
  SiBabel,
  SiMysql,
  SiNpm,
  SiMongodb,
  SiBitbucket,
  SiGithub,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";
import { TbApi, TbHttpGet } from "react-icons/tb";
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

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
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
        duration: "Jan 2020 - August 2020",
      },
      {
        company: "LGED",
        position: "Computer Executive",
        duration: "Aug 2020 - Feb 2023",
      },
      {
        company: "Codexpert Inc.",
        position: "Junior Software Engineer",
        duration: "Mar 2023 - Dec 2025",
      },
      {
        company: "Progressive Bytes Ltd.",
        position: "Software Engineer",
        duration: "Jan 2026 - Present",
      },
    ],
};

const education = {
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
    {
      icon: <FaPhp />,
      name: "PHP (OOP, Design Patterns)",
    },
    {
      icon: <FaJsSquare />,
      name: "Node.js (Express.js)",
    },
    {
      icon: <FaWordpress />,
      name: "WordPress (Theme & Plugin Development)",
    },
    {
      icon: <FaWordpress />,
      name: "Headless WordPress",
    },
    {
      icon: <TbApi />,
      name: "REST API",
    },
    {
      icon: <TbHttpGet />,
      name: "AJAX",
    },
    {
      icon: <SiJsonwebtokens />,
      name: "JWT Authentication",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
    },
    {
      icon: <SiBitbucket />,
      name: "Bitbucket",
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
      name: "npm / CLI",
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
    <div className="container mx-auto pt-[60px] xl:pt-[150px]">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] mb-4">
        <TabsList className="flex flex-col w-full max-w-[388px] mx-auto xl:mx-0 gap-4">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>
        <div className="min-h-[78vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[38px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3 ">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent">
                          </span>
                          <p className="text-white/68">{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[38px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2 min-h-[184px] h-auto"
                    >
                      <span className="text-accent text-sm font-semibold tracking-wide">
                        {item.passingYear}
                      </span>
                      <h3 className="text-base font-semibold leading-snug text-center lg:text-left">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0" />
                        <p className="text-white/60 text-sm">{item.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex text-center xl:text-left flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{skills.description}</p>
              </div>
              <ScrollArea className="h-[500px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] flex items-center justify-center bg-[#232329] rounded-xl group">
                              <div className="text-4xl group-hover:text-accent transection-all duration-300">{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capetialize">{item.name}</p>
                            </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto xl:mx-0 w-full">
                {about.info.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-[#232329] rounded-xl px-6 py-4 min-h-[60px]"
                  >
                    <span className="text-white/40 text-sm whitespace-nowrap w-[100px] shrink-0 text-left">
                      {item.fieldName}
                    </span>
                    <span className="text-white/20 shrink-0">|</span>
                    {/* Value */}
                    <span className="text-white font-medium text-sm break-all text-left">
                      {item.fieldValue}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
    </motion.div>
  )
};

export default Resume;
