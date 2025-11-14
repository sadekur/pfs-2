"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import React from 'react'
import Stairs from './ui/Stairs';

const StairEffect = () => {
    const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
        <div key={pathname}>
            <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
                <Stairs />
            </div>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ 
                    opacity: 0,
                    transition:{ delay: 1, duration: 0.4, ease: "easeInOut" }
                 }}
                className="w-screen h-screen fixed top-0 left-0 right-0 bg-primary pointer-events-none"
            />
        </div>
    </AnimatePresence>
  )
}

export default StairEffect
