import React from 'react'
import Form from '../Components/NonBridals/Form'

const  Page = () => {
  return (
    <div>
        <section className='bg-[url("https://veekeejames.com/wp-content/uploads/2023/12/Bridal-new.jpg")] bg-center bg-cover md:bg-[url("https://veekeejames.com/wp-content/uploads/2023/12/Bridal-desktop.jpg")] h-[70vh] md:bg- bg-no-repeat  text-white flex flex-col justify-end items-center md:justify-center md:items-start'>
            <article className="flex flex-col justify-center items-center w-[80%] md:w-[50%] gap-10 mb-10">
                <h2 className="text-4xl text-center md:text-[3rem]">MAKE AN ENQUIRY</h2>
            </article>
        </section>
        <section className='w-[90%] md:w-[80%] mt-10  m-auto p-5'>
          <p className='font-medium'>Please fill in the form below to make an enquiry, and a member of our team will get back to you.</p>
        </section>
        <section className='flex flex-col items-center my-10'>
            <Form/>
        </section>
    </div>
  )
}

export default Page