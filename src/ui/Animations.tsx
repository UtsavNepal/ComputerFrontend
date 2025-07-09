"use client"
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const PopInAnimation = ({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode, 
  delay?: number, 
  className?: string 
}) => {
  return (
    <motion.div
      className={className} 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-20%" }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
};

export const SlideInAnimation = ({ 
  children, 
  direction = "left", 
  delay = 0,
  className = ""
}: { 
  children: ReactNode, 
  direction?: "left" | "right" | "up" | "down",
  delay?: number,
  className?: string
}) => {
  const x = direction === "left" ? 50 : direction === "right" ? -50 : 0;
  const y = direction === "up" ? 50 : direction === "down" ? -50 : 0;

  return (
    <motion.div
      className={className} // ✅ Apply the class
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, margin: "-20%" }} 
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
};