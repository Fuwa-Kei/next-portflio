import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {FaLinkedin, FaGithub } from 'react-icons/fa'
import logo from '../public/assets/kei-logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className="sticky top-0 w-full h-20 shadow-lg bg-white">
        <div className=" flex justify-between items-center w-full h-full px-10 2xl:px-16 ">
            <Image src={logo} alt="logo" width='125' height='48' />
            <ul className='hidden md:flex'>
            <Link href='/'>
                <li className='ml-10 text-sm  hover:border-b'>Home</li>
            </Link>
            <Link href='/'>
                <li className='ml-10 text-sm hover:border-b'>About</li>
            </Link>
            <Link href='/'>
                <li className='ml-10 text-sm hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
                <li className='ml-10 text-sm hover:border-b'>Projects</li>
            </Link>
            <Link href='/'>
                <li className='ml-10 text-sm hover:border-b'>resume</li>
            </Link>
            <Link href='/'>
                <li className='ml-10 text-sm hover:border-b'>contact</li>
            </Link>
        </ul>
        <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} className='cursor-pointer' />
        </div>

        </div>
        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ''}>
            <div className={nav ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease0in duration-500" : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease0in duration-500"}>
                <div className="flex w-full items-center justify-between border-b border-gray-300 pb-2">
                    <Image src={logo}  alt="logo" width='125' height='48' />
                    <AiOutlineClose size={20} onClick={handleNav} className='cursor-pointer' />
                </div>
                <div className='py-4 flex-col'>
                    <ul>
                    <Link href='/'>
                        <li className='py-4 text-sm hover:border-b'>Home</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm hover:border-b'>About</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm hover:border-b'>resume</li>
                    </Link>
                    <Link href='/'>
                        <li className='py-4 text-sm hover:border-b'>contact</li>
                    </Link>
                    </ul>
                </div>
                {/* <div className="pt-10">
                    <p className='uppercase tracking-widest'>Connections</p>
                    <div className="flex items center justify-start py-2">
                        <FaGithub size={25} className='mx-4 '/>
                        <FaLinkedin size={25} className='mx-4 '/>
                    </div>
                </div> */}
            </div>    
            </div>
    </div>
  )
}

export default Navbar