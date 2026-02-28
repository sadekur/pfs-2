"use client";
import { motion } from 'framer-motion'
import Image from 'next/image';
import React from 'react'

const Photo = () => {
  return (
    <div className='w-full h-full relative rounded-full bg-gradient-to-tr from-accent to-primary overflow-hidden'>
      <motion.div>
        <div>
          <Image
            src="/sadekur-rahman.png"
            priority
            quality={100}
            fill
            alt="Sadekur Rahman"
            // width={400}
            // height={400}
            className="w-[298px] h-[298px] object-cover rounded-full"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Photo
