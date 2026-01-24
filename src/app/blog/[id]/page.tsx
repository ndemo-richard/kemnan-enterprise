import { notFound } from 'next/navigation'
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "The Future of Development Communication in Kenya",
    excerpt: "Exploring how digital transformation is reshaping how organizations communicate development initiatives.",
    content: `Development communication in Kenya is undergoing a significant transformation, driven by digital technologies and changing audience behaviors. As we move further into the digital age, organizations must adapt their strategies to remain effective.

## The Digital Shift

The proliferation of smartphones and increased internet penetration across Kenya has created new opportunities for development communication. With over 60% of Kenyans now having access to the internet, digital platforms have become essential tools for reaching target audiences.

## Key Trends

1. **Mobile-First Communication**: With 95% of internet users accessing the web via mobile devices, communication strategies must prioritize mobile-friendly content.

2. **Video Content Dominance**: Video has become the most engaging format, with platforms like YouTube and TikTok offering new ways to tell development stories.

3. **Social Media Integration**: Social platforms are no longer just for marketing—they're crucial for stakeholder engagement and feedback collection.

4. **Data-Driven Approaches**: Analytics and data are helping organizations measure impact and optimize their communication strategies.

## Challenges and Opportunities

While digital transformation presents opportunities, it also brings challenges such as digital literacy gaps, misinformation, and the need for culturally appropriate content. Organizations must balance traditional communication methods with digital innovations to reach all segments of the population.

## The Role of Kemnan Enterprise

At Kemnan Enterprise, we're helping organizations navigate this transformation through:
- Digital strategy development
- Mobile-optimized content creation
- Social media engagement
- Impact measurement frameworks

The future of development communication in Kenya is bright, with technology enabling more targeted, measurable, and impactful communication strategies.`,
    author: "Nancy Onyancha",
    date: "March 15, 2024",
    category: "Industry Insights",
    readTime: "5 min read",
    tags: ["Digital Communication", "Development", "Kenya", "Technology", "Strategy"]
  }
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))
  
  if (!post) {
    notFound()
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:text-secondary mb-8"
        >
          <ArrowLeft className="mr-2" size={18} /> Back to Blog
        </Link>

        {/* Post Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span className="flex items-center">
                <Calendar size={14} className="mr-1" /> {post.date}
              </span>
              <span className="flex items-center">
                <User size={14} className="mr-1" /> {post.author}
              </span>
              <span className="flex items-center">
                <Clock size={14} className="mr-1" /> {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-xl mb-8"></div>
        </div>

        {/* Post Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <p className="lead text-xl text-gray-700 mb-8">{post.excerpt}</p>
          <div className="content" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
        </article>

        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-lg font-bold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share & CTA */}
        <div className="border-t border-b py-8 my-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Share this article</h3>
              <div className="flex gap-3">
                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                  <Share2 size={20} />
                </button>
                {/* Add social share buttons */}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Need similar expertise?</h3>
              <Link href="/contact" className="btn-primary">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-12">
          <h3 className="text-xl font-bold mb-4">About the Author</h3>
          <div className="flex items-start">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mr-4">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h4 className="text-lg font-bold">{post.author}</h4>
              <p className="text-gray-600">
                {post.author === "Nancy Onyancha" 
                  ? "Founder & Director of Kemnan Enterprise with 10+ years of experience in development communication. Passionate about using communication to drive social change."
                  : "Expert in development communication and strategic planning."}
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-bold mb-2">Best Practices for Effective Event Coordination</h4>
              <p className="text-gray-600 mb-4">Key strategies for successful development conferences and workshops.</p>
              <Link
                href="/blog/2"
                className="text-primary font-medium hover:text-secondary"
              >
                Read article →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-lg font-bold mb-2">Measuring Impact in Development Communication</h4>
              <p className="text-gray-600 mb-4">How to effectively measure and communicate the impact of your development projects.</p>
              <Link
                href="/blog/3"
                className="text-primary font-medium hover:text-secondary"
              >
                Read article →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}