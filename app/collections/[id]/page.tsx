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
  console.log(param)
  
  const image = await images.find((img) => img.id ==  param.id)

  console.log(image)
  
  return(
    <div>
       <section>
          <Link href="/collections">
              <button>
                <ArrowLeft className='w-4 h-4 mr-2' />
                Back to Gallery
              </button>
          </Link>
       </section>
       <section className="flex flex-cols gap-10 md:flex-row md:w-[80%] m-auto">
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
            <article className='w-[50%]'>
              <h1>GTY-0<span>{image.id}</span></h1>
              <p>{image.description}</p>
              <button>Make an Enquiry</button>
          </article>)}
       </section>

    </div>
  )
}

export default Page