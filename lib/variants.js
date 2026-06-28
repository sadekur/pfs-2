export const pageVariants = {
  hidden: { opacity: 0, y: 16 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1], when: "beforeChildren", staggerChildren: 0.07 },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  },
};

export const childVariants = {
  hidden: { opacity: 0, y: 18 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};
