import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="space-y-4">
        <p>
          Hello! I'm [Your Name], a passionate web developer with a keen eye for design and a love for creating
          seamless user experiences. With [X] years of experience in the field, I've had the opportunity to work
          on a wide range of projects, from small business websites to large-scale web applications.
        </p>
        <p>
          My expertise includes:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Front-end development (HTML, CSS, JavaScript, React)</li>
          <li>Back-end development (Node.js, Express, MongoDB)</li>
          <li>Responsive web design</li>
          <li>UI/UX design principles</li>
          <li>Performance optimization</li>
        </ul>
        <p>
          When I'm not coding, you can find me [Your Hobbies/Interests]. I believe in continuous learning and
          always strive to stay up-to-date with the latest web technologies and best practices.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

