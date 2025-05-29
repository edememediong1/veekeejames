'use client'
import Link from 'next/link'
import Image from 'next/image'
// import facebook from '../../public/facebook.svg'
// import whatsapp from '../../public/whatsapp.svg'
// import twitter from '../../public/twitter.svg'
// import instagram from '../../public/instagram.svg'
// import { Facebook, PhoneIcon as Whatsapp } from 'lucide-react'

const Footer = () => {
    const whatsappNumber = "+2348169499444"
    const whatsappMessage = "Hello Flora! I'm interested in your services.\nHere's what I want..."
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <footer className='flex flex-col md:gap-5 md:justify-start lg:flex-row w-full lg:justify-around lg:h-[30vh] lg:items-center  bg-black text-white p-7 gap-10 text-[13px]'>
        <ul className="flex flex-col md:flex-row gap-4 ">
            <li className='border-b border-[#4f4f4f] py-2 md:border-none'>
                <Link href='/about-us'>About Us</Link>
            </li>
            <li className='border-b border-[#4f4f4f] py-2 md:border-none'>
                <Link href='/collections'>Bridal Collection</Link>
            </li>
            <li className='border-b border-[#4f4f4f] py-2 md:border-none'>
                <Link href='/make-an-enquiry'>Book an Appointment</Link>
            </li>
            <li className='border-b border-[#4f4f4f] py-2 md:border-none'>
                <Link href='/contact'>Contact Us</Link></li>

        </ul>
        <section className='flex flex-col md:flex-col lg:flex-row gap-5 lg:gap-12'>
            <p>&copy; {Date()} LuxuryByFlora</p>
            <span className='flex gap-3'>
                <Link  href="https://www.facebook.com/share/1ByT26Q4HV/?mibextid=wwXIfr" target='_blank'>
                    <Image src='facebook.svg' alt="facebook logo" width={18} height={18} className='text-[#4f4f4f]'/>
                </Link>
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Image src='whatsapp.svg' alt="whatsapp logo" width={18} height={18} className=''/>
                </Link>
                <Link href="https://www.instagram.com/luxurybyflora_rtw?igsh=N2kzMDNqd3c3YnU%3D&utm_source=qr" target='_blank'>
                    <Image src='instagram.svg' alt="instagram logo" width={18} height={18} className=''/>
                </Link>
            </span>
        </section>
    </footer>
  )
}

export default Footer