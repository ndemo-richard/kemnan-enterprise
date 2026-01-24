import { Calendar, User, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "The Future of Development Communication in Kenya",
    excerpt: "Exploring how digital transformation is reshaping how organizations communicate development initiatives.",
    author: "Nancy Onyancha",
    date: "March 15, 2024",
    category: "Industry Insights",
    readTime: "5 min read",
    image: "/images/blog/future-comms.jpg"
  },
  {
    id: 2,
    title: "Best Practices for Effective Event Coordination",
    excerpt: "Key strategies for successful development conferences and workshops.",
    author: "David Kimani",
    date: "March 10, 2024",
    category: "Best Practices",
    readTime: "4 min read",
    image: "/images/blog/event-coordination.jpg"
  },
  {
    id: 3,
    title: "Measuring Impact in Development Communication",
    excerpt: "How to effectively measure and communicate the impact of your development projects.",
    author: "Sarah Wambui",
    date: "February 28, 2024",
    category: "Case Studies",
    readTime: "6 min read",
    image: "/images/blog/measuring-impact.jpg"
  }
]

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Kemnan Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert perspectives on development communication, media relations, and impactful storytelling
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-primary to-secondary aspect-video md:aspect-auto"></div>
              <div className="md:w-1/2 p-8 md:p-12">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl font-bold mb-4">The Future of Development Communication in Kenya</h2>
                <p className="text-gray-600 mb-6">
                  How digital transformation, social media, and new technologies are changing the landscape of development communication in East Africa.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={14} className="mr-2" />
                    Nancy Onyancha
                    <span className="mx-2">•</span>
                    <Calendar size={14} className="mr-2" />
                    March 15, 2024
                  </div>
                  <Link
                    href="/blog/1"
                    className="text-primary font-medium hover:text-secondary inline-flex items-center"
                  >
                    Read Article <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all card-hover"
            >
              {/* Post Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20"></div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary">{post.category}</span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock size={12} className="mr-1" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={14} className="mr-2" />
                    {post.author}
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary text-sm font-medium hover:text-secondary inline-flex items-center"
                  >
                    Read <ArrowRight className="ml-1" size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on development communication
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}