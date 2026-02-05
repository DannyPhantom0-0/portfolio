"use client"
import React from 'react'
import { FaPercentage } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiPython, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'        

const skills = [
    {
        name: "JavaScript",
        icon:<SiJavascript/>,
        percentage: 80,
    },
    {
        name: "Python",
        icon:<SiPython/>,
        percentage: 90,
    },
    {
        name: "Typescript",
        icon:<SiTypescript/>,
        percentage: 50,
    },
    {
        name: "Next.js",
        icon:<SiNextdotjs/>,
        percentage: 30,
    },
    {
        name: "Tailwind CSS",
        icon:<SiTailwindcss/>,
        percentage: 50,
    }
]    


const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white    ">
            My <span className="text-cyan-300">Skills</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-16">
            {skills.map((skill) => {
                return <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                    <div className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                        <div className="text-5xl mg-4text-gray-300">
                            {skill.icon}
                        </div>
                        <p className="text-2xl font-semibold mt-4">
                            {skill.percentage}%
                        </p>
                        <p className="tex-purple-400 mt-1">
                           {skill.name} 
                        </p>
                    </div>
                </Tilt>
            })}
        </div>
    </div>
  )
}

export default Skills
