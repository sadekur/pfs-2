import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='py-8 xl:py:12 text-white'>
      <div className='container mx-auto'>
        <Link href="/">
          <h1 className='text-4xl font-semibold'>Sadekur <span className='text-accent'>Rahman</span> - Font Test Rahman</h1>
        </Link>
        {/* Desktop Nav */}
        <div className='hidden md:flex justify-between items-center mt-5'>
          <Nav />
        </div>
      </div>

    </header>
  )
}

export default Header
