import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile_img} alt='profilePic' className='rounded-full w-32' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
            >Hi! I am Adhisha Fernando <Image src={assets.hand_icon} alt='handicon' className='w-6' /></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Software Engineer based on Colombo</h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
                2 Year experienced Software Engineer working with multiple technologies range from IOT realted technologies like ESP32, Embedded programming to technologies like NodeJS, SpringBoot, Angular, Next to AI
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href='#contact'
                    className='px-10 py-3 border-white rounded-full bg-black text-white flex items-center gap-2'>
                    Contact Me <Image src={assets.right_arrow_white} alt='reightarrow' className='w-4' /></a>
                <a href='/sample-resume.pdf' download
                    className='px-10 py-3 border rounded-full border-grey-500 flex items-center gap-2'>My Resume <Image src={assets.download_icon} alt='downloadicon' className='w-4' /></a>
            </div>
        </div>
    )
}

export default Header