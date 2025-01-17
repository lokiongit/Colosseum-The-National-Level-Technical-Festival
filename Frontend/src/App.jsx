import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import JoinSection from './Components/JoinSection.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Events from './Components/Events.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx';
import { motion } from 'framer-motion';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Background Video Section */}
      <motion.div
        className="min-h-screen relative flex items-center justify-center"
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          autoPlay
          muted
          loop
          id="bgVideo"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2017/04/13/8675-213185833_tiny.mp4"
            type="video/mp4"
          />
        </video>
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center my-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.img
            src="https://hosting.renderforestsites.com/27275532/1337287/media/4441c38e76395561da703f3c11e8f267.webp"
            alt="Logo"
            className="w-24 h-24 md:w-52 md:h-52 mt-20 md:mt-40"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <motion.p
            className="mt-2 text-white text-center text-sm md:text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            15 April, 2025
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Event Title Section */}
      <motion.div
        className="flex flex-col items-center justify-center bg-black py-10 min-h-full bg-cover"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center text-[3.8rem] md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          COLOSSEUM 2025
        </div>
      </motion.div>

      {/* Event Subtitle Section */}
      <motion.div
        className="flex flex-col items-center justify-center bg-black min-h-full bg-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="text-center text-xl md:text-3xl font-semibold text-white">
          THE NATIONAL LEVEL TECHNICAL FEST
        </div>
      </motion.div>

      {/* Info Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center bg-cover w-full bg-black p-5 space-y-5 md:space-y-0 md:space-x-5 min-h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, staggerChildren: 0.3 },
          },
        }}
      >
        {/* Festival Gates Info */}
        <motion.div
          className="flex items-center text-center md:text-left"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <p className="font-serif font-bold text-xl md:text-2xl text-purple-500">
            Festival gates open at 6 PM on April 17th
          </p>
        </motion.div>
        <div className="border-l-2 border-purple-400 h-auto md:h-24"></div>

        {/* Event Description */}
        <motion.div
          className="flex-1 flex items-center text-center md:text-left"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <p className="text-white text-sm md:text-base">
            Colosseum '25 - The National Level Technical Fest organized by The
            Engineering and Technology Society, Pantnagar. The participation in
            Colosseum is pan India with talented students showcasing their
            flair. Exciting technical events, DJ Nite and the grandest of all
            Corrobore - The Celebrity Nite are organized during the span of
            three days.
          </p>
        </motion.div>
      </motion.div>

      {/* Other Components */}
      <JoinSection />
      <AboutUs />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
