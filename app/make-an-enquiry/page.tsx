import React from 'react'
import Form from '../Components/NonBridals/Form'

const  Page = () => {
  return (
    <div>
        <section className='bg-black h-[70vh] text-white flex  justify-center items-center'>
            <article className="flex flex-col justify-center items-center w-full">
                <h2 className="text-4xl text-center md:text-[3rem]">MAKE AN ENQUIRY</h2>
            </article>
        </section>
        <section className=' md:w-[80%] mt-10  m-auto p-5'>
          <p className='font-medium'>Please fill in the form below to make an enquiry, and a member of our team will get back to you.</p>
        </section>
        <section className='flex flex-col items-center my-10'>
            <Form/>
        </section>
    </div>
  )
}

export default Page