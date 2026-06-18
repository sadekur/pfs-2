"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderButton = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper();
    return (
        <div classname={containerStyles}>
            <button className={btnStyles}>
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button className={btnStyles}>
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    );
};

export default WorkSliderButton;