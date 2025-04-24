import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import {images} from "../../lib/data"
import RelatedItems from '@/app/Components/Collections/RelatedItems'
import { getRelatedImages } from '@/app/lib/related_items'
import { notFound } from 'next/navigation'

// type PageProps = {
//     params: {
//       id : string
//     }
//     searchParams?: Record<string, string | string[] | undefined>
// }



export default async function Page ({params} : {params: Promise<{id: string}>}) {

  const {id} = await params
  // console.log(param)
  
  const image = images.find((img) => img.id ==  id)

  console.log(image)

  if (!image) {
    return notFound()
  }

  //Get related images based on the same category
  const relatedImages = getRelatedImages(image, images)
  
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
       <section className="flex flex-col w-full p-2 gap-14 md:flex-row md:w-[80%] m-auto my-16">
          {image ? (
            <div className='relative w-full md:w-[50%] h-[100vh]'>
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
            <article className='w-full md:w-[50%] flex flex-col gap-10 text-justify md:items-left '>
              <h1 className='font-medium text-2xl'>GTY-0<span>{image.id}</span></h1>
              <p className="tracking-tighter">{image.description}</p>
              <Link href="/make-an-enquiry">
                  <button 
                    className='bg-black text-white p-2 w-[180px]'>
                      Make an Enquiry
                  </button>
              </Link>
            </article>)}
       </section>

        {/* Related Images Section */}
        
        {relatedImages.length > 0 &&
         <RelatedItems currentImageId={image?.id} images={relatedImages} />
        }

    </div>
  )
}

