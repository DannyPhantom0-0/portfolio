import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className="pt-16 pb-26">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            A small selection of recent<br/> <span className="text-cyan-300"> projects</span>
        </h1>
        <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Image src="/images/project1.png" alt="img" width={800} height={650} className="rounded-lg"/>
                <h1 className="mt-4 text-xl sm:text-2xl font semibolt text-white">
                    Java Mathematical Calculator
                </h1>
                <h1 className="pt-2 font-medium text-white/80">Java</h1>
            </div>
        </div>    
    </div>
  )
}

export default Projects
