import React from 'react'
import Image from "next/image";
import kei from '../public/assets/Keijoy2.png'

function About() {
  return (
    <div>
      <h3 className=" text-center uppercase mb-10">About Me</h3>
        <div className=" max-w-[1024px] m-auto md:grid grid-cols-2 gap-8 items-center px-8 mb-36">
            
            <div>
            <Image src={kei} alt="profile image" width={300} className="mx-auto" />
            </div>
            <div className="col-span-1 pt-8 md:pt-0">
                <p>From Pastry chef to Designer and web developer</p>
                <p className="my-4">After 10 years working in hospitality and reaching head pastry chef position, I wanted a change, wanted to learn something new. This was when my friend told me to learn coding. At first I had no idea where to start, I was learning javascript, python, the cs50 program and also UX design all at the same time. Then after about 3 weeks I settled down to following Angela Yu's web development course. I was also invited by my friend to join her on the lloyds x Athena hackathon, and it was during this time I found myself totally engrossed in the whole process especially the sense of satisfaction when I was able to code the site to be exactly as designed in Figma. </p>
                <p>Since then I have been working on learning as much as I can regarding UI/UX design and front-end web development while still working my 55hr job.</p>
            </div>
            <div id="skills"></div>
        </div>
    </div>
  )
}

export default About