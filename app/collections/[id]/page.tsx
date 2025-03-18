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
       <section>
          {image ? (
            <div>
                <Image
                  src={image.src}
                  alt="Image"
                  width={100}
                  height={100}
                  unoptimized
                  
                />
            </div>
          ) : (
            <p>Image not found</p>
          )}
          { image && (
            <article>
              <h1>GTY-0<span>{image.id}</span></h1>
              <p>{image.description}</p>
              <button>Make an Enquiry</button>
          </article>)}
       </section>

    </div>
  )
}

export default Page