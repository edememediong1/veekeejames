import React from 'react'
import Image from 'next/image'
import type{dataType} from "@/app/lib/data"

interface ImageCardProps {
    image : dataType
}

const Card = ({image} : ImageCardProps) => {
  return (
    <div className='h-[480px]'>
        <div className="relative h-[450px] cursor-pointer transition-transform hover:scale-[1.02] ">
            <Image 
                src={image.src || '/placeholder.svg'} 
                alt={image.category} 
                className="object-cover w-[320px]" 
                fill 
                unoptimized
            />
        </div>
    </div>
   
  )
}

export default Card