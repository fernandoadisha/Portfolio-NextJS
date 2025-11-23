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

            <div>
                <p>
                    All right reserved..
                </p>
            </div>

        </div >
    )
}

export default Footer