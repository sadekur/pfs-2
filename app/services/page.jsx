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
  return (
    <section className="h-full">
      <div className="container mx-auto h-full xl:pt-8 xl:pb-24">
        <div className="flex flex-col items-center text-center gap-6 pt-5 xl:pt-[150px]">
          <h1 className="h1">Services</h1>
          <p className="max-w-[500px]">I offer a wide range of services to meet your digital needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              <h3 className="text-2xl font-semibold">{service.num}</h3>
              <h4 className="text-xl font-semibold">{service.name}</h4>
              <p className="text-center">{service.description}</p>
              <Link href={service.href} className="flex items-center gap-2 group">
                <span>Learn More</span>
                <BsArrowDownRight className="group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
