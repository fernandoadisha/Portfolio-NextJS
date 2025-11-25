import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={assets.logo} alt='logo' className='w-36 mx-auto' />

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='logo' className='w-6' />
                    fernandoadisha007@gamil.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>
                    All right reserved.
                </p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/fernandoadisha">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/adhishafernando/">LinkedIn</a></li>
                </ul>
            </div>

        </div >
    )
}

export default Footer