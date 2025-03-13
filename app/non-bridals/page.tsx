import React from 'react'
import Form from '../Components/NonBridals/Form'


const page = () => {
  return (
    <main>
        <div className="h-[70vh] md:h-[400px] lg:h-[100vh] bg-[#0c0c0c] w-full flex justify-center items-center p-5">
            <h1 className='text-white text-3xl text-center font-medium'>NON-BRIDAL DRESSES</h1>
        </div>
        <section>
          <Form />
        </section>

    </main>
  )
}

export default page