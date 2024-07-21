import Nav from '@/components/Nav'
import React from 'react'
import Image from 'next/image'
import offlineImage from '../../../assets/pngegg.png'

const page = () => {
    return (
        <div className='h-screen'>
            <div>
                <Nav />
            </div>
            <div className='flex flex-col items-center justify-center h-[80%]'>
                <Image src={offlineImage}
                height={400}
                width={400}
                alt='hello'
                />
    <h1 className='text-3xl text-yellow-800'>Online Payments are not Supported Right Now. Visit college payment portal for payments.</h1>
              {/* <img src={offlineImage} alt="hello" /> */}
            </div>
        </div>
    )
}

export default page