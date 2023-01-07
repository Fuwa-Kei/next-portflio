import React from 'react'
import Image from "next/image";
import kei from '../public/assets/Keijoy2.png'

function About() {
  return (
    // <div className="w-full flex justify-center items-center">
        <div className=" max-w-[1024px] m-auto md:grid grid-cols-2 gap-8 items-center px-8 mb-32">
            <div>
            <Image src={kei} alt="profile image" width={300} className="mx-auto" />
            </div>
            <div className="col-span-1 pt-8 md:pt-0">
                <p>From Pastry chef to Designer and web developer</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    // </div>
  )
}

export default About