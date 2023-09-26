"use client"; 
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import './layout.css';
import { usePathname } from 'next/navigation';

{/* mobile nav */}
function MobileNav({open, setOpen}: any) {
    const currentRoute = usePathname();
    const activeStyle = 'bg-sky-700 text-white'; 
    const nonActiveStyle = '';
    return (
        <div className={`absolute top-0 left-0 w-screen h-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-slate-600 h-20"> 
                {/*logo container*/}
                <Link className="text-xl font-semibold" href="/">
                </Link>
            </div>
            <div className="flex flex-col">
                <Link className={`text-xl text-gray-900 p-4 ${currentRoute === '/' ? activeStyle : nonActiveStyle}`} href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </Link>
                <Link className={`text-xl text-gray-900 p-4 ${currentRoute === '/pages/about' ? activeStyle : nonActiveStyle}`} href="/pages/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </Link>
                <Link className={`text-xl text-gray-900 p-4 ${currentRoute === '/pages/services' ? activeStyle : nonActiveStyle}`} href="/pages/services" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Services
                </Link>
                <Link className={`text-xl text-gray-900 p-4 ${currentRoute === '/pages/career' ? activeStyle : nonActiveStyle}`} href="/pages/career" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Career
                </Link>
                <Link className={`text-xl text-gray-900 p-4 ${currentRoute === '/pages/contact' ? activeStyle : nonActiveStyle}`} href="/pages/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </Link>
            </div>  
        </div>
    )
}

{/* desktop nav */}
export default function Header() {

    const [open, setOpen] = useState(false)
    const currentRoute = usePathname();
    const activeStyle = 'bg-sky-700'; 
    const nonActiveStyle = '';

    return (
        <div className="flex filter drop-shadow-md bg-slate-900 px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold" href="/">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
                </a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0 hidden" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex gap-x-6 text-white">
                    <Link href="/" className={`rounded transform transition duration-500 ease-in-out hover:bg-sky-700 p-2 ${currentRoute === '/' ? activeStyle : nonActiveStyle}`}>
                        Home
                    </Link>
                    <Link href="/pages/about" className={`rounded transform transition duration-500 ease-in-out hover:bg-sky-700 p-2 ${currentRoute === '/pages/about' ? activeStyle : nonActiveStyle}`}>
                        About
                    </Link>
                    <Link href="/pages/services" className={`rounded transform transition duration-500 ease-in-out hover:bg-sky-700 p-2 ${currentRoute === '/pages/services' ? activeStyle : nonActiveStyle}`}>
                        Services
                    </Link>
                    <Link href="/pages/career" className={`rounded transform transition duration-500 ease-in-out hover:bg-sky-700 p-2 ${currentRoute === '/pages/career' ? activeStyle : nonActiveStyle}`}>
                        Career
                    </Link>
                    <Link href="/pages/contact" className={`rounded transform transition duration-500 ease-in-out hover:bg-sky-700 p-2 ${currentRoute === '/pages/contact' ? activeStyle : nonActiveStyle}`}>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}