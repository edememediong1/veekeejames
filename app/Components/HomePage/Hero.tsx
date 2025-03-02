import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
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