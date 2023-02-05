import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import Navbar from '../containers/Navbar'
import homepage from '../public/assets/projects/studyperks-homepage.png'
import profile from '../public/assets/projects/studyperks-profile.png'

function study() {
    return (
      <div>
      <Navbar />
      <div className="max-w-[1024px] m-auto flex justify-center items-center">
        <div className="mt-32 text-center">
          <h1 className=" text-[#EA526F] mb-4">StudyPerks</h1>
          <h4>Hackathon project for MLH - Eduhacks</h4>
          <p>A co-study platform where users can register and join virtual rooms to study together with other people</p>
          <br />
          <p>For demo purposes, click login for profile and the first room to access the chatroom</p>
          
          <p>Login email: demo@demo.com | password: Demo123</p>
          <p className="text-[#FF8A5B] flex gap-8 justify-center mt-4">
            <Link href='https://github.com/Fuwa-Kei/studyperks--front-end-only-' target="_blank">Github</Link>
           | 
           <Link href='https://www.figma.com/file/MyYoYrEHuxb5FIctzSjKvn/EduHacks-2022?node-id=1%3A2&t=tjQeBItuF2gAvPgm-1' target="_blank">Figma</Link> 
           | 
           <Link href='https://studyperks.vercel.app/' target="_blank">Demo</Link></p>
          <div className=" max-w-[1024px] m-auto md:grid grid-cols-2 gap-8 items-center px-8 mt-20">
            <div>
              <Image src={homepage} alt="profile image" width={1000} className="mx-auto border border-white-500 rounded-lg md:hover:scale-150 ease-in duration-300" />
            </div>
            <div className="col-span-1 pt-8 md:pt-0 text-justify">
                <h4 className=" text-[#EA526F]">My Role </h4>
                <p>I was responsible for designing and implementing the front-end of the application
                The wire framing and low fidelity prototype were done in Figma. After I created a high fidelity prototype following the design using HTML and CSS.
                Finally I used react to create the front-end of the web application</p>
                <h4 className="  text-[#EA526F] mt-4">What I Learnt</h4>
                <p>When creating my first project I noticed I was repeating myself a lot especially when it came to the css, so this time I made sure my my codes DRY</p>
                <p>Main skills learnt from this project are:</p>
                  <ul className="list-disc pl-11">
                    <li>Creating popup/modals</li>
                    <li>Firebase email/password authentication</li>
                  </ul>
              </div>
          </div>
  
          <div className=" max-w-[1024px] m-auto md:grid grid-cols-2 gap-8 items-center px-8 my-20">
            <div className="col-span-1 pt-8 md:pt-0 text-justify">
              <h4 className=" text-[#EA526F]">Difficulties I had</h4>
              <p>I ran into an issue were no matter what I did I wasnt able to get a 2nd modal to appear but luckily managed to solve the problem with SweetAlert. Firebase also gave me many error messages to solve and is still something I need to study a lot more on </p>
              <h4 className="  text-[#EA526F] mt-4">Whats next for StudyPerks</h4>
              <p>This was a project I really enjoyed creating and plan to complete it with fully functioning chatrooms including a pomodoro timer and games. I would also love to be able update the profile so that it will display actual stats for each user. </p>
            </div>
            <div>
              <Image src={profile} alt="profile image" width={1000} className="width-300 mx-auto border border-white-500 rounded-lg md:hover:scale-150 ease-in duration-300" />
            </div>
          </div>
        
        </div>
        
      </div>
      </div>
    )
  }

export default study