import React from 'react'
import Image from "../assets/colo1.webp"

const AboutUs = () => {
  return (
    <div className='bg-black p-4 ' id="colo">
      <h1 className='my-10 font-bold p-5 text-white font-serif text-4xl text-center'>ABOUT COLOSSEUM</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-opacity-0 p-5">
        <div className="flex items-center mx-10">
          <p className="text-white text-lg">The only Society taking responsibility to organize all the major and minor events in College of Technology Pantnagar. The ETS has organized various national level events which enhance the personality of the students along with academics. It provides an exposure to students by creating ferocious competitive environment thereby acting as a motivation to excel in their areas of interest.</p>
        </div>
        <div className="flex items-center mx-10">
          <img src={Image} alt="logo" className='rounded-xl w-full'/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
