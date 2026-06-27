import { motion } from 'framer-motion'

const panels = [
  { origin: "top", position: "top-0" },
  { origin: "bottom", position: "bottom-0" },
]

const Stairs = () => {
  return (
    <>
      {panels.map(({ origin, position }, index) => (
        <motion.div
          key={index}
          initial={{ scaleY: 1 }}
          animate={{
            scaleY: 0,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.08,
            },
          }}
          exit={{
            scaleY: 1,
            transition: {
              duration: 0.4,
              ease: [0.76, 0, 0.24, 1],
              delay: 0,
            },
          }}
          style={{ transformOrigin: origin }}
          className={`fixed left-0 w-screen h-1/2 bg-accent z-40 ${position}`}
        />
      ))}
    </>
  )
}

export default Stairs
