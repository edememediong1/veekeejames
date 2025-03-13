import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <main>
        <div className='w-full flex justify-center items-center bg-[#FFF2E3]'>
            <article className=' w-[90%] md:w-[85%] p-5 lg:h-[60vh] grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:gap-5 lg:gap-10 lg:text-justify md:text-left items-center'>
                <section className="max-h-[250px] lg:h-[200px]">
                    <h2 className='font-medium text-2xl lg:text-3xl leading-9 lg:leading-[45px] text-justify tracking-tighter'>We value you and we want you to have the Best experience ever...</h2>
                </section>
                <section className="max-h-[250px] lg:h-[200px] leading-7 md:text-[14px] text-justify tracking-tighter">
                    <p>Founded in 2018, Flora inspires creativity, elegance and class amongst women globally by crafting unique pieces for all seasons. Notable for our skill to present our clients in an almost entirely new sculpted light, you are sure to feel confident in our custom dresses.</p>
                </section>
                <section className="max-h-[250px] lg:h-[200px] leading-7 md:text-[14px] text-justify tracking-tighter">
                    <p>We aspire to always curate splendid experiences that leave long-lasting memories for our clients, with excellent service and quality products whilst engaging endlessly, in activities that better our community</p>
                </section>
            </article>
        </div>
        <div className='w-full md:h-[80vh] my-20'>
            <article className='md:w-[90%] lg:w-[75%] m-auto h-full text-white grid grid-cols-1 md:grid-cols-6 md:grid-rows-3 gap-3 p-3'>
                <div className='bg-black md:row-span-2 md:rounded-lg flex flex-col justify-center text-center md:h-auto h-[50vh]'>
                    <h2 className='font-medium text-4xl lg:text-6xl'>10+</h2>
                    <p className='font-medium text-[20px]'>Years in Business</p>
                </div>
                <div className='relative hidden md:flex bg-black md:col-span-3 md:row-span-3 md:rounded-lg md:h-auto h-[80vh] '>
                    <Image src="https://veekeejames.com/wp-content/uploads/2023/12/IMG_2506-copy.jpg" alt="Image" className="transition-transform hover:scale-[1.02]" fill unoptimized />
                </div>
                <div className='relative hidden md:flex bg-black md:col-span-2 md:row-span-2 md:rounded-lg md:h-auto h-[80vh]'>
                    <Image src="https://veekeejames.com/wp-content/uploads/2022/12/IMG_7648.jpg" alt="Image" className="rounded-lg transition-transform hover:scale-[1.02]" fill unoptimized />
                </div>
                <div className='relative hidden md:flex bg-black md:rounded-lg md:h-auto h-[80vh]'>
                    <Image src="https://veekeejames.com/wp-content/uploads/2022/12/IMG_6959.jpg" alt="Image" className="rounded-lg transition-transform hover:scale-[1.02]" fill unoptimized />
                </div>
                <div className='bg-black  flex md:rounded-lg p-3 text-center flex-col justify-center items-center transition-transform hover:scale-[1.02] h-[50vh] md:h-auto'>
                    <h2 className='font-medium text-3xl lg:text-4xl'>500+</h2>
                    <p className='font-medium text-[16px]'>Happy Customers</p>
                </div>
                <div className='relative hidden md:flex bg-black md:rounded-lg transition-transform hover:scale-[1.02] md:h-auto h-[80vh]'>
                    <Image src="https://veekeejames.com/wp-content/uploads/2022/12/PF1_1991.jpg" alt="Image" className="rounded-lg" fill unoptimized />
                </div>
            </article>
        </div>
    </main>
  )
}

export default Page