// import React from 'react'
// import Link from 'next/link'
// import { Button } from './ui/button'
// import Nav from './Nav'
// import MobileNav from './MobileNav'

// const Header = () => {
//   return (
//     <header className='py-8 xl:py:12 text-white'>
//       <div className='container mx-auto flex items-center justify-between'>
//         <Link href="/">
//           <h1 className='text-4xl font-semibold'>Sadekur <span className='text-blue-500'>Rahman</span></h1>
//         </Link>
//         {/* Desktop Nav */}
//         <div className='hidden md:flex justify-between items-center gap-[10px] mt-5'>
//           <Nav />
//           <Link href="/contact">
//             <Button>Hire Me</Button>
//           </Link>
//         </div>

//         {/* Mobile Nav */}
//         <div className='flex md:hidden'>
//           <MobileNav />
//         </div>
//       </div>

//     </header>
//   )
// }

// export default Header
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled 
        ? "bg-black/70 backdrop-blur-md shadow-lg py-4" 
        : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link href="/">
          <h1 className="text-3xl xl:text-4xl font-semibold">
            Sadekur <span className="text-blue-500">Rahman</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;