import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">WordPress Plugin Developer</h1>
          <p className="text-xl text-muted-foreground">
            Crafting powerful and user-friendly WordPress plugins to enhance your website's functionality.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
        <div className="flex-1">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Professional headshot"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['WordPress', 'PHP', 'JavaScript', 'React', 'MySQL', 'REST API', 'Git', 'WooCommerce'].map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'WP SEO Booster', description: 'Advanced SEO plugin for WordPress' },
            { title: 'WooCommerce Customizer', description: 'Extend WooCommerce functionality' },
            { title: 'WP Form Builder', description: 'Drag-and-drop form creation plugin' },
          ].map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href={`/projects/${index + 1}`}>View Project</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">My Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Custom Plugin Development', description: 'Tailor-made WordPress plugins for your specific needs' },
            { title: 'Plugin Optimization', description: 'Improve the performance and security of existing plugins' },
            { title: 'WordPress Integration', description: 'Seamlessly integrate third-party services with WordPress' },
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Preview Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Latest from My Blog</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Best Practices for WordPress Plugin Development', date: '2023-06-01' },
            { title: 'How to Optimize Your WordPress Plugin for Performance', date: '2023-05-15' },
            { title: 'Integrating React with WordPress: A Step-by-Step Guide', date: '2023-04-30' },
          ].map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/blog/${index + 1}`} className="text-primary hover:underline inline-flex items-center">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

