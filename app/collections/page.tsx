import React from 'react'
import ImageGrid from '../Components/Collections/ImageGrid'
import { images } from '../lib/data'

const page = () => {
  return (
    <div>
        <section className='bg-[url("https://veekeejames.com/wp-content/uploads/2023/12/Bridal-new.jpg")] bg-center bg-cover md:bg-[url("https://veekeejames.com/wp-content/uploads/2023/12/Bridal-desktop.jpg")] h-[100vh] md:bg-center bg-no-repeat md:bg-cover text-white flex flex-col justify-end items-center md:justify-center md:items-start'>
            <article className="flex flex-col justify-center items-center w-[80%] md:w-[50%] gap-10 mb-10">
                <h2 className="text-4xl text-center md:text-[3rem]">THE ONYX COLLECTION</h2>
            </article>
        </section>
        <section>
            <ImageGrid images={images}/>
        </section>
    </div>
  )
}

export default page