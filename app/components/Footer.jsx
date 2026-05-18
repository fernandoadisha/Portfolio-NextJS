import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Footer = () => {

    const [percentage, setPercentage] = useState(0);
    const percRef = useRef(null);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const firstDayOfYear = new Date(currentYear, 0, 1, 0, 0, 0); // In JS month indexes start from 0
        const lastDayOfYear = new Date(currentYear, 11, 31, 23, 59, 59);

        const yearStart = firstDayOfYear.getTime();
        const yearEnd = lastDayOfYear.getTime();
        const totalYearDuration = yearEnd - yearStart;

        percRef.current = setInterval(() => {
            const currentTime = Date.now();
            const timePassed = currentTime - yearStart;
            const calculatedPercentage = (timePassed / totalYearDuration) * 100;

            setPercentage(calculatedPercentage.toFixed(6));
        }, 1000); // Update every 1000ms

        return () => {
            if (percRef.current) clearInterval(percRef.current);
        };
    }, []);

    return (
        <div className='mt-20'>
            <div className='text-center'>
                Completion of the Year
                <br />
                <p>
                    {percentage}%
                </p>
            </div>

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