'use client'
import Link from 'next/link'
import Image from 'next/image'
import facebook from '../../public/facebook.svg'
import whatsapp from '../../public/whatsapp.svg'
// import { Facebook, PhoneIcon as Whatsapp } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='flex flex-col md:gap-5 md:justify-start lg:flex-row w-full lg:justify-around   bg-black text-white p-7 gap-10 text-[13px]'>
        <ul className="flex flex-col md:flex-row gap-4 ">
            <li className='border-b py-2 md:border-none'>About us</li>
            <li className='border-b py-2 md:border-none'>Bridal collection</li>
            <li className='border-b py-2 md:border-none'>Book an appointment</li>
            <li className='border-b py-2 md:border-none'>Make an Enquiry</li>
            <li className='border-b py-2 md:border-none'>Contact us</li>

        </ul>
        <section className='flex flex-col md:flex-col lg-flex gap-5'>
            <p>&copy;2025 Flora Fashions</p>
            <span className='flex gap-3'>
                <Link href="">
                    <Image src={facebook} alt="facebook logo" width={20} height={20} className='bg-white'/>
                </Link>
                <Link href="">
                    <Image src={whatsapp} alt="whatsapp logo" width={20} height={20} className=' bg-white'/>
                </Link>
            </span>
        </section>
    </footer>
  )
}

export default Footer