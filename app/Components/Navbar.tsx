'use client'
import React from 'react'
import logo from "../../public/dolce-gabbana-1.svg"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false)

    function handleToggle(){
        setMenuActive( menuActive== false ? true: false)
    }
  return (
    <nav className='flex bg-[#fff9f2] w-full  justify-start md:justify-center items-center'>
        
        <div className=' md:hidden relative'>
            <Image src={menuActive ? 'cancel.svg': 'menu.svg'} alt="toggle" onClick={handleToggle} width={50} height={50}/>
            {menuActive && (
                <ul className='absolute w-screen'>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/brides">BRIDES</Link>
                    </li>
                    <li>
                        <Link href="/non-bridals">NON BRIDALS</Link>
                    </li>
                    <li>
                        <Link href="/about-us">ABOUT US</Link>
                    </li>
                    <li>
                        <Link href="/make-an-enquiry">MAKE AN ENQUIRY</Link>
                    </li>
                </ul>
            )
             }
        </div>
        

        <div className=' md:flex md:flex-col md:justify-center md:items-center'>
            <Link href="/">
                <Image src={logo} alt="Logo" className='w-[250px] '/>
            </Link>
            <ul className='hidden md:flex space-x-2'>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li className='nav-bride'>
                    <span>BRIDE</span>
                    <ul className='bride-dropdown'>
                        <li className=''>
                            <span>COLLECTIONS <Image src="right.svg" alt="right" width={30} height={30}/></span>
                            <div>
                                <p><Link href='/gutsy-collection'>THE GUTSY COLLECTION LOOKBOOK</Link></p>
                            </div>
                        </li>
                        <li>
                            <span>THE PROCESS <Image src="right.svg" alt="right" width={30} height={30}/></span>
                            <div>
                                <p><Link href="/bespoke">BESPOKE</Link></p>
                                <p><Link href="/made-to-order">MADE TO ORDER</Link></p>
                            </div>

                        </li>
                        <li>
                            <span>ORDER OUR COLLECTION <Image src="right.svg" alt="right" width={30} height={30}/></span>
                            <div>
                                <p><Link href="/make-an-enquiry">MAKE AN ENQUIRY</Link></p>    
                            </div>

                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/non-bridals">NON BRIDALS</Link>
                </li>
                <li>
                    <Link href="/about-us">ABOUT US</Link>
                </li>
                <li>
                    <Link href="/make-an-enquiry">MAKE AN ENQUIRY</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar