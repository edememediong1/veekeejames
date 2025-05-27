import React from 'react'
import ImageGrid from '../Components/Collections/ImageGrid'
import { images } from '../lib/data'

const page = () => {
  return (
    <div>
        <div className="h-[60vh] md:h-[300px] lg:h-[70vh] bg-[#0c0c0c] w-full flex justify-center items-center p-5">
            <h1 className='text-white text-5xl lg:text-6xl text-center font-medium'>THE ONYX COLLECTIONS</h1>
        </div>
        <section>
            <ImageGrid images={images}/>
        </section>
    </div>
  )
}

export default page