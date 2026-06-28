"use client";
import { motion } from 'framer-motion'
import Image from 'next/image';
import React from 'react'

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
          className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]'
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

        {/* Photo — absolutely centered over the ring, no negative margins */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.0, duration: 0.4, ease: 'easeOut' }
          }}
          className='absolute inset-0 flex justify-center items-center overflow-hidden rounded-full'
        >
          <div className='w-[280px] h-[280px] mt-[-50px] xl:w-[470px] xl:h-[550px] relative mix-blend-lighten'>
            <Image
              src="/assets/photo.png"
              priority
              quality={100}
              fill
              alt="Sadekur Rahman"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo