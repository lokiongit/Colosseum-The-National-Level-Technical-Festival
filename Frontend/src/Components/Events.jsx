import React from 'react'
import Img1 from "../assets/corrobore.webp"
import Img2 from "../assets/colo2.webp"
import Img3 from "../assets/colo3.webp"
import Img4 from "../assets/colo1.webp"

const Events = () => {
  return (
    <div className='p-8 bg-slate-950'>
      <div>
        <h1 className='text-white font-serif text-4xl text-center font-bold'>EVENTS</h1>
      </div>
      <p className='text-center p-9 text-white text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, velit!</p>
<section className="container mx-auto px-8  lg:py-18">
  <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"><img src={Img1} alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Corrobore</h4>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error suscipit rem quas neque sed, libero officiis itaque. Eius cum doloremque magnam sed. Asperiores nulla beatae soluta, molestias laboriosam quisquam?</p>
      </div>
    </div>
    <div className=" flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden "><img src={Img2} alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Panga</h4>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum ratione sapiente incidunt architecto qui libero nobis veniam? Tempora illum, maiores nostrum iste quia magni modi itaque quo! Esse, beatae?</p>
      </div>
    </div>
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"><img src="https://colosseum24.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F05.dd3b7b8f.JPG&w=3840&q=75" alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Colosseum'24</h4>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempore ducimus excepturi enim doloremque est dolore quis, aut modi quidem repellat sed repudiandae cumque ipsa in nostrum velit, natus quisquam.</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Events
