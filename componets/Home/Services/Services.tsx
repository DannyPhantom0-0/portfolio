import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white    ">
        Colleborate with brands <br/> and agiencies to create <br/> impactful results.
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-duration="100">
          <ServiceCard icon="/images/python.png" name="python" description="Python programming language"/>
        </div>
      </div>
    </div>
  )
}

export default Services
