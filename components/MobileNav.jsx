"use client";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Link from "next/link";

const links = [
    {
        name: 'home',
        href: '/'
    },
    {
        name: 'services',
        href: '/services'
    },
    {
        name: 'resume',
        href: '/resume'
    },
    {
        name: 'work',
        href: '/work'
    },
    {
        name: 'contact',
        href: '/contact'
    }
]

const MobileNav = () => {
    const path = usePathname()
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                <h1 className="text-4xl font-semibold">Sadekur<span className="text-accent"> Rahman</span></h1>
                </Link>
            </div>
            {/* nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link 
                            href={link.href}
                            key={index}
                            className={`text-xl capitalize hover:text-accent transition-all ${path === link.href && "text-accent border-b-2 border-accent"}`}>{link.name} </Link>
                    );
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
