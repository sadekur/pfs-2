import React from 'react'
import { animate, motion } from 'framer-motion'

const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}
const blurAnimation = {
  initial: {
    top: "0%",
    backdropFilter: "blur(10px)"
  },
  animate: {
    top: "100%",
    backdropFilter: "blur(0px)"
  },
  exit: {
    top: ["100%", "0%"],
    backdropFilter: ["blur(0px)", "blur(10px)"]
  }
}

const reverseIndex = (index) => {
    const totalSteps = 10;
    return totalSteps - index - 1;
}
const Stairs = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={blurAnimation}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1
          }}
          className="w-full h-full bg-white relative"
          // For Blur
        //   className="w-full h-full absolute top-0 left-0"
        />
      ))}
    </>
  )
}

export default Stairs
