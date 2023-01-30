import React from 'react'
import Navbar from '../containers/Navbar'

function success() {
  return (
    <div>
        <Navbar />
        
        <div id="home" className="w-full flex items-center pt-16 mb-36 mt-16">
            <div className=" w-[500px] mx-auto flex-col justify-center items-center px-8 text-center">
                <h1>Thank you</h1>
                <h3>For dropping by and taking the time to contact me</h3>
                <p>I will be in touch as soon as I can </p>
            </div>
        </div>
    </div>
  )
}

export default success