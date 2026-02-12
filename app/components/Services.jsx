// import { assets, serviceData } from '@/assets/assets'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Services = () => {

    const [serviceData, setServiceData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/services')
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetcing info:', error);
                setLoading(false);
            })
    }, []);

    if (loading) return <div>Loading...</div>

    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20' id='services'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I am a Software Engineer from Colombo worked nearly 1 year at TeeJay Lanka and 1 Year Internshipt at MAS Kreeda Campus
            </p>

            <div className='grid sm:grid-cols-2 lg:sm:grid-cols-4  gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index}
                        className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[#000] cursor-pointer hover:bg-[#ffaaaa] 
                        hover:-translate-y-1 duration-500'>
                        <Image src={icon} alt='icon' className='w-10' width={28} height={28} />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>

                        <a href="link" className='flex items-center gap-2 text-sm mt-5'>
                            Read More <Image src={assets.right_arrow} alt='rigtharrow' className='w-4' />
                        </a>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Services