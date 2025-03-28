import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }
    return (
        <header className='fixed w-full top-0 z-[100]'>
            <div className='bg-black/80 backdrop-blur-sm px-4 py-2'>
                <div className='max-w-7xl mx-auto py-2 px-5 flex justify-between items-center'>
                    <Link to='/'>
                    <h1 className='text-2xl text-green-600 font-bold'>Travel<span className='text-white font-bold'>Mate</span></h1>
                    </Link>
                    <div className='flex items-center gap-5'>
                        <nav className='hidden md:flex gap-7'>
                            <ul className='flex items-center font-semibold text-white text-xl gap-7'>
                                <Link to='/tours'><li><div className='hover:text-green-600'>Tours</div></li></Link> 
                                <Link to='/about'><li><div className='hover:text-green-600'>About Us</div></li></Link>
                                <Link to='/gallery'><li><div className='hover:text-green-600'>Gallery</div></li></Link>
                                <Link to='/contact'><li><div className='hover:text-green-600'>Contact</div></li></Link>
                            </ul>
                            <button className='bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-md font-semibold'>Sign In</button>
                        </nav>
                        <HiMenuAlt1 
                        onClick={toggleMenu} 
                        className='cursor-pointer md:hidden text-white'
                        size={30}
                        />
                    </div>
                </div>
                <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
            </div>
        </header>
    )
}

export default Navbar
