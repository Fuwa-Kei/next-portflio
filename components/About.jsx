import React from 'react'
import Image from "next/image";
import kei from '../public/assets/Keijoy2.png'

function About() {
  return (
    <div className='max-w-[1024px] mx-auto md:h-screen flex items-center py-2'>
        <div className="grid grid-cols-2 gap-4 place-content-center h-48">
            <div className=" ">
                <p>From Pastry chef to Designer and web programmer</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className=" ">
            <Image src={kei} alt="profile image" width={300} height={300}/>
            </div>
        </div>
    </div>
  )
}

export default About