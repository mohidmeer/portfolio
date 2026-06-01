"use client";

import { motion } from "framer-motion";

interface HeadingProps {
  heading: string;
  subheading: string;
}

const Heading = ({ heading, subheading }: HeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 max-w-2xl mx-auto"
    >
      <h2>{heading}</h2>
      {subheading && (
        <p className="text-muted-foreground mt-3 leading-relaxed">{subheading}</p>
      )}
    </motion.div>
  );
};

export default Heading;
