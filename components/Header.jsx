"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import HireMeModal from "./HireMeModal";

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
          <h1 className="text-3xl xl:text-4xl font-semibold text-gradient">
            Sadekur Rahman
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Nav />
          <a href="mailto:shadekur.rahman60@gmail.com">
            <Button>Hire Me</Button>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;