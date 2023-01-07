import React from 'react'
import Image from "next/image";
import Link from 'next/link'

function Project({img, title, description, url}) {
  return (
    <div className="border border-white-500 rounded-lg w-[400px] min-h-[600px]">
            <Image src={img} alt="carbonAltDel" width={400} height={442} />
            <div className="p-8">
                <h4>{title}</h4>
                <p>{description}</p>
                <br />
                <Link href={url}>
                    <p>More about this project</p>
                </Link>
            </div>
        </div>
  )
}

export default Project