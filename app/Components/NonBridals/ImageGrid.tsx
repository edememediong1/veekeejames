import Image from "next/image"
import carouselOne from '../../assets/carousel1.jpg'
import carouselTwo from '../../assets/carousel2.jpg'
import carouselThree from '../../assets/carousel3.jpg'
import headshot from '../../assets/headshot.jpg'
import heroshot from '../../assets/heroshot.jpg'
import tradbride from '../../assets/trad_bride.jpg'

const images = [
    {
        src : carouselOne,
        alt : "Image 1"
    },
    {
        src : carouselTwo,
        alt : "Image 2"
    },
    {
        src : carouselThree,
        alt : "Image 3"
    },
    {
        src : heroshot,
        alt : "Image 4"
    },
    {
        src : headshot,
        alt : "Image 5"
    },
        {
        src : tradbride,
        alt : "Image 6"
    }
]

const ImageGrid = () => {
  return (
    <div className="w-[90%] md:w-5/6 grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-[20vh]">
        {images.map((image, index) => (
                <div key={index}>
                    <div className="relative h-[480px] cursor-pointer transition-transform hover:scale-[1.02] ">
                        <Image 
                            src={image.src || '/placeholder.svg'} 
                            alt={image.alt} 
                            className="object-cover w-[320px]" 
                            fill 
                            unoptimized
                        />
                    </div>
                </div>
            )
        )}
    </div>
  )
}

export default ImageGrid