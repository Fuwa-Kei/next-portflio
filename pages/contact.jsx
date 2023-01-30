
import React, { useRef } from 'react'
import Navbar from '../containers/Navbar'
import emailjs from '@emailjs/browser';
import Link from 'next/link'

function contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cumbe4y', 'template_g4dwau8', form.current, 'd0plTGOmelhmWYWvd')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
      };

      

  return (
    <div>
        <Navbar />
        
        <div id="home" className="w-full flex items-center pt-16 mb-36 mt-16">
            <div className=" w-[500px] mx-auto flex-col justify-center items-center px-8 text-center">
                <h3>Contact Me</h3>
                <p>07538267533</p>
                <p>keichan10010@gmail.com</p>
                
                <form ref={form} onSubmit={sendEmail} className="mt-8">
                    <input className=" border-b w-full text-gray-700 mr-3 py-4 px-2 focus:outline-none" type="text" name="name" placeholder="Name" />
                    <input className=" border-b w-full text-gray-700 mr-3 py-4 px-2 focus:outline-none" type="email" name="email" placeholder="Email" />
                    <input className=" border-b w-full text-gray-700 mr-3 py-4 px-2 focus:outline-none" type="text" name="subject" placeholder="Subject" />
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-sm border border-gray-300 focus:outline-none" name="message" placeholder="Message" />
                    <Link href="/success" className="text-black"><input type="submit" value="Send" className="border border-gray-300 rounded-md py-2 px-4 mt-4 bg-orange-300 cursor-pointer hover:bg-orange-400 focus:scale-95" /></Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default contact