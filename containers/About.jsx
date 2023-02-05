import React from 'react'
import Image from "next/image";
import kei from '../public/assets/Keijoy2.png'

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
                <p className="my-4">After 10 years working in hospitality and reaching Head Pastry Chef position, I started to teach myself coding via resources online to learn something new. At first I found it quite challenging to learn everything while balancing my 55hr job, then after about 3 weeks I settled down to following Angela Yu's web development course which was more structured. I participated in the Lloyds Bank x Athena hackathon to experience the process of creating a project from scratch. It was during this time I found myself totally engrossed in the whole process, especially the sense of satisfaction when I was able to code the site to be exactly as designed in Figma.
              </p>
            </div>
        </div>
    </div>
  )
}

export default About