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
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto pt-[60px] xl:pt-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group cursor-pointer ">
                  <div>
                    <div>{service.num}</div>
                    <Link href={service.href}>
                      <BsArrowDownRight />
                    </Link>
                  </div>
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                  <div className="border-b border-white/28 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
