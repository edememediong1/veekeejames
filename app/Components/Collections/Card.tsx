import React from 'react'
import Image from 'next/image'
import type{dataType} from "@/app/lib/data"

interface dataProps {
    data : dataType
}

const Card = ({data} : dataProps) => {
  return (
    <div className='h-[480px]'>
        <div className="relative h-[450px] cursor-pointer transition-transform hover:scale-[1.02] ">
            <Image 
                src={data.src || '/placeholder.svg'} 
                alt={data.category} 
                className="object-cover w-[320px]" 
                fill 
                unoptimized
            />
        </div>
    </div>
   
  )
}

export default Card