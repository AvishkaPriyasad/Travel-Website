import React from 'react'
import footer from '../assets/footer-pattern.jpg'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-800 text-white py-10' 
    style={{
        backgroundImage: `url(${footer})`, 
        backgroundPosition:'bottom',
        backgroundSize: 'cover'
        }}>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-10'>
            <div>
                <h1 className='font-bold text-4xl mb-4'><span className='text-green-600'>Travel</span>Mate</h1>
                <p className='text-sm'>We're dedicated to making your travel dreams come true with expertly curated tours and unforgettable experiences.</p>
            </div>
            <div className='flex flex-col lg:items-center'>
                <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                <ul className='space-y-2 text-sm'>
                    <li><a href="/" className='hover:text-green-600'>Home</a></li>
                    <li><a href="/tours" className='hover:text-green-600'>Destinations</a></li>
                    {/* <li><a href="/tours" className='hover:underline'>Tours</a></li> */}
                    <li><a href="/about" className='hover:text-green-600'>About Us</a></li>
                    <li><a href="/contact" className='hover:text-green-600'>Contact</a></li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
                <ul className='space-y-2 text-sm'>
                    <li>123, First Street, Galle, Sri Lanka</li>
                    <li>Phone: +1 234 567 890</li>
                    <li>Email: info@travelmate.com</li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
                <div className='flex space-x-4 '>
                    <FaFacebook className='hover:text-green-600'/>
                    <FaInstagram className='hover:text-green-600'/>
                    <FaTwitter className='hover:text-green-600'/>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-2 text-center'>
          <p className='text-sm'>
            &copy; {currentYear} TravelMate. All rights reserved.
          </p>
          <p className='text-xs mt-2 text-gray-400'>
            Designed and developed by Avishka
          </p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
