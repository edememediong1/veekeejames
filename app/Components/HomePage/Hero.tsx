import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
        <section className='bg-[url("https://veekeejames.com/wp-content/uploads/2023/12/Bridal-new.jpg")] bg-center bg-cover md:bg-[url("https://veekeejames.com/wp-content/uploads/2023/12/Bridal-desktop.jpg")] h-[100vh] md:bg-center bg-no-repeat md:bg-cover text-white flex flex-col justify-end items-center md:justify-center md:items-start'>
            <article className="flex flex-col justify-center items-center border w-[80%] md:w-[50%] gap-10 mb-10">
                <h2 className="text-4xl text-center md:text-[3rem]">THE GUSTY COLLECTION</h2>
                <button className='hidden md:flex md:text-[14px] md:p-3 md:bg-white text-black uppercase font-semibold'>
                    <Link href="">View Collection</Link>
                </button>
            </article>
        </section>
        <section>
                <button className=''>
                    <Link href="">View Collection</Link>
                </button>
        </section>
        <section className='bg-[url("https://veekeejames.com/wp-content/uploads/2023/12/Bridal-new.jpg")] bg-center bg-cover md:bg-[url("https://veekeejames.com/wp-content/uploads/2023/12/Bridal-desktop.jpg")] h-[100vh] md:bg-center bg-no-repeat md:bg-cover text-white flex flex-col justify-end items-center md:justify-center md:items-start'>
            <article className="flex flex-cols justify-center items-center">
                <h2>THE GUSTY COLLECTION</h2>
                <button className=''>
                    <Link href="">View Collection</Link>
                </button>
            </article>
        </section>
        

    </div>
  )
}

export default Hero