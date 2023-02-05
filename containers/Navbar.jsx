import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import logo from '../public/assets/keichan_logo_001.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 100) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [])

  return (
    <div className={shadow ? "fixed top-0 w-full h-20 shadow-lg bg-white" : "fixed top-0 w-full h-20 bg-white"}>
        <div className=" flex justify-between items-center w-full h-full px-10 2xl:px-16 ">
            <Image src={logo} alt="logo" width='150' height='48' />
            <ul className='hidden lg:flex cursor-pointer uppercase'>
            <Link href='/'>
                <li className='ml-10 text-sm  hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
                <li className='ml-10 text-sm hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
                <li className='ml-10 text-sm hover:border-b'>Skills</li>
            </Link>
            <Link href='/#projects'>
                <li className='ml-10 text-sm hover:border-b'>Projects</li>
            </Link>
            
                <li className='ml-10 text-sm hover:border-b'>
                    <Link href='https://cv-fuwa-kei.vercel.app/' target="_blank">Resume </Link>
                    (<Link href="https://docs.google.com/document/d/1zF50bxlmbIsgWa4B_QcKuC2j42MEBkpXdwUKrOgQtTI/edit?usp=sharing" target="_blank">Printable</Link>)
                    </li>
            
            <Link href='/contact'>
                <li className='ml-10 text-sm hover:border-b'>Contact</li>
            </Link>
        </ul>
        <div onClick={handleNav} className='lg:hidden'>
            <AiOutlineMenu size={25} className='cursor-pointer' />
        </div>

        </div>
        <div className={nav ? "lg:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ''}>
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
                    <Link href='/#about' onClick={handleNav}>
                        <li className='py-4 text-sm hover:border-b'>About</li>
                    </Link>
                    <Link href='/#skills' onClick={handleNav}>
                        <li className='py-4 text-sm hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#projects' onClick={handleNav}>
                        <li className='py-4 text-sm hover:border-b'>Projects</li>
                    </Link>
                    <li className='py-4 text-sm hover:border-b'>
                    <Link href='https://cv-fuwa-kei.vercel.app/' target="_blank">Resume </Link>
                    (<Link href="https://docs.google.com/document/d/1zF50bxlmbIsgWa4B_QcKuC2j42MEBkpXdwUKrOgQtTI/edit?usp=sharing" target="_blank">Printable</Link>)
                    </li>
                    <Link href='/contact'>
                        <li className='py-4 text-sm hover:border-b'>Contact</li>
                    </Link>
                    </ul>
                </div>
            </div>    
            </div>
    </div>
  )
}

export default Navbar