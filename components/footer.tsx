import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-muted-foreground">
              WordPress plugin developer with a passion for creating efficient and user-friendly solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

