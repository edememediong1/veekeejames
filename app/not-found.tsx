import React from 'react'

const NotFound = () => {
  return (
    <div>
      <div className="h-[60vh] md:h-[300px] lg:h-[70vh] bg-[#fff] w-full flex flex-col gap-6 justify-center items-center p-5">
        <h1 className='text-black text-5xl lg:text-6xl text-center font-medium'>Page Not Found</h1>
        <p className="text-black text-lg">Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  )
}

export default NotFound