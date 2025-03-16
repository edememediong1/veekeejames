import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className="h-[60vh] md:h-[300px] lg:h-[70vh] bg-[#0c0c0c] w-full flex justify-center items-center p-5">
            <h1 className='text-white text-5xl lg:text-6xl text-center font-medium'>MADE TO ORDER</h1>
        </div>
        <main>
            <article className='w-full p-3 md:w-[80%] m-auto flex flex-col gap-6 items-start leading-8 font-medium text-justify my-20 tracking-tighter'>
                <h1 className='text-3xl md:text-4xl'>THE PROCESS</h1>
                <p>
                    Brides may choose a design from our incredible (Gutsy) collection. Dresses will be made with your exact measurements that can be taken at our office or sent to us using our measurement guide.    
                </p>
                <p>
                    This consultation can be held physically in our Lagos office or virtually for clients abroad. The client is then invoiced, measured and receives a sketch that directs the production of the dress (International client receive a detailed guide to help take their measurements accurately).
                </p>
                <p>
                    It is important to note that ninety percent of our clients never get to meet us physically for consultations or fittings but receive the same quality experiences and outcomes  
                </p>
                
                <p>
                    The ideal order-processing timeframe for bridal dresses is six (6) months from the consultation date
                    You are allowed to invite a maximum of three loved ones for your consultation.
                    You may make a request for an express order by filling the “Make an enquiry form” and we will get in touch with you about the possibilities.
                </p>

                <Link href="/make-an-enquiry">
                    <button className='border py-1 px-2 border-black bg-slate-50'>
                        Make an enquiry
                    </button>
                </Link>

            </article>
        </main>
    </div>
  )
}

export default page