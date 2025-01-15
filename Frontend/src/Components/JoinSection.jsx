import React from 'react'
import image1 from "../assets/ilovepdf_pages-to-jpg/1.jpg"
import image2 from "../assets/ilovepdf_pages-to-jpg/2.jpg"
import image3 from "../assets/ilovepdf_pages-to-jpg/3.jpg"
import image4 from "../assets/ilovepdf_pages-to-jpg/4.jpg"
import image5 from "../assets/ilovepdf_pages-to-jpg/5.jpg"
import image6 from "../assets/ilovepdf_pages-to-jpg/6.jpg"
import image7 from "../assets/ilovepdf_pages-to-jpg/7.jpg"
import image8 from "../assets/ilovepdf_pages-to-jpg/8.jpg"
import image9 from "../assets/ilovepdf_pages-to-jpg/9.jpg"
import image10 from "../assets/ilovepdf_pages-to-jpg/10.jpg"
import image11 from "../assets/ilovepdf_pages-to-jpg/11.jpg"
import image12 from "../assets/ilovepdf_pages-to-jpg/12.jpg"
import image13 from "../assets/ilovepdf_pages-to-jpg/13.jpg"
import image14 from "../assets/ilovepdf_pages-to-jpg/14.jpg"
import image15 from "../assets/ilovepdf_pages-to-jpg/15.jpg"
import image16 from "../assets/ilovepdf_pages-to-jpg/16.jpg"
import image17 from "../assets/ilovepdf_pages-to-jpg/17.jpg"
import image18 from "../assets/ilovepdf_pages-to-jpg/18.jpg"
import image19 from "../assets/ilovepdf_pages-to-jpg/19.jpg"
import image20 from "../assets/ilovepdf_pages-to-jpg/20.jpg"
import image21 from "../assets/ilovepdf_pages-to-jpg/21.jpg"
import image22 from "../assets/ilovepdf_pages-to-jpg/22.jpg"
import image23 from "../assets/ilovepdf_pages-to-jpg/23.jpg"

const JoinSection = () => {
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15, image16, image17, image18, image19,
    image20, image21, image22, image23
  ];

  return (
    <div className='bg-gradient-to-r from-blue-400 via-black to-purple-400 p-4 md:p-6'>
      <div className="relative w-full overflow-x-auto py-4 md:py-8">
        <div className="flex gap-4 md:gap-6 snap-x snap-mandatory overflow-x-auto pb-4 px-4 md:px-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="snap-center shrink-0 w-[85vw] md:w-[45vw] first:ml-0 last:mr-0"
            >
              <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={image} 
                  alt={`Event ${index + 1}`}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JoinSection