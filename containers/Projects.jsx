import React from 'react'
import project1 from '../public/assets/projects/carbonaltdel-overview.png'
import studyperks from '../public/assets/projects/studyperks-overview.png'
import misc from '../public/assets/projects/misc-overview.png'
import Project from './components/Project';

function Projects() {
  return (
    <div id="projects" className="max-w-[1024px] mx-auto py-32 ">
        <h3 className="text-center uppercase pb-8">Projects</h3>
    <div className=" flex justify-center lg:justify-between items-start flex-wrap px-8 gap-16">
        <Project 
            img={project1} 
            title="Carbon Alt Delete" 
            description="Hackathon project hosted by Lloyds bank x Athena (Road to net zero)"
            url="/carbon"
            tech="HTML | CSS | React"
        />

        <Project 
            img={studyperks} 
            title="StudyPerks" 
            description="Hackathon project hosted by MLH (Eduhacks)"
            url="/study"
            tech="HTML | CSS | React | Firebase"
        />

        <Project 
            img={misc} 
            title="Small Projects" 
            description="Projects I did for practice and learning new skills "
            url="/others"
            tech="HTML | CSS | React | APIs | JQuery | Tailwind | Nextjs"
        />
        
    </div>
    <div id="skills"></div>
    </div>
  )
}

export default Projects