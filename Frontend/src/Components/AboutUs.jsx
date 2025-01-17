import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import Image from "../assets/colo1.webp";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the appearance of child elements
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Slide up into view
  };

  return (
    <div className="bg-black p-4" id="colo">
      {/* Animated container */}
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated heading */}
        <motion.h1 
          className="my-10 font-bold p-3 text-white font-serif text-4xl mx-0 "
          variants={childVariants}
        >
          ABOUT US
        </motion.h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-opacity-0 p-5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated text */}
        <motion.div
          className="flex items-center mx-10"
          variants={childVariants}
        >
          <p className="text-white text-sm md:text-xl mx-0 ">
            The only Society taking responsibility to organize all the major and minor events in College of Technology Pantnagar. The ETS has organized various national level events which enhance the personality of the students along with academics. It provides an exposure to students by creating ferocious competitive environment thereby acting as a motivation to excel in their areas of interest.
          </p>
        </motion.div>

        {/* Animated image */}
        <motion.div
          className="flex items-center mx-10"
          variants={{
            hidden: { opacity: 0, scale: 0.8, rotate: 10 }, // Start scaled down and rotated
            visible: {
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: { duration: 0.8, type: "spring", stiffness: 100 }, // Spring animation
            },
          }}
        >
          <img src={Image} alt="logo" className="rounded-xl w-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
