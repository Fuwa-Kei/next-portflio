import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import Navbar from '../containers/Navbar'
import pokedex from '../public/assets/projects/pokedex.png'
import pomodoro from '../public/assets/projects/pomodoro.png'
import simon from '../public/assets/projects/simon.png'
import cv from '../public/assets/projects/cv.png'


function others() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1024px] m-auto flex justify-center items-center">
        <div className="mt-32 text-center">
          <div className=" max-w-[1024px] m-auto md:grid grid-cols-2 gap-8 items-center px-8 mt-20">
            <div>
              <Image src={cv} alt="profile image" width={1000} className="mx-auto border border-white-500 rounded-lg md:hover:scale-150 ease-in duration-300" />
            </div>
            <div className="col-span-1 pt-8 md:pt-0 text-justify">
                <h4 className=" text-[#2EC4B6]">My CV & Portfolio  </h4>
                <p>Nextjs | Tailwind</p>
                <p className="mt-4">I wanted to leant about nextjs and tailwind and decided to try them out by building my cv due to the simple nature of what a cv is. This allowed me to understand how tailwind works before I moved onto a bigger project, my portfolio</p>
                <p className="mt-4">Github: <Link href='https://github.com/Fuwa-Kei/cv-tailwind' target="_blank">CV</Link> | <Link href='https://github.com/Fuwa-Kei/next-portflio' target="_blank">Portfolio</Link></p>
              </div>
          </div>
  
          <div className=" max-w-[1024px] m-auto md:grid grid-cols-2 gap-8 items-center px-8 my-20">
            <div className="col-span-1 pt-8 md:pt-0 text-justify">
            <h4 className=" text-[#2EC4B6]">Pomodoro Timer </h4>
                <p>Javascript</p>
                <p className="mt-4">Made this while working on the Studyperks projects to be used in the study rooms. I plan on improving this timer by allowing users to set thir own pomodoro times and also intergratign it with my studyperks project </p>
                <p className="mt-4"><Link href='https://github.com/Fuwa-Kei/Pomodoro-Timer' target="_blank">Github</Link> | <Link href='https://fuwa-kei.github.io/Pomodoro-Timer/' target="_blank">Demo</Link></p>
              </div>
            <div>
              <Image src={pomodoro} alt="profile image" width={1000} className="width-300 mx-auto border border-white-500 rounded-lg md:hover:scale-150 ease-in duration-300" />
            </div>
          </div>
        
          <div className=" max-w-[1024px] m-auto md:grid grid-cols-2 gap-8 items-center px-8 mt-20">
            <div>
              <Image src={pokedex} alt="profile image" width={1000} className="mx-auto border border-white-500 rounded-lg md:hover:scale-150 ease-in duration-300" />
            </div>
            <div className="col-span-1 pt-8 md:pt-0 text-justify">
                <h4 className=" text-[#2EC4B6]">Pokedex</h4>
                <p>React | pokeapi</p>
                <p className="mt-4">Decided to create a pokedex like web application to learn about how to get data from APIs. I styled the page imitate the pokedex entries in the original Pokemon games released on the Gameboy Color</p>
                <p className="mt-4"><Link href='https://github.com/Fuwa-Kei/pokedex' target="_blank">Github</Link> | <Link href='https://pokedex-fuwa-kei.vercel.app/' target="_blank">Demo</Link></p>
              </div>
          </div>
        
          <div className=" max-w-[1024px] m-auto md:grid grid-cols-2 gap-8 items-center px-8 my-20">
            <div className="col-span-1 pt-8 md:pt-0 text-justify">
            <h4 className=" text-[#2EC4B6]">Simon's Game</h4>
                <p>JQuery</p>
                <p className="mt-4">This was created as part of the Angelu Yu's web development bootcamp course. This was one of the first 'complete' projects I made and it really helped me understand the basics of how javascript(jquery) worked</p>
                <p className="mt-4"><Link href='https://github.com/Fuwa-Kei/Simon-Game' target="_blank">Github</Link> | <Link href='https://fuwa-kei.github.io/Simon-Game/' target="_blank">Demo</Link></p>
              </div>
            <div>
              <Image src={simon} alt="profile image" width={1000} className="width-300 mx-auto border border-white-500 rounded-lg md:hover:scale-150 ease-in duration-300" />
            </div>
          </div>
        </div>
    </div>
   </div> 


  )
}

export default others