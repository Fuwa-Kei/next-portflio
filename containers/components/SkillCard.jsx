import React from 'react'
import Image from "next/image";

function SkillCard (props) {
  return (
    <div className="flex-1 flex justify-start gap-8 items-center">
        <Image src={props.img} width={100} height={100} className="hover:scale-105 ease-in duration-300" />
        <p>{props.text}</p>
    </div>
  )
}

export default SkillCard