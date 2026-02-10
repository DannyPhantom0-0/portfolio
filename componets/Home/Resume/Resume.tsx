import React from 'react'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { Fa0 } from 'react-icons/fa6'
import ResumeCard from './ResumeCard'
import { BsDash, BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* WORK PART */}
            <div> 
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    My Work <span className="text-cyan-200">Experience</span>
                </h1>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="mt-10">
                    <ResumeCard Icon={FaCodepen} role="Software Engineer"/>
                    <ResumeCard Icon={FaReact} role="Frontend Developer"/>
                    <ResumeCard Icon={BsDatabase} role="Backend Developer"/>
                </div>
            </div>

            {/* EDUCATION PART */}
            <div data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300"> 
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    My <span className="text-cyan-200">Education</span>
                </h1>
                <div className="mt-10">
                    <ResumeCard Icon={BiBadge} role="WeThinkCode_" date="Sept 2024 - Dec 2025"/>
                    <ResumeCard Icon={FaReact} role="Occupational Certificate: Software Engineer" date="Sept 2024 - Dec 2025"/>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Resume
