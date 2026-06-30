import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const posts = [
  {
    num: "01",
    category: "WordPress",
    date: "June 2025",
    title: "Building a Production-Ready WordPress Plugin from Scratch",
    excerpt:
      "A deep dive into modern WordPress plugin architecture — REST API endpoints, React-powered admin UIs, OOP PHP structure, and how to get your plugin reviewed and published on WordPress.org.",
    slug: "#",
  },
  {
    num: "02",
    category: "Next.js",
    date: "May 2025",
    title: "Next.js 15 App Router: What Changed and Why It Matters",
    excerpt:
      "Exploring the App Router paradigm shift — Server Components, nested layouts, streaming, and how the new caching model changes the way you think about data fetching in full-stack React apps.",
    slug: "#",
  },
  {
    num: "03",
    category: "Full-Stack",
    date: "April 2025",
    title: "JWT Authentication in a MERN Stack Application",
    excerpt:
      "Step-by-step walkthrough of implementing secure JWT-based auth in a MERN app — token generation, refresh token rotation, protected routes in React, and common pitfalls to avoid.",
    slug: "#",
  },
  {
    num: "04",
    category: "Backend",
    date: "March 2025",
    title: "Designing Clean REST APIs with Node.js & Express",
    excerpt:
      "Practical patterns for building maintainable APIs: route structuring, middleware layering, error handling, request validation, and versioning strategies for production Node.js services.",
    slug: "#",
  },
  {
    num: "05",
    category: "DevOps",
    date: "February 2025",
    title: "Zero-Downtime VPS Deployment with PM2 & GitHub Actions",
    excerpt:
      "How to set up a fully automated CI/CD pipeline that tests, builds, and deploys your Node.js app to a VPS using GitHub Actions and PM2 — with zero downtime on every push to main.",
    slug: "#",
  },
  {
    num: "06",
    category: "PHP",
    date: "January 2025",
    title: "OOP Design Patterns Every PHP Developer Should Know",
    excerpt:
      "Practical use of the Repository, Service, and Factory patterns in PHP — illustrated with real WordPress plugin examples where clean architecture dramatically simplified maintenance and testing.",
    slug: "#",
  },
];

const Blog = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto pt-[60px] xl:pt-[150px]">

        {/* Page header */}
        <div className="mb-12 text-center xl:text-left">
          <h2 className="text-5xl xl:text-6xl font-bold text-gradient mb-4">Blog.</h2>
          <p className="text-white/60 max-w-[540px] mx-auto xl:mx-0">
            Thoughts on software engineering, WordPress plugin development, full-stack architecture, and the tools I use every day.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-16">
          {posts.map((post) => (
            <div
              key={post.num}
              className="group flex flex-col gap-4 bg-[#1a1a2e] rounded-xl p-7 hover:ring-1 hover:ring-accent/40 transition-all duration-300"
            >
              {/* Meta row */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-accent border border-accent/30 rounded-full px-3 py-1 capitalize">
                  {post.category}
                </span>
                <span className="text-xs text-white/40">{post.date}</span>
              </div>

              {/* Number + Title */}
              <div>
                <span className="text-5xl font-extrabold text-outline text-transparent leading-none">
                  {post.num}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug mt-2 group-hover:text-gradient transition-all duration-300">
                  {post.title}
                </h3>
              </div>

              {/* Excerpt */}
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {post.excerpt}
              </p>

              {/* Divider + Read more */}
              <div>
                <div className="border-t border-white/10 mb-4" />
                <Link
                  href={post.slug}
                  className="flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all duration-300"
                >
                  Read More <BsArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
