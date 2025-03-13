
import Image from "next/image"

const images = [
    {
        src : "https://veekeejames.com/wp-content/uploads/2022/12/IMG_8615-2.jpg",
        alt : "Image 1"
    },
    {
        src : "https://veekeejames.com/wp-content/uploads/2022/12/IMG_8615-2.jpg",
        alt : "Image 2"
    },
    {
        src : "https://veekeejames.com/wp-content/uploads/2022/12/IMG_8615-2.jpg",
        alt : "Image 3"
    },
    {
        src : "https://veekeejames.com/wp-content/uploads/2022/12/IMG_8615-2.jpg",
        alt : "Image 4"
    },
    {
        src : "https://veekeejames.com/wp-content/uploads/2022/12/IMG_8615-2.jpg",
        alt : "Image 5"
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