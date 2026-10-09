import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router';
import MobileSidebar from './MobileSidebar';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='bg-[#171d25] fixed top-0 left-0 right-0 z-99'>
        <div className='max-w-[1250px] mx-auto px-5 py-6'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-20 justify-between items-center'>
                    <Link to={'/store'} className='w-[120px] md:w-[165px]'>
                        <img  src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="logo" />
                    </Link>
                    <div className='hidden md:flex lg:flex'>
                        <ul className='flex flex-wrap justify-center items-center gap-5'>
                            <li>
                                <Link to={'/store'} className='text-[#dcdedf] font-medium'>STORE</Link>
                            </li>
                            <li>
                                <Link to={'/about'} className='text-[#dcdedf] font-medium'>ABOUT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='hidden md:flex lg:flex items-center gap-2'>
                    <Link to="/">
                        <p className='text-[#c5c3c0] text-[14px]'>Log in</p>
                    </Link>
                </div>
                <div className='flex md:hidden lg:hidden'>
                    <HiMenu onClick={() => setMenuOpen(!menuOpen)} className='text-[30px] cursor-pointer text-[#f4f5f9]' />
                </div>
            </div>
            
        </div>
        <MobileSidebar  isOpen={menuOpen} onClose={() => setMenuOpen(false)}  />
    </header>
  )
}

export default Header