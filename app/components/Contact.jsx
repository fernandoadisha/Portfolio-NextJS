import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center 
        bg-[length 90%_auto]'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with Me</h4>
            <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Contact me for all your inquaries and Id love be a part of your work
            </p>

            <form className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
                    <input type="text" placeholder='Enter Your Name' name="" id="" required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-[#fff]' />
                    <input type="email" placeholder='Enter Your Email' name="" id="" required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-[#fff]' />
                </div>
                <textarea rows='6' placeholder='Enter your message' name="" id="" required
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-[#fff] mb-6'></textarea>

                <button type='submit'
                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-[#000]/80 text-[#fff] rounded-full mx-auto 
                hover:bg-[#000] duration-500'>Submit <Image src={assets.right_arrow_white} alt='rightarrow' className='w-4' />
                </button>

                <p className='mt-4'>Sending.....</p>
            </form>

        </div>
    )
}

export default Contact