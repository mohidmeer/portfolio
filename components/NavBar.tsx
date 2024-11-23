'use client';
import Link from "next/link"
import { ThemeSwitch } from "./theme-switch"

const menu_items = [
    {
        href: '#about',
        label: 'About'
    },
    {
        href: '#projects',
        label: 'Projects'
    },
    {
        href: '#experience',
        label: 'Experience'
    },
    {
        href: '#contact',
        label: 'Contact'
    },
    
]




const NavBar = () => {
    return (
        <div className="container mx-auto  items-center flex p-2 sticky top-0 z-10    " >
            <nav className="gap-2 ml-auto relative">
                    <ul className="flex items-center gap-6 justify-center border  relative py-3 px-8 rounded-md bg-background/20 backdrop-blur-2xl ">
                        {
                            menu_items.map((i, z) => (
                                <li className="group  flex flex-col items-center font-bold" key={z} >
                                    <Link href={i.href} >{i.label}</Link>
                                     <span className="w-0 group-hover:w-full duration-200   bg-primary h-[2px]" />
                                </li>
                            ))
                        }
                    </ul> 
            </nav>
            <div className="ml-auto">
                <ThemeSwitch />
            </div>
        </div>
    )
}

export default NavBar

