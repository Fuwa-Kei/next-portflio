import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import Navbar from '../containers/Navbar'
import homepage from '../public/assets/projects/carbonaltdel-homepage.png'
import products from '../public/assets/projects/carbonaltdel-products.png'

const carbon = () => {
  return (
    <div>
    <Navbar />
    <div className="max-w-[1024px] m-auto flex justify-center items-center">
      <div className="mt-32 text-center">
        <h1 className=" text-[#52796F] mb-4">Carbon Alt Delete</h1>
        <h4>Hackthon project hosted by Llyods bank x Athena (Road to net zero)</h4>
        <p>E-commerce style site that allows chefs to order ingredients from different suppliers while comparing the carbon footprint of each ingredient all in one place in one place</p>
        <p className="text-[#52796F] flex gap-8 justify-center mt-4">
          <Link href='https://github.com/Fuwa-Kei/carbon-alt-del' target="_blank">Github</Link>
         | 
         <Link href='https://www.figma.com/file/bzfYMlHq0JM60T2xoaOZTn/CarbonCompare-Source-of-Truth?node-id=0%3A1&t=5MVcodCHXjIyGI3M-1' target="_blank">Figma</Link> 
         | 
         <Link href='https://carbon-alt-del.vercel.app/' target="_blank">Demo</Link></p>
        <div className=" max-w-[1024px] m-auto md:grid grid-cols-2 gap-8 items-center px-8 mt-20">
          <div>
            <Image src={homepage} alt="profile image" width={1000} className="mx-auto border border-white-500 rounded-lg md:hover:scale-150 ease-in duration-300" />
          </div>
          <div className="col-span-1 pt-8 md:pt-0 text-justify">
              <h4 className=" text-[#52796F]">My Role </h4>
              <p>I was responsible for designing and implementing the front-end of the application
              The wire framing and low fidelity prototype were done in Figma. After I created a high fidelity prototype following the design using HTML and CSS.
              Finally I used react to create the front-end of the web application</p>
              <h4 className=" text-[#52796F] mt-4">What I Learnt</h4>
              <p>Being my first project, everything was new and I was able to learn many things including:</p>
                <ul className="list-disc pl-11">
                  <li>Wire framing/prototyping in Figma</li>
                  <li>Responsive designs</li>
                  <li>React front end - components and hooks</li>
                  <li>UX design research and creating user journey maps</li>
                  <li>Version control with GitHub</li>
                </ul>
            </div>
        </div>

        <div className=" max-w-[1024px] m-auto md:grid grid-cols-2 gap-8 items-center px-8 my-20">
          <div className="col-span-1 pt-8 md:pt-0 text-justify">
            <h4 className=" text-[#52796F]" >Difficulties I had</h4>
            <p>Figma was a completely foreign tool to me before starting this project so initially I had trouble understanding how to create the pages the way I wanted, but slowly got the hang of it and was able to create every page much faster.
            Being my first responsive web application, I initially ran into problems of having content in weird positions, sideways scrolling etc when in smaller screens. 
            The biggest challenge was using react and understanding how it worked. I also challenged myself to create a functioning cart which I found quite difficult but enjoyable as I was able to learn a lot </p>
            <h4 className=" text-[#52796F] mt-4">Whats next for Carbon Alt Delete</h4>
            <p>As I continue to improve my skills and understanding of e-commerce sites, I wish to continue this project and make it fully functioning with a database of products, authentication and the ability to checkout/accept payments.</p>
          </div>
          <div>
            <Image src={products} alt="profile image" width={1000} className="width-300 mx-auto border border-white-500 rounded-lg md:hover:scale-150 ease-in duration-300" />
          </div>
        </div>
      
      </div>
      
    </div>
    </div>
  )
}

export default carbon