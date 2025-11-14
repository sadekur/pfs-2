import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='py-8 xl:py:12 text-white'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href="/">
          <h1 className='text-4xl font-semibold'>Sadekur <span className='text-blue-500'>Rahman</span></h1>
        </Link>
        {/* Desktop Nav */}
        <div className='hidden md:flex justify-between items-center mt-5'>
          <Nav />
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className='flex md:hidden'>
          <MobileNav />
        </div>
      </div>

    </header>
  )
}

export default Header
