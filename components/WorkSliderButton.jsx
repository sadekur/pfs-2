"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const WorkSliderButton = () => {
    const swiper = useSwiper();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex items-center gap-4"
        >
            <div className="w-[50px] h-[2px] bg-white"></div>
            <BsArrowRight className="text-2xl" />
        </motion.div>
    );
};

export default WorkSliderButton;