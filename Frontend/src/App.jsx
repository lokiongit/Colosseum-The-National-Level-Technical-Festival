import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import JoinSection from './Components/JoinSection.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Events from './Components/Events.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen relative flex items-center justify-center" id="home">
        <video autoPlay muted loop id="bgVideo" className="absolute inset-0 w-full h-full object-cover">
          <source src="https://cdn.pixabay.com/video/2017/04/13/8675-213185833_tiny.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center my-20">
          <img src="https://hosting.renderforestsites.com/27275532/1337287/media/4441c38e76395561da703f3c11e8f267.webp" alt="Logo" className="w-24 h-24 md:w-52 md:h-52 mt-20 md:mt-40" />
          <p className="mt-2 text-white text-center text-sm md:text-xl font-bold">15 April, 2025</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-black py-10 min-h-full bg-cover ">
        <div className="text-5xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          COLOSSEUM 2025
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-black py-2 min-h-full bg-cover ">
        <div className="text-3xl md:text-xl font-semibold text-white">
         THE NATIONAL LEVEL TECHNICAL FEST
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center bg-cover w-full bg-black p-5 space-y-5 md:space-y-0 md:space-x-5 min-h-full">
        <div className="flex items-center">
          <p className="font-serif font-bold text-xl md:text-3xl text-purple-500 mx-10 text-center md:text-left">Festival gates open at 6 PM on April 17th</p>
        </div>
        <div className="border-l-2 border-purple-400 h-auto md:h-24"></div>
        <div className="flex-1 flex items-center mx-10 md:mx-0">
          <p className="text-white text-sm md:text-base">Colosseum '25 - The National Level Technical Fest organized by The Engineering and Technology Society, Pantnagar. The participation in Colosseum is pan India with talented students showcasing their flair. Exciting technical events, DJ Nite and the grandest of all Corrobore - The Celebrity Nite are organized during the span of three days.</p>
        </div>
      </div>
      <JoinSection />
      <AboutUs />
      <Events />
      <Contact/>
      <Footer/>
     
    </>
  );
}

export default App;
