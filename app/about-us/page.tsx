import React from 'react'
import Image from 'next/image'
import carouselThree from '../assets/carousel3.jpg'
import tradbride from "../assets/trad_bride.jpg"
import red_bride from '../assets/red_bride_potrait.jpg'




const Page = () => {
  return (
    <main>
        <div className='w-full flex justify-center items-center bg-[#FFF2E3]'>
            <article className=' w-[90%] md:w-[85%] p-2 py-8 md:px-5 md:py-12 grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:gap-5 lg:gap-10 lg:text-justify md:text-left items-start'>
                <section className="">
                    <h2 className='text-2xl lg:text-3xl leading-9 lg:leading-[45px] text-justify tracking-tighter'>&ldquo;Luxury isn&apos;t just about how a dress looks but how it makes you feel...&rdquo;</h2>
                </section>
                <section className="  leading-7 md:text-[14px] text-justify tracking-tighter">
                    <p>Founded in 2023, Luxury by Flora is a couture fashion house rooted in elegance, precision, and individuality. From our studio in Abuja, Nigeria, we create timeless, handcrafted pieces that celebrate the strength and beauty of every woman. Each garment is made with the highest attention to detail because for us, luxury isn’t just about how a dress looks but how it makes you feel.</p>
                </section>
                <section className=" leading-7 md:text-[14px] text-justify tracking-tighter">
                    <p>More than a fashion brand, Luxury by Flora is a story of transformation that inspires confidence and self-expression in every client we serve. We are also home to Captured by Flora, our sister photography and videography studio located at <strong>131B N. Okonjo Iweala Way, Wuye, Abuja,</strong> where moments are captured as beautifully as our designs are made.</p>
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
        <div className='w-full flex flex-col justify-center items-center bg-[#FFF2E3] py-8 md:py-12'>
            <h2 className='text-xl md:text-2xl mt-8 mb-3 font-semibold'>ABOUT THE DESIGNER</h2>
            <article className=' w-[90%] md:w-[85%] p-2 md:p-5 grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:gap-5 lg:gap-10 lg:text-justify md:text-left items-start'>
                <section className="flex flex-col justify-center items-center space-y-4">
                    <i className=' md:text-lg  lg:text-xl leading-9 lg:leading-[45px] text-justify tracking-tighter'>“I became a designer the day I lost confidence in one. And now, I design to restore that confidence in every woman I dress.” — Flora</i>
                    <div className='relative w-full h-[350px] md:h-[450px] lg:h-[500px]'>
                        <Image 
                            src={red_bride}
                            alt=''
                            fill
                            unoptimized
                            className='object-cover'
                        />
                    </div>
                </section>
                <section className=" leading-7 md:text-[14px] text-justify tracking-tighter space-y-4">
                    <p><strong>Adigwe Mamah Florence</strong>, known professionally as Flora, is a woman of vision, a creative force dedicated to the art of elegance, detail, and identity. As founder and creative director of Luxury by Flora, she designs not just garments, but bold expressions of confidence, beauty, and self-worth. Her signature style combines precision, grace, and a quiet kind of power that stirs hearts. Her journey into fashion began with heartbreak. In 2022, while preparing to represent Nigeria at an international beauty pageant in Tanzania, Flora trusted a tailor to create multiple gowns and a grand national costume. But the outfits were delivered rushed, incomplete, and nothing like what was agreed.</p>
                    <p>The biggest disappointment was the national costume, made from poor fabric, the wrong color, and bearing no resemblance to her vision. With no time to replace it, she wore a green evening gown instead, symbolizing one of the Nigerian flag’s colors.It was a painful moment, but it lit a fire. The very day she returned to Abuja, Flora enrolled in a fashion school. She had made a firm decision to become the kind of designer she never had, one who listens, understands, and exceeds expectations. </p>
                </section>
                <section className="  leading-7 md:text-[14px] text-justify tracking-tighter space-y-4">
                    <p>Since then, she has trained at three fashion schools, including the renowned Prudential Fashion Academy, honing her skills with discipline and passion.</p>
                    <p>Before fashion, Flora worked over four years in banking at United Bank for Africa and Sterling Bank. This corporate experience shaped her with structure and professionalism, which now blend seamlessly with her artistic flair. Today, every design from Luxury by Flora is personal. Flora knows how it feels when clothing fails to reflect your identity, and how powerful it is when it finally does. Her mission is to give every woman exactly what she asked for and more. Because for Flora, a client’s smile is more than satisfaction. It is soul nourishment.</p>
                    <p>She is also the founder of Captured by Flora, a photography and videography studio at 131B N. Okonjo Iweala Way, Wuye, Abuja, where beauty is captured as intentionally as it is designed. Through Luxury by Flora, Flora continues to tell a story of resilience, grace, and reinvention, and invites every woman who wears her designs to do the same.</p>
                </section>
            </article>
        </div>
    </main>
  )
}

export default Page