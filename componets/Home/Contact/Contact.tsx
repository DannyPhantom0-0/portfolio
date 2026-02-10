import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                    Get in Touch
                </h1>
                <p className="text-gray-400 mt-6 text-base sm:text-lg">
                    Reach out to me today and let's discuss how I can help you achieve your goals.
                </p>
                <div className="mt-7">
                    <div className="flex items-center space-x-3 mb-4">
                        <BiPhone className="w-9 h-9 text-cyan-300"/>
                        <p className="text-xl font-bold text-gray-400">
                            +27 627 196 933 
                        </p>
                    </div>

                    <div className="flex items-center space-x-3 mb-4">
                        <BiEnvelope className="w-9 h-9 text-cyan-300"/>
                        <p className="text-xl font-bold text-gray-400">
                            anshaar.daniels@gmail.com
                        </p>
                    </div>

                    <div className="flex items-center space-x-3 mb-4">
                        <BiMap className="w-9 h-9 text-cyan-300"/>
                        <p className="text-xl font-bold text-gray-400">
                            Cape Town, South Africa
                        </p>
                    </div>
                </div>
                {/* Social Icons */}
                <div className="flex items-center mt-8 space-x-3">
                    <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-pink-500 transition-all duration-300">
                        <FaInstagram className="text-white w-6 h-6" />
                    </div>
                    <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
                        <FaLinkedin className="text-white w-6 h-6" />
                    </div>
                </div>
            </div>
            {/* Form */}
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="300" className="md:p-10 p-5 bg-[#131332] rounded-lg">
                <input 
                    type="text" 
                    placeholder="Name"
                    className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70" 
                />

                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70" 
                />

                <input 
                    type="text" 
                    placeholder="Phone Number"
                    className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70" 
                />

                <textarea 
                    placeholder="Your Message" 
                    className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]" 
                ></textarea>
                <button className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transitio-all duration-300 cursor-pointer text-white rounded-full">
                    Send Message
                </button>
            </div>
        </div>
    </div>
  )
}

export default Contact