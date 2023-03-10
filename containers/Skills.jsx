import React from 'react'
import {css, figma, html5, js, nextjs, nodejs, reactjs, tailwind} from './imports'
import SkillCard from './components/SkillCard';

function Skills() {
  return (
        <div className="max-w-[1024px] m-auto flex flex-col justify-center items-center gap-4 mb-36">
            <h3 className="uppercase">Skills | Tech stack</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <SkillCard img={html5} text={"HTML5"} />
                <SkillCard img={css} text={"CSS"} />
                <SkillCard img={js} text={"Javascript"} />
                <SkillCard img={reactjs} text={"Reactjs"} />
                <SkillCard img={nextjs} text={"Nextjs"} />
                <SkillCard img={tailwind} text={"Tailwind"} />
                <SkillCard img={nodejs} text={"Nodejs"} />
                <SkillCard img={figma} text={"Figma"} />
            </div>
        </div>
  )
}

export default Skills