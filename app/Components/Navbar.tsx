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
    <nav>
        
        <div>
            <Image src={menuActive ? 'cancel.svg': 'menu.svg'} alt="toggle" onClick={handleToggle} width={50} height={50}/>
            {}
        </div>
        

        <div>
            <Link href="/">
                <Image src={logo} alt="Logo" className='w-[250px] '/>
            </Link>
            <ul>
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
        </div>
    </nav>
  )
}

export default Navbar