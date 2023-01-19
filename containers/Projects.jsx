import React from 'react'
import Image from "next/image";
import carbon from '../public/assets/projects/carbonAltDel.png'
import project1 from '../public/assets/projects/carbonaltdel-overview.png'
import Project from './components/Project';

function Projects() {
  return (
    <div id="projects" className="max-w-[1024px] mx-auto py-32 ">
        <h3 className="text-center uppercase pb-8">Projects</h3>
    <div className=" flex justify-center lg:justify-between items-start flex-wrap px-8 gap-16">
        <Project 
            img={project1} 
            title="Carbon Alt Delete" 
            description="First hackthon project hosted by Llyods bank x Athena"
            url="/carbon"
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