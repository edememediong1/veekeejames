import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import {images} from "../../lib/data"

interface ImageDetailPageProp{
    params: {
      id: string
    }
}



const Page = async ({params} : ImageDetailPageProp) => {

  const param = await params
  // console.log(param)
  
  const image = await images.find((img) => img.id ==  param.id)

  console.log(image)
  
  return(
    <div>
       <section className="p-4">
          <Link href="/collections">
              <button className='flex justify-center items-center gap-2 text-black'>  
                <ArrowLeft className='w-4 h-4 mr-2' />
                Back to Gallery
              </button>
          </Link>
       </section>
       <section className="flex flex-cols gap-14 md:flex-row md:w-[80%] m-auto my-16">
          {image ? (
            <div className='relative w-[50%] h-[100vh]'>
                <Image
                  src={image.src}
                  alt="Image"
                  className='w-full '
                  fill
                  unoptimized
                  
                />
            </div>
          ) : (
            <p>Image not found</p>
          )}
          { image && (
            <article className='w-[50%] flex flex-col gap-10 items-left'>
              <h1 className='font-medium text-2xl'>GTY-0<span>{image.id}</span></h1>
              <p>{image.description}</p>
              <Link href="/make-an-enquiry">
                  <button 
                    className='bg-black text-white p-2 w-[180px]'>
                      Make an Enquiry
                  </button>
              </Link>
            </article>)}
       </section>

    </div>
  )
}

export default Page