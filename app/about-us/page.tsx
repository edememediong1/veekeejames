import React from 'react'
import Image from 'next/image'
import carouselThree from '../assets/carousel3.jpg'
import tradbride from "../assets/trad_bride.jpg"
import red_bride from '../assets/red_bride_potrait.jpg'



const Page = () => {
  return (
    <main>
        <div className='w-full flex justify-center items-center bg-[#FFF2E3]'>
            <article className=' w-[90%] md:w-[85%] p-2 md:p-5 lg:h-[60vh] grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:gap-5 lg:gap-10 lg:text-justify md:text-left items-center'>
                <section className="max-h-[250px] lg:h-[200px]">
                    <h2 className='font-medium text-2xl lg:text-3xl leading-9 lg:leading-[45px] text-justify tracking-tighter'>We value you and we want you to have the Best experience ever...</h2>
                </section>
                <section className=" lg:h-[200px] leading-7 md:text-[14px] text-justify tracking-tighter">
                    <p>Founded in 2023, Luxury by Flora is a couture fashion house rooted in elegance, precision, and individuality. From our studio in Abuja, Nigeria, we create timeless, handcrafted pieces that celebrate the strength and beauty of every woman. Each garment is made with the highest attention to detail because for us, luxury isn’t just about how a dress looks but how it makes you feel.</p>
                </section>
                <section className=" lg:h-[200px] leading-7 md:text-[14px] text-justify tracking-tighter">
                    <p>Renowned for our ability to reimagine and elevate the women we dress, each custom design is a statement of confidence, grace, and individuality made for every season.</p>
                </section>
            </article>
        </div>
        <div className='w-full md:h-[80vh] my-20'>
            <article className='md:w-[80%] lg:w-[67%] m-auto h-full text-white grid grid-cols-1 md:grid-cols-6 md:grid-rows-3 gap-3 p-3'>
                <div className='bg-black md:row-span-2 md:rounded-lg flex flex-col justify-center text-center md:h-auto h-[50vh]'>
                    <h2 className='font-medium text-3xl lg:text-5xl'>3+</h2>
                    <p className='font-medium text-[20px]'>Years in Business</p>
                </div>
                <div className='relative  md:flex bg-black md:col-span-3 md:row-span-3 md:rounded-full md:h-auto '>
                    <video
                        width="100%"
                        height="240"
                        autoPlay
                        muted
                        loop
                        preload="none"
                        className="object-cover rounded-md"
                        aria-label="Self-hosted video player"
                    >
                        <source src='/julies_real.mov' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='relative md:flex bg-black md:col-span-2 md:row-span-2 md:rounded-lg md:h-auto h-[80vh]'>
                    <Image src={red_bride} alt="Image" className="rounded-lg transition-transform object-cover hover:scale-[1.02]" fill unoptimized />
                </div>
                <div className='relative md:flex bg-black md:rounded-lg md:h-auto h-[80vh]'>
                    <Image src={carouselThree} alt="Image" className="rounded-lg transition-transform object-cover hover:scale-[1.02]" fill unoptimized />
                </div>
                <div className='bg-black  flex md:rounded-lg p-3 text-center flex-col justify-center items-center transition-transform hover:scale-[1.02] h-[50vh] md:h-auto'>
                    <h2 className='font-medium text-3xl lg:text-4xl'>100+</h2>
                    <p className='font-medium text-[16px]'>Happy Customers</p>
                </div>
                <div className='relative md:flex bg-black md:rounded-lg transition-transform hover:scale-[1.02] md:h-auto h-[80vh]'>
                    <Image src={tradbride} alt="Image" className="rounded-lg object-cover" fill unoptimized />
                </div>
            </article>
        </div>
    </main>
  )
}

export default Page