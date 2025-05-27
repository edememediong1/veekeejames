'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import type{dataType} from "@/app/lib/data"
import { HeartIcon } from 'lucide-react'

interface ImageCardProps {
    image : dataType
}

const Card = ({image} : ImageCardProps) => {
  const [isLiked, setIsLiked] = useState(false)

   function handleClick() {
     setIsLiked(!isLiked ? true : false)
   }
  return (
      <div className='h-[480px] hover:scale-[1.02] transition-transform duration-200 ease-in-out'>
          <Link key={image.id} href={`/collections/${image.id}`}>  
            <div className="relative h-[450px] cursor-pointer ">
                <Image 
                    src={image.src || '/placeholder.svg'} 
                    alt={image.category} 
                    className="object-cover w-[320px]" 
                    fill 
                    unoptimized
                />
            </div>
          </Link>
          <div className="flex justify-between items-center mt-2">
            <h2>FLORA-<span>0{image.id}</span></h2>
              <HeartIcon className={`${isLiked && 'fill-black'}`} onClick={handleClick} width={20}/>
          </div>
      </div>
    
  )
}

export default Card