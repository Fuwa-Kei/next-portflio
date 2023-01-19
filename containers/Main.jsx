import React from 'react'
import {FaLinkedin, FaGithub } from 'react-icons/fa'

function main() {
  return (
    <div id="home" className="w-full flex items-center pt-16 mb-36 mt-16">
        <div className=" max-w-[1024px] mx-auto flex justify-center items-center px-8">
            <div className='text-center'>
                <p className='uppercase text-sm tracking-widest'>Welcome to my portfolio</p>
                <h1 className='py-4'>Hello, I'm Kei </h1>
                <h1 className='py-4'>A Front-End Web Developer</h1>
                <p className='py-4 max-w-[500px] m-auto'>Specialising in UI/UX design and building responsive web applications while learning back-end technologies</p>
                <div className="flex items-center justify-between max-w-[200px] m-auto py-4">
                    <FaGithub size={25} className='mx-4 '/>
                    <FaLinkedin size={25} className='mx-4 '/>
                </div>
                <div id="about"></div>
            </div>
        </div>
        
    </div>
  )
}

export default main