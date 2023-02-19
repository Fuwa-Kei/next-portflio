import React from 'react'
import Image from "next/image";
import kei from '../public/assets/Keijoy2.png'
import Link from 'next/link';

function About() {
  return (
    <div id="about">
      <h3 className=" text-center uppercase mb-10">About Me</h3>
        <div className=" max-w-[1024px] m-auto md:grid grid-cols-2 gap-8 items-center px-8 mb-36">
            
            <div>
            <Image src={kei} alt="profile image" width={300} className="mx-auto" />
            </div>
            <div className="col-span-1 pt-8 md:pt-0">
                <p>From Pastry Chef to Web Developer</p>
                <p className="my-4">I’m a self taught web developer, learning from various resources online either through online courses, youtube tutorials or just simply Googling everything I don’t know whenever I get stuck at trying to figure something out while working on a project. I’m currently focusing on learning about UI/UX design since I found myself really enjoying the design process of creating web applications. 
                <br />
                Please read more about my coding journey <Link href="https://dev.to/fuwa/my-coding-journey-kia" target="_blank">HERE</Link>

              </p>
            </div>
        </div>
    </div>
  )
}

export default About