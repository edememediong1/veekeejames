import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
        <section className='bg-[url("https://veekeejames.com/wp-content/uploads/2023/12/Bridal-new.jpg")] bg-center bg-cover md:bg-[url("https://veekeejames.com/wp-content/uploads/2023/12/Bridal-desktop.jpg")] h-[100vh] md:bg-center bg-no-repeat md:bg-cover text-white flex flex-col justify-end items-center md:justify-center md:items-start'>
            <article className="flex flex-col justify-center items-center w-[80%] md:w-[50%] gap-10 mb-10">
                <h2 className="text-4xl text-center md:text-[3rem]">THE GUSTY COLLECTION</h2>
                <button className='hidden lg:flex md:text-[14px] md:p-3 md:bg-white text-black uppercase font-semibold'>
                    <Link href="">View Collection</Link>
                </button>
            </article>
        </section>
        <section className='lg:hidden h-[20vh] flex justify-center items-center '>
                <button className='uppercase font-medium border-[1px] border-black p-2'>
                    <Link href="">View Collection</Link>
                </button>
        </section>
        <section className=' bg-center bg-cover bg-[url("https://veekeejames.com/wp-content/uploads/2023/12/highlight-id-roHpoNuME1w-unsplash.jpg")] h-[100vh]  bg-no-repeat md:bg-cover text-white flex flex-col justify-end items-center md:justify-center md:items-start'>
            <article className="flex flex-col justify-center items-center w-[90%] md:w-[50%] lg:w-[40%]  gap-10 mb-10">
                <h2 className="text-3xl text-center md:text-[3rem] uppercase">Make an enquiry today</h2>
                <button className=' bg-black p-3 border text-[14px] md:p-3 md:text-[18px] text-white uppercase font-semibold '>
                    <Link href="">Make an enquiry</Link>
                </button>
            </article>
        </section>
        

    </div>
  )
}

export default Hero