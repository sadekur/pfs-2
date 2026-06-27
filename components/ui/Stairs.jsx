import { motion } from 'framer-motion'

const totalStrips = 6;

const Stairs = () => {
  return (
    <>
      {[...Array(totalStrips)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ scaleY: 1 }}
          animate={{
            scaleY: 0,
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.07,
            },
          }}
          exit={{
            scaleY: 1,
            transition: {
              duration: 0.35,
              ease: [0.76, 0, 0.24, 1],
              delay: index * 0.05,
            },
          }}
          style={{ transformOrigin: "top" }}
          className="w-full h-full bg-accent relative"
        />
      ))}
    </>
  )
}

export default Stairs
