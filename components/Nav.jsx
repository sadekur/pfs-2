import React from 'react'

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

const Nav = () => {
  return (
    <nav className=' flex gap-8'>
        {links.map(link => (
            <a key={link.name} href={link.href}>{link.name}</a>
        ))}
    </nav>
  )
}

export default Nav
