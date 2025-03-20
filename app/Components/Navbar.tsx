'use client'
import React from 'react'
import logo from "../../public/dolce-gabbana-1.svg"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, Menu, X } from "lucide-react"


type NavItem = {
    title: string,
    href: string,
    children?: NavItem[]
}

const navItems: NavItem[] = [
    {
        title: "HOME",
        href: "/" 
    },
    {
       title: "BRIDE",
       href: "#",
       children: [
        {
            title: "COLLECTIONS",
            href: "#",
            children: [
                {
                    title: "THE GUTSY COLLECTION LOOKBOOK",
                    href: "/collections"
                }
            ]
        },
        {
            title: "THE PROCESS",
            href: "#",
            children: [
                {
                    title: "BESPOKE",
                    href: "/bespoke"
                },
                {
                    title: "MADE TO ORDER",
                    href: "/made-to-order"
                }
            ]
        },
        {
            title: "ORDER OUR COLLECTION",
            href: "#",
            children: [
                {
                    title: "MAKE AN ENQUIRY",
                    href: "/make-an-enquiry"
                }
            ]
        }
       ],
       
    },
    {
        title: "NON BRIDALS",
        href: "/non-bridals"
    },
    {
        title: "ABOUT US",
        href: "/about-us"
    },
    {
        title: "MAKE AN ENQUIRY",
        href: "/make-an-enquiry"
    }

]

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false)

    function handleToggle(){
        setMenuActive( menuActive== false ? true: false)
    }
  return (
    <nav className='h-[15vh] flex gap-10 bg-[#fff9f2] w-full  justify-start md:justify-center items-center md:h-[20vh]'>
        
        <div className=' md:hidden relative '>
            <Image src={menuActive ? 'cancel.svg': 'menu.svg'} alt="toggle" onClick={handleToggle} width={35} height={35} className=''/>
            {menuActive && (
                <ul className='absolute w-screen bg-[#fff9f2] text-[13px] px-4 py-4 border-t mt-3.5'>
                   <li>
                    {/* {navItems.map((item) => (
                        <NavItemMobile key={item.title} item={item} />
                    ))} */}
                   </li>
                </ul>
            )
             }
        </div>
        

        <div className=' md:flex md:flex-col md:justify-center md:items-center md:gap-6'>
            
            {/* Logo */}
            <Link href="/">
                <Image src={logo} alt="Logo" className='w-[150px] md:w-[200px] '/>
            </Link>

            {/* Desktop Menu */}
            <ul className='hidden md:flex space-x-5 font-semibold text-[14px] text-[#353535]'>
                <li className='flex gap-5'>
                    {navItems.map((item) => (
                        <NavItemDesktop key={item.title} item={item} />
                    ))}
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar


function NavItemDesktop({item}: {item: NavItem}) {
    if (!item.children){
        return (
            <Link href={item.href} className='text-foreground text-[14px] hover:text-[#86560e]'>
                {item.title}
            </Link>
        )
    }

    return (
        <div className="group relative">
            <button className='flex items-center rounded-md px-3'>
                {item.title}
            </button>
            <div className="absolute left-0 top-full z-10 hidden min-w-[220px] bg-[#fff9f2] group-hover:block py-5 ">
                {item.children.map((child) => (
                    <DropdownItem key={child.title} item={child} />
                ))}
            </div>
        </div>
    )
}

function DropdownItem({item}: {item: NavItem}) {
    if (!item.children) {
        return (
            <Link
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-gray-700">
                {item.title}
            </Link>
        )
    }

    return (
        <div className="group/nested relative">
            <button className="flex w-full items-center justify-between rounded-md px-4 py-2 text-[12px]">
                {item.title}
                <ChevronRight className='ml-2 h-3 w-3'/>
            </button>
            <div className="absolute left-full top-0 z-20 hidden min-w-[200px] border bg-[#fff9f2] group-hover/nested:block py-2">
                {item.children.map((child) => (
                    <Link key={child.title} href={child.href} className="block px-3 py-2 text-[12px] text-gray-700">
                        {child.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}