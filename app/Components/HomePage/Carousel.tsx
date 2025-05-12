"use client"

import { useState } from "react"
import Slider from "react-slick"
import Image, { StaticImageData } from "next/image"
import { X } from "lucide-react"
// Import the correct CSS files for react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import carouselOne from "../../assets/carousel1.jpg"
import carouselTwo from "../../assets/carousel2.jpg"
import carouselThree from "../../assets/carousel3.jpg"
import carouselFour from "../../assets/e_classic.jpg"


interface images {
  src: StaticImageData
  alt: string
}

const images:images[] = [
  {
    src: carouselOne,
    alt: "Image 1",
  },
  {
    src: carouselTwo,
    alt: "Image 2",
  },
  {
    src: carouselThree,
    alt: "Image 3",
  },
  {
    src: carouselFour,
    alt: "Image 4",
  },
]

const Carousel = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    ],
  }

  const openFullscreen = (src: string) => {
    setFullscreenImage(src)
    document.body.style.overflow = "hidden"
  }

  const closeFullscreen = () => {
    setFullscreenImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <article className="my-10">
      <h2 className="text-[1.9rem] font-medium text-center">BESPOKE WEARS FOR ANY OCCASSION</h2>
      <div className=" w-[100%] md:w-[95%] px-4 mt-5 m-auto">
      <Slider {...settings} className="mb-8">
        {images.map((image, index) => (
          <div key={index} className="">
            <div
              className="relative h-[480px] cursor-pointer transition-transform hover:scale-[1.02] "
              onClick={() => openFullscreen(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover w-[320px]"
                unoptimized // Add this to avoid issues with external images
              />
            </div>
          </div>
        ))}
      </Slider>

      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeFullscreen}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeFullscreen()
            }}
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors"
            aria-label="Close fullscreen view"
          >
            <X size={24} />
          </button>
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fullscreenImage || "/placeholder.svg"}
              alt="Fullscreen view"
              fill
              className="object-contain"
              unoptimized // Add this to avoid issues with external images
            />
          </div>
        </div>
      )}
    </div>
    </article>
    
  )
}

export default Carousel

