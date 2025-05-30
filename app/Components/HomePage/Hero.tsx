import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import headShot from '../../assets/headshot.jpg'
import heroShot from '../../assets/heroshot.jpg'

const Hero = () => {
  return (
    <div>
        <section className='relative bg-center bg-cover h-[120vh] md:h-[150vh] lg:h-[210vh] md:bg-center bg-no-repeat md:bg-cover text-white flex flex-col justify-end items-center md:justify-center md:items-start md:p-10'>
            <Image src={headShot} alt='' fill className=' object-cover h-full' />
            <article className="absolute flex flex-col justify-center items-center w-[80%] md:w-[50%] gap-10 mb-10">
                <h2 className="text-4xl text-center md:text-[3rem] leading-snug">ELEVATE YOUR ELEGANCE</h2>
                <button className='hidden lg:flex md:text-[14px] md:p-3 md:bg-white text-black uppercase font-semibold'>
                    <Link href="/collections">View Collection</Link>
                </button>
            </article>
        </section>
        <section className=' h-[20vh] flex justify-center items-center '>
                <button className='uppercase font-medium border-[1px] border-black p-2'>
                    <Link href="/collections">Shop the Collections</Link>
                </button>
        </section>
        <section className='relative bg-center bg-cover  h-[120vh] md:h-[150vh] lg:h-[200vh]  bg-no-repeat md:bg-cover text-white flex flex-col justify-end items-center md:justify-center md:items-start'>
            <Image src={heroShot} alt='' fill className=' object-cover h-full' />
            <article className=" absolute ml-12 flex flex-col justify-center items-start w-[90%] md:w-[50%] lg:w-[40%]  gap-10 mb-10">
                <h2 className="text-3xl  md:text-[3rem] uppercase leading-snug">Make an enquiry today</h2>
                <button className=' bg-black p-3 border text-[14px] md:p-3 md:text-[18px] text-white uppercase font-semibold '>
                    <Link href="/make-an-enquiry">Discover More</Link>
                </button>
            </article>
        </section>
        

    </div>
  )
}

export default Hero