import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const JoinSection = () => {
  // Variants for staggering child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the appearance of child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly below and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and slide up
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 via-black to-purple-400 p-6 bg-opacity-50">
      {/* Animated header */}
      <motion.h1
        className="bg-opacity-0 my-10 font-bold p-5 text-white font-serif text-4xl text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        JOIN US
      </motion.h1>

      {/* Animated content container */}
      <motion.div
        className="flex flex-wrap justify-center bg-opacity-0 p-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated paragraphs */}
        <motion.div
          className="flex-1 flex items-center mx-10 max-w-xs md:max-w-none"
          variants={itemVariants}
        >
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum dicta, delectus voluptates exercitationem reprehenderit hic nemo quis ullam optio quos possimus accusantium vitae nam, beatae ea, laudantium autem repudiandae amet consequuntur temporibus reiciendis facere. Itaque est aut deleniti. Nam perspiciatis reprehenderit itaque cum officiis vitae id suscipit saepe corrupti.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center mx-10 max-w-xs md:max-w-none"
          variants={itemVariants}
        >
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum dicta, delectus voluptates exercitationem reprehenderit hic nemo quis ullam optio quos possimus accusantium vitae nam, beatae ea, laudantium autem repudiandae amet consequuntur temporibus reiciendis facere. Itaque est aut deleniti. Nam perspiciatis reprehenderit itaque cum officiis vitae id suscipit saepe corrupti.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center mx-10 max-w-xs md:max-w-none"
          variants={itemVariants}
        >
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum dicta, delectus voluptates exercitationem reprehenderit hic nemo quis ullam optio quos possimus accusantium vitae nam, beatae ea, laudantium autem repudiandae amet consequuntur temporibus reiciendis facere. Itaque est aut deleniti. Nam perspiciatis reprehenderit itaque cum officiis vitae id suscipit saepe corrupti.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JoinSection;
