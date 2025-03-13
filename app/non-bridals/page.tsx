import React from 'react'
import Form from '../Components/NonBridals/Form'
import ImageGrid from '../Components/NonBridals/ImageGrid'


const page = () => {
  return (
    <main className='w-full'>
        <div className="h-[70vh] md:h-[400px] lg:h-[100vh] bg-[#0c0c0c] w-full flex justify-center items-center p-5">
            <h1 className='text-white text-3xl text-center font-medium'>NON-BRIDAL DRESSES</h1>
        </div>
        <section className='flex flex-col justify-center items-center mt-10'>
          <article className='p-5 space-y-2 w-full md:w-4/5'>
            <h2 className='font-normal text-3xl text-center md:text-left'>THE PROCESS</h2>
            <p className='font-normal text-justify'>To order a non-bridal dress for any other purposes (e.g. Wedding Guest, Birthday, Dinner Dresses e.t.c), please fill the “Make an enquiry form” and we will get in touch with you.</p>
          </article>
          <Form />
          <ImageGrid/>
        </section>
        
          
        

    </main>
  )
}

export default page