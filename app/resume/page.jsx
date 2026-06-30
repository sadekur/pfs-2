"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiTailwindcss, SiNextdotjs, SiWebpack, SiBabel,
  SiMysql, SiNpm, SiMongodb, SiBitbucket, SiGithub, SiJsonwebtokens,
} from "react-icons/si";
import { TbApi, TbHttpGet } from "react-icons/tb";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaWordpress, FaGitAlt, FaPhp, FaServer,
} from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const tabVariants = {
  hidden: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] } },
  exit:  { opacity: 0, y: -12, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
};

const about = {
  title: "About Me",
  description:
    "Software Engineer with 4+ years of experience building production-grade web applications, WordPress plugins, and full-stack MERN solutions. Passionate about clean architecture, API-driven design, and delivering scalable products.",
  info: [
    { fieldName: "Name",        fieldValue: "Md. Sadekur Rahman" },
    { fieldName: "Phone",       fieldValue: "+88-01780664660" },
    { fieldName: "Experience",  fieldValue: "4+ Years" },
    { fieldName: "Location",    fieldValue: "Uttor Shyamoli, Dhaka" },
    { fieldName: "Nationality", fieldValue: "Bangladeshi" },
    { fieldName: "Email",       fieldValue: "shadekur.rahman60@gmail.com" },
    { fieldName: "Freelance",   fieldValue: "Available for work" },
    { fieldName: "Languages",   fieldValue: "Bengali, English" },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "Over 4 years across software engineering, WordPress plugin development, full-stack MERN applications, frontend engineering, quality assurance, and government IT — from junior roles to production-level software engineering.",
  items: [
    {
      company: "Progressive Byte",
      position: "Software Engineer",
      duration: "Jan 2026 – Present",
    },
    {
      company: "Codexpert Inc.",
      position: "Junior Software Engineer",
      duration: "Mar 2023 – Dec 2025",
    },
    {
      company: "LGED",
      position: "Computer Executive",
      duration: "Sep 2020 – Apr 2023",
    },
    {
      company: "Codexpert Inc.",
      position: "Software QA Engineer",
      duration: "Dec 2019 – Sep 2020",
    },
    {
      company: "IGL Web Solutions Ltd.",
      position: "Web Developer",
      duration: "Jun 2018 – Aug 2018",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "Solid academic foundation in Computer Science & Engineering backed by continuous self-learning through competitive programming platforms — Codewars, HackerRank, and LeetCode.",
  items: [
    {
      institution: "Bangladesh University (BU)",
      degree: "B.Sc. in Computer Science & Engineering",
      passingYear: "2014 – 2018  |  GPA 3.27 / 4.00",
    },
    {
      institution: "Gobindaganj Govt. College",
      degree: "Higher Secondary Certificate (HSC)",
      passingYear: "2012",
    },
    {
      institution: "Kocashahar High School",
      degree: "Secondary School Certificate (SSC)",
      passingYear: "2010",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Full-stack skill set spanning modern frontend frameworks, PHP & Node.js backends, WordPress CMS development, database management, REST API design, and DevOps tooling.",
  skillList: [
    { icon: <FaHtml5 />,        name: "HTML5" },
    { icon: <FaCss3Alt />,      name: "CSS3" },
    { icon: <SiTailwindcss />,  name: "Tailwind CSS" },
    { icon: <FaJsSquare />,     name: "JavaScript (ES6+)" },
    { icon: <FaReact />,        name: "React.js" },
    { icon: <SiNextdotjs />,    name: "Next.js" },
    { icon: <FaPhp />,          name: "PHP (OOP)" },
    { icon: <FaServer />,       name: "Node.js (Express.js)" },
    { icon: <FaWordpress />,    name: "WordPress Plugin Dev" },
    { icon: <FaWordpress />,    name: "Headless WordPress" },
    { icon: <TbApi />,          name: "REST API" },
    { icon: <TbHttpGet />,      name: "AJAX" },
    { icon: <SiJsonwebtokens />,name: "JWT Authentication" },
    { icon: <SiMysql />,        name: "MySQL" },
    { icon: <SiMongodb />,      name: "MongoDB" },
    { icon: <FaGitAlt />,       name: "Git" },
    { icon: <SiGithub />,       name: "GitHub / GitHub Actions" },
    { icon: <SiBitbucket />,    name: "Bitbucket" },
    { icon: <BsGearFill />,     name: "CI/CD & PM2 (VPS)" },
    { icon: <SiWebpack />,      name: "Webpack" },
    { icon: <SiBabel />,        name: "Babel" },
    { icon: <SiNpm />,          name: "npm / CLI" },
  ],
};

const TABS = ["experience", "education", "skills", "about"];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto pt-[60px] xl:pt-[150px]">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex flex-col xl:flex-row gap-[60px] mb-4"
        >
          <TabsList className="flex flex-col w-full max-w-[388px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[78vh] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabVariants}
                initial="hidden"
                animate="enter"
                exit="exit"
              >
                {/* ── Experience ── */}
                {activeTab === "experience" && (
                  <div className="flex flex-col gap-[38px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold text-gradient">{experience.title}</h3>
                    <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{experience.description}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, i) => (
                          <li
                            key={i}
                            className="bg-[#1a1a2e] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent text-sm">{item.duration}</span>
                            <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent shrink-0" />
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                )}

                {/* ── Education ── */}
                {activeTab === "education" && (
                  <div className="flex flex-col gap-[38px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold text-gradient">{education.title}</h3>
                    <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{education.description}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, i) => (
                          <li
                            key={i}
                            className="bg-[#1a1a2e] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2 min-h-[184px] h-auto"
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
                )}

                {/* ── Skills ── */}
                {activeTab === "skills" && (
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold text-gradient">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    <ScrollArea className="h-[500px]">
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.skillList.map((item, i) => (
                          <li key={i}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] flex items-center justify-center bg-[#1a1a2e] rounded-xl group">
                                  <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                )}

                {/* ── About ── */}
                {activeTab === "about" && (
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold text-gradient">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto xl:mx-0 w-full">
                      {about.info.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 bg-[#1a1a2e] rounded-xl px-6 py-4 min-h-[60px]"
                        >
                          <span className="text-white/40 text-sm whitespace-nowrap w-[100px] shrink-0 text-left">
                            {item.fieldName}
                          </span>
                          <span className="text-white/20 shrink-0">|</span>
                          <span className="text-white font-medium text-sm break-all text-left">
                            {item.fieldValue}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
