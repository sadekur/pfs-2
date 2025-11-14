"use client";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

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
            <div>logo</div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
