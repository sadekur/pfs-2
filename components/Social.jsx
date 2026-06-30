import React from 'react'
import Link from 'next/link';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
    { icon: <FaGithub />,   path: "https://github.com/sadekur" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/shadkur.rahman.soikut/" },
    { icon: <FaXTwitter />, path: "https://x.com/rahman_shadekur" },
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={iconStyles}>
            {social.icon}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Social
