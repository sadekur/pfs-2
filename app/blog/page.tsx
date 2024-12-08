import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const blogPosts = [
  { id: 1, title: 'Getting Started with React', date: '2023-06-01' },
  { id: 2, title: 'CSS Grid Layout: A Comprehensive Guide', date: '2023-05-15' },
  { id: 3, title: 'JavaScript ES6 Features You Should Know', date: '2023-04-30' },
]

export default function Blog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Published on {post.date}</p>
              <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

