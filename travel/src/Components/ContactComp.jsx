import React from 'react'
import contactImg from '../assets/Contact.jpg'

const Contact = () => {
    return (
        <div className='flex flex-col max-w-7xl mx-auto md:flex-row lg:h-screen items-center'>
            {/* image section */}
            <div className='flex-1 bg-gray-100 flex justify-center items-center'>
                <img src={contactImg} alt="Contact Us" className='w-full h-full max-w-md md:max-w-full object-cover' />
            </div>
            {/* contact form section */}
            <div className='flex-1 bg-white w-full max-w-full flex flex-col justify-center px-4 md:px-8 py-12'>
                <h2 className='text-3xl font-bold text-gray-800 mb-6'>Contact Us</h2>
                <form className='space-y-6'>
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            placeholder='Enter your name'
                            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-700 p-2'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            placeholder='Enter your email'
                            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 p-2'
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                        <textarea                           
                            id='message'
                            name='message'
                            rows='5'
                            placeholder='Enter your message'
                            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 p-2'
                            required
                        />
                    </div>
                    <button type='submit' className='w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 '>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
