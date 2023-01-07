import React from 'react'
import Image from "next/image";
import carbon from '../public/assets/projects/carbonAltDel.png'
import Project from './components/Project';

function Projects() {
  return (
    <div className="max-w-[1024px] mx-auto py-32 ">
        <h3 className="text-center uppercase pb-8">Projects</h3>
    <div className=" flex justify-center lg:justify-between items-start flex-wrap px-8 gap-16">
        <Project 
            img={carbon} 
            title="E-commerce" 
            description="First hackthon project hosted by Llyods bank x Athena"
            url="/"
        />

        <Project 
            img={carbon} 
            title="E-commerce" 
            description="First hackthon project hosted by Llyods bank x Athena"
            url="/"
        />
        <div className="border border-white-500 rounded-lg w-[400px] shadow-lg">
            <Image src={carbon} alt="carbonAltDel" width={400} height={442} />
            <div className="p-8">
                <p>First hackthon project hosted by Llyods bank x Athena</p>
                <br />
                <p>More about this project</p>
            </div>
        </div>
        <div className="border border-white-500 rounded-lg w-[400px]">
            <Image src={carbon} alt="carbonAltDel" width={400} height={442} />
            <div className="p-8">
                <p>First hackthon project hosted by Llyods bank x Athena</p>
                <br />
                <p>More about this project</p>
            </div>
        </div>
        <div className="border border-white-500 rounded-lg w-[400px]">
            <Image src={carbon} alt="carbonAltDel" width={400} height={442} />
            <div className="p-8">
                <p>First hackthon project hosted by Llyods bank x Athena</p>
                <br />
                <p>More about this project</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Projects