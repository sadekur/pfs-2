"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransection = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeInOut" },
        }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransection;
