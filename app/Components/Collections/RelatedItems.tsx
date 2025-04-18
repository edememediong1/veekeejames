import React from 'react'
import Link from 'next/link'
import Card from "./Card"
import type {dataType} from "../../lib/data"


interface RelatedImagesProps {
  currentImageId?: string,
  images: dataType[]
}

const RelatedItems = ({
  currentImageId,
  images
} : RelatedImagesProps) => {

  console.log(currentImageId)

  if (images.length === 0) {
    return null
  }

  return (
    <div className='w-full md:w-[90%] m-auto p-3'>
      <h2 className='mb-6 text-2xl font-semibold'>Related Images</h2>
      <div className='grid grid-cols-1 gap-6 pb-4 overflow-x-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {images.map ((image) => (
            <Link key={image.id} href={`/images/${image.id}`}>
              <Card image={image}/>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default RelatedItems