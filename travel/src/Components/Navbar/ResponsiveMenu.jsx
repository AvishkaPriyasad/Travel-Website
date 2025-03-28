import { X, ChevronRight, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
    return (
        <div className={`
            ${showMenu ? 'translate-x-0' : 'translate-x-full'} 
            fixed inset-y-0 right-0 z-[90] 
            h-screen w-[85%] max-w-sm
            flex flex-col justify-between 
            bg-white/95 backdrop-blur-lg
            px-6 pb-8 pt-6 
            shadow-2xl shadow-black/30
            transition-all duration-300 ease-in-out
            border-l border-gray-200
        `}>
            {/* Header with close button */}
            <div className='flex justify-end'>
                <button 
                    onClick={() => setShowMenu(false)}
                    className='
                        p-2 rounded-full 
                        hover:bg-gray-100 
                        transition-colors duration-200
                        focus:outline-none focus:ring-2 focus:ring-green-600
                    '
                    aria-label="Close menu"
                >
                    <X className='w-6 h-6 text-gray-700' />
                </button>
            </div>

            {/* User Profile Section */}
            <div className='flex items-center gap-4 px-4 py-3 rounded-lg bg-gray-50'>
                <div className='
                    p-3 rounded-full 
                    bg-green-100 text-green-700
                '>
                    <User className='w-6 h-6' />
                </div>
                <div>
                    <p className='text-sm text-gray-500'>Welcome to</p>
                    <h2 className='font-bold text-gray-800'>TravelMate</h2>
                </div>
            </div>

            {/* Navigation Links */}
            <nav className='flex-1 mt-8'>
                <ul className='space-y-2'>
                    {[
                        { to: '/', label: 'Home' },
                        { to: '/tours', label: 'Tours' },
                        { to: '/about', label: 'About Us' },
                        { to: '/gallery', label: 'Gallery' },
                        { to: '/contact', label: 'Contact' },
                    ].map((item) => (
                        <li key={item.to}>
                            <Link 
                                to={item.to} 
                                onClick={() => setShowMenu(false)}
                                className='
                                    flex items-center justify-between
                                    px-4 py-3 rounded-lg
                                    text-gray-800 hover:bg-gray-100
                                    transition-colors duration-200
                                    font-medium
                                '
                            >
                                {item.label}
                                <ChevronRight className='w-5 h-5 text-gray-400' />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Call-to-Action Button */}
            <div className='mt-6 px-4'>
                <Link 
                    to='#' 
                    onClick={() => setShowMenu(false)}
                    className='
                        block w-full text-center
                        bg-green-600 hover:bg-green-700 
                        text-white px-6 py-3 rounded-lg
                        font-semibold
                        transition-colors duration-200
                        shadow-md hover:shadow-lg
                    '
                >
                    Book Now
                </Link>
            </div>

            {/* Footer */}
            <div className='mt-8 text-center'>
                <p className='text-xs text-gray-500'>
                    &copy; {new Date().getFullYear()} TravelMate
                </p>
                <div className='flex justify-center gap-4 mt-4'>
                    <a href="#" className='text-gray-400 hover:text-green-600'>
                        <span className='sr-only'>Facebook</span>
                        <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                    </a>
                    <a href="#" className='text-gray-400 hover:text-green-600'>
                        <span className='sr-only'>Instagram</span>
                        <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                    </a>
                    <a href="#" className='text-gray-400 hover:text-green-600'>
                        <span className='sr-only'>Twitter</span>
                        <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveMenu