"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    name: "WordPress Plugin Development",
    description:
      "Custom WordPress plugin development from scratch — WP.org-published plugins, WooCommerce extensions, OTP/passwordless login systems, CRM integrations, and REST API-driven architectures with React-based admin interfaces.",
    href: "/services/wordpress-plugin-development",
  },
  {
    num: "02",
    name: "Full-Stack Web Development",
    description:
      "End-to-end MERN stack applications with React/Next.js frontends, Node.js/Express backends, MongoDB & MySQL databases — including Stripe payment integration, JWT authentication, and admin dashboard development.",
    href: "/services/fullstack-development",
  },
  {
    num: "03",
    name: "Frontend Development",
    description:
      "Modern, responsive UIs with React.js, Next.js, Tailwind CSS, and JavaScript (ES6+). Pixel-perfect implementation from designs with a focus on performance, accessibility, and smooth user experience.",
    href: "/services/frontend-development",
  },
  {
    num: "04",
    name: "WordPress Theme Development",
    description:
      "Custom WordPress theme development and Headless WordPress setups — decoupled architecture with React/Next.js as the frontend, consuming WordPress content via REST API.",
    href: "/services/wordpress-theme-development",
  },
  {
    num: "05",
    name: "REST API Development",
    description:
      "Scalable REST API design and development using Node.js (Express) or PHP (OOP, Design Patterns), with JWT authentication, AJAX integration, and clean, maintainable data-handling patterns.",
    href: "/services/api-development",
  },
  {
    num: "06",
    name: "CI/CD & Deployment",
    description:
      "Automated CI/CD pipelines with GitHub Actions, VPS deployment and process management with PM2, Git/Bitbucket-based workflows, and production-ready deployment for full-stack web applications.",
    href: "/services/devops-deployment",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto pt-[60px] xl:pt-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group cursor-pointer">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent hover:rotate-45 transition-all duration-500 flex justify-center items-center"
                    href={service.href}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-gradient transition-all duration-500">
                  {service.name}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
