import React from 'react'
import logo from  './assets/flora_logo.png'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center bg-white'>
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .logo-breathe {
          animation: breathe 2s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        <div className="flex flex-col justify-center items-center">
              <Image 
                src={logo} 
                alt="Flora Logo" 
                className="logo-breathe float object-contain h-[100px] w-[100px] m-auto"
                width={500}
                height={500}
              
              />
        </div>

    </div>
  )
}

export default Loading