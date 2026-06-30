"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";

// Replace thumb images with real screenshots when available
const projects = [
  {
    num: "01",
    category: "Full-Stack · MERN",
    title: "Human Concern",
    description:
      "MERN-based donation platform with a Next.js/React frontend, user dashboards, admin CMS modules, Stripe payment integration, JWT authentication, and API-driven donation & campaign management.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Stripe" },
    ],
    image: "/assets/work/thumb1.png",
    github: "https://github.com/sadekur",
    live: "https://human-concern-frontend.vercel.app/",
  },
  {
    num: "02",
    category: "Full-Stack · MERN",
    title: "Impact Reports",
    description:
      "Full-stack MERN application with admin dashboards, report management features, REST APIs, and JWT authentication. Deployed to VPS via automated CI/CD with GitHub Actions and PM2.",
    stack: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "JWT" },
      { name: "GitHub Actions" },
    ],
    image: "/assets/work/thumb2.png",
    github: "https://github.com/sadekur",
    live: "https://impact.humanconcernusa.org/",
  },
  {
    num: "03",
    category: "WordPress Plugin",
    title: "Legal Pages",
    description:
      "Re-developed the Legal Pages (Free & Pro) WordPress plugin with a modern API-driven architecture and React-based admin interface, improving GDPR, CCPA, and DMCA compliance and scalability.",
    stack: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "React.js" },
      { name: "REST API" },
    ],
    image: "/assets/work/thumb3.png",
    github: "https://github.com/sadekur",
    live: "https://wordpress.org/plugins/legal-pages/",
  },
  {
    num: "04",
    category: "WordPress · eCommerce",
    title: "Easycommerce",
    description:
      "Contributed to the Easycommerce plugin and platform — React.js/Next.js frontend, API integration, UI/UX implementation, and PHP core functionality development.",
    stack: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "PHP" },
      { name: "WordPress" },
    ],
    image: "/assets/work/thumb1.png",
    github: "https://github.com/sadekur",
    live: "https://wordpress.org/plugins/easycommerce/",
  },
  {
    num: "05",
    category: "WordPress Plugin",
    title: "Password Less Login",
    description:
      "OTP-based passwordless authentication plugin for WordPress, published on the WordPress.org repository. Enables secure login without traditional passwords using one-time codes.",
    stack: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "OTP" },
      { name: "WP REST API" },
    ],
    image: "/assets/work/thumb2.png",
    github: "https://github.com/sadekur",
    live: "https://wordpress.org/plugins/password-less-login/",
  },
  {
    num: "06",
    category: "WooCommerce · Plugin",
    title: "Order Barcode for WC",
    description:
      "WooCommerce extension for automatic barcode generation on orders, published on WordPress.org. Allows customers and store managers to identify orders instantly via unique barcodes.",
    stack: [
      { name: "WooCommerce" },
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    image: "/assets/work/thumb3.png",
    github: "https://github.com/sadekur",
    live: "https://wordpress.org/plugins/order-barcode-for-wc/",
  },
  {
    num: "07",
    category: "WordPress Plugin",
    title: "Thrail CRM",
    description:
      "CRM integration plugin for WordPress, published on WordPress.org. Enables businesses to manage customer relationships and contacts directly from the WordPress dashboard.",
    stack: [
      { name: "WordPress" },
      { name: "PHP" },
      { name: "MySQL" },
      { name: "REST API" },
    ],
    image: "/assets/work/thumb1.png",
    github: "https://github.com/sadekur",
    live: "https://wordpress.org/plugins/thrail-crm/",
  },
];

const infoVariants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit:  { opacity: 0, y: -10, transition: { duration: 0.2,  ease: [0.4, 0, 1, 1] } },
};

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.realIndex]);
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto pt-[60px] lg:pt-[150px]">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">

          {/* Info panel — animates on every slide change */}
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.num}
                variants={infoVariants}
                initial="hidden"
                animate="enter"
                exit="exit"
                className="flex flex-col gap-[30px] h-full"
              >
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>

                <div>
                  <span className="text-sm text-accent uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h2 className="text-[36px] xl:text-[42px] font-bold leading-tight text-gradient mt-1">
                    {project.title}
                  </h2>
                </div>

                <p className="text-white/60 leading-relaxed">{project.description}</p>

                <ul className="flex flex-wrap gap-3">
                  {project.stack.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-accent border border-accent/30 rounded-full px-3 py-1"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>

                <div className="border border-white/10 w-full" />

                <div className="flex items-center gap-4">
                  {project.live && (
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={project.live}
                            target="_blank"
                            className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all duration-300"
                          >
                            <BsArrowRight className="text-white text-3xl group-hover:text-primary" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent><p>Live Project</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}

                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={project.github}
                          target="_blank"
                          className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all duration-300"
                        >
                          <BsGithub className="text-white text-3xl group-hover:text-primary" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent><p>GitHub</p></TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider */}
          <div className="w-full lg:w-[50%] overflow-hidden">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_25px)] lg:bottom-0 z-50 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all duration-500"
                iconsStyles="text-2xl text-white"
              />
            </Swiper>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
