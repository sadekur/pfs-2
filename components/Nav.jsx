"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "home", href: "/" },
  { name: "services", href: "/services" },
  { name: "resume", href: "/resume" },
  { name: "work", href: "/work" },
  { name: "contact", href: "/contact" },
];

const Nav = () => {
  const path = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        const active = path === link.href;
        return (
          <Link
            href={link.href}
            key={link.href}
            className={`relative capitalize font-medium transition-colors hover:text-accent ${
              active ? "text-accent" : ""
            }`}
          >
            {active && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
