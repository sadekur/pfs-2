import { title } from "framer-motion/client";
import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaWordPress,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiFramer } from "react-icons/si";

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
  icon: <FaWordPress />,
  // icon: "assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked on various projects, ranging from small business websites to large-scale web applications. My experience includes both frontend and backend development, allowing me to create seamless user experiences and robust server-side solutions.",
    items: [
      {
        company: "Codexpert Inc.",
        position: "Testing Engineer",
        duration: "June 2020 - Dec 2020",
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

const Resume = () => {
  return <div>Resume</div>;
};

export default Resume;
