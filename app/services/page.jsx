"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

import Link from "next/link";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    name: "Web Development",
    description: "Custom website development using modern technologies.",
    href: "/services/web-development",
  },
  {
    num: "02",
    name: "App Development",
    description: "Mobile and desktop application development.",
    href: "/services/app-development",
  },
  {
    num: "03",
    name: "Consulting",
    description: "Expert consulting services for your digital needs.",
    href: "/services/consulting",
  },
];

const Services = () => {
  return <div>services</div>;
};

export default Services;
