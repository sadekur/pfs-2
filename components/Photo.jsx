"use client";
import { motion } from 'framer-motion'
import React from 'react'
import PixelPhoto from './PixelPhoto'

const Photo = () => {
  return (
    <div className='w-full h-full relative flex justify-center items-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.1, duration: 0.4, ease: 'easeIn' }
        }}
        className='relative flex justify-center items-center'
      >
        {/* Animated ring SVG */}
        <motion.svg
          className='w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[390px] lg:h-[390px] xl:w-[500px] xl:h-[500px]'
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#8b5cf6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.svg>

        {/* Photo — fills the full circle, no gap at the bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4, ease: 'easeOut' }
          }}
          className='absolute inset-0 overflow-hidden rounded-full'
        >
          <div className='relative w-full h-full mix-blend-lighten'>
            <PixelPhoto src="/assets/photo.png" className="absolute inset-0 w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo