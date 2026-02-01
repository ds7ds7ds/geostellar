import { Link } from 'react-router-dom'
import { ArrowRight, Clock, User, Tag } from 'lucide-react'

const BlogPage = () => {
  const featuredPost = {
    title: "Why O&G Standards Matter in Geothermal Engineering",
    excerpt: "The geothermal industry is growing rapidly, but quality standards haven't kept pace. Here's why adopting oil & gas industry practices is critical for long-term system performance and reliability.",
    author: "Alex Petrov",
    date: "January 28, 2026",
    readTime: "8 min read",
    category: "Industry Insights",
    slug: "og-standards-geothermal"
  }

  const posts = [
    {
      title: "Thermal Conductivity Testing: Best Practices for Accurate Results",
      excerpt: "Accurate TRT results are the foundation of good system design. We break down the key factors that affect test accuracy and how to ensure reliable data.",
      author: "Sarah Mitchell",
      date: "January 21, 2026",
      readTime: "6 min read",
      category: "Technical",
      slug: "trt-best-practices"
    },
    {
      title: "The Hidden Costs of Poor Quality Control in Geothermal",
      excerpt: "Skipping QC steps might save time upfront, but the long-term costs can be substantial. A look at real-world examples and how to avoid common pitfalls.",
      author: "James Chen",
      date: "January 14, 2026",
      readTime: "5 min read",
      category: "Quality Assurance",
      slug: "qc-hidden-costs"
    },
    {
      title: "DTS Monitoring: The Future of Geothermal Performance Verification",
      excerpt: "Distributed Temperature Sensing offers unprecedented insight into system performance. Here's how we're using this technology to optimize installations.",
      author: "Sarah Mitchell",
      date: "January 7, 2026",
      readTime: "7 min read",
      category: "Technology",
      slug: "dts-monitoring-future"
    },
    {
      title: "Designing for the Northeast: Regional Considerations",
      excerpt: "Ground conditions, climate patterns, and regulatory requirements vary significantly across the Northeast. Key design considerations for optimal performance.",
      author: "David Kumar",
      date: "December 28, 2025",
      readTime: "6 min read",
      category: "Design",
      slug: "northeast-design-considerations"
    },
    {
      title: "Commissioning Done Right: A Step-by-Step Guide",
      excerpt: "System commissioning is where design meets reality. Our comprehensive approach ensures every system performs to specification from day one.",
      author: "Elena Volkov",
      date: "December 21, 2025",
      readTime: "8 min read",
      category: "Technical",
      slug: "commissioning-guide"
    },
    {
      title: "The Economics of Precision: Why Quality Engineering Pays Off",
      excerpt: "Higher upfront engineering costs often lead to lower total project costs. We analyze the ROI of investing in proper design and QC.",
      author: "Maria Santos",
      date: "December 14, 2025",
      readTime: "5 min read",
      category: "Business",
      slug: "economics-of-precision"
    }
  ]

  const categories = [
    "All",
    "Industry Insights",
    "Technical",
    "Quality Assurance",
    "Technology",
    "Design",
    "Business"
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">INSIGHTS</h2>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Technical Perspectives &
              <br />
              <span className="gradient-text font-semibold">Industry Knowledge</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Deep dives into geothermal engineering, quality standards, and the technical 
              expertise that sets exceptional projects apart.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm rounded transition-colors ${
                  index === 0 
                    ? 'bg-sky-500 text-slate-900' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-semibold text-sky-400 tracking-widest mb-6">FEATURED</div>
          <div className="group bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden hover:border-sky-500/50 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image placeholder */}
              <div className="bg-gradient-to-br from-sky-900/50 to-slate-900 h-64 lg:h-auto flex items-center justify-center">
                <div className="text-sky-500/30 text-6xl font-light">GS</div>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                  <span className="px-2 py-1 bg-sky-500/10 text-sky-400 rounded">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-light text-white mb-4 group-hover:text-sky-400 transition-colors">
                  {featuredPost.title}
                </h2>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <User className="h-4 w-4 mr-2" />
                    {featuredPost.author} • {featuredPost.date}
                  </div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-sky-400 hover:text-sky-300 text-sm"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-semibold text-sky-400 tracking-widest mb-8">RECENT POSTS</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group bg-slate-950/50 border border-slate-800 rounded-lg overflow-hidden hover:border-sky-500/50 transition-all"
              >
                {/* Image placeholder */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 h-40 flex items-center justify-center">
                  <Tag className="h-8 w-8 text-slate-700" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-slate-500 mb-3">
                    <span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-sky-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <span className="text-xs text-slate-500">{post.author}</span>
                    <span className="text-xs text-slate-600">{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 border border-slate-700 text-slate-400 hover:border-sky-500 hover:text-white rounded transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-400 mb-8">
            Get technical insights and industry updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-600 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
