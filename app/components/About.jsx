// import { assets, infoList, toolsData } from '@/assets/assets'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const About = () => {

    const [infoList, setInfoList] = useState([]);
    const [toolsData, setToolsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/info')
            .then(res => res.json())
            .then(data => {
                setInfoList(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetcing info:', error);
                setLoading(false);
            })
    }, []);

    // Get tools
    useEffect(() => {
        fetch('http://localhost:8080/api/tools')
            .then(res => res.json())
            .then(data => {
                setToolsData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetcing info:', error);
                setLoading(false);
            })
    }, []);

    if (loading) return <div>Loading...</div>

    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20' id='about'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='userImage'
                        className='w-full rounded-3xl' />
                </div>

                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        I am a expericed developer who focused on IOT development, .Net development and RPA development
                        I have worked at MAS Kreeda as Intern and currently working as Software Engineer at TeeJay Lanka
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li className='border-[0.5px] border-grey-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] 
                            hover:-translate-y-1 duration-500 hover:shadow-[#000]'
                                key={index}>
                                {/* <Image src={icon} alt={title} className='w-7 mt-3' width={28} height={28} /> */}
                                <Image src={icon} alt={title} className='w-7 mt-3' width={28} height={28} />

                                <h3 className='my-4 font-semibold text-grey-700'>{title}</h3>
                                <p className='text-grey-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 text-grey-700 font-Ovo'>
                        Tools I user
                    </h4>

                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg
                            cursoe-pointer hover:-translate-y-1 duration-500'
                                key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' width={14} height={14} />
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default About