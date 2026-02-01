import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react'

const BlogPostPage = () => {
  const { slug } = useParams()

  // Blog post data - in a real app this would come from a CMS or API
  const posts = {
    'og-standards-geothermal': {
      title: "Why O&G Standards Matter in Geothermal Engineering",
      excerpt: "The geothermal industry is growing rapidly, but quality standards haven't kept pace. Here's why adopting oil & gas industry practices is critical for long-term system performance and reliability.",
      author: "GeoStellar Team",
      date: "January 28, 2026",
      readTime: "8 min read",
      category: "Industry Insights",
      content: `
        <p>The geothermal industry is experiencing unprecedented growth. As more homeowners, businesses, and institutions seek sustainable heating and cooling solutions, the demand for ground-source heat pump systems has surged.</p>
        
        <p>But here's the challenge: while the market is expanding rapidly, <strong>quality standards haven't kept pace</strong>.</p>
        
        <h2>The O&G Difference</h2>
        
        <p>In oil & gas operations, where a single hour of downtime can cost $10,000 to $100,000, precision isn't optional—it's survival. Every measurement is verified. Every assumption is tested. Every system is engineered to perform under pressure, literally and figuratively.</p>
        
        <p>This culture of rigorous quality control has been refined over decades. It's what allows O&G operations to:</p>
        
        <ul>
          <li>Achieve consistent performance in challenging conditions</li>
          <li>Minimize costly rework and system failures</li>
          <li>Deliver predictable, verifiable results</li>
          <li>Maintain detailed documentation for every project</li>
        </ul>
        
        <h2>Why Geothermal Needs This</h2>
        
        <p>Geothermal systems are long-term investments—typically 20-30 year horizons. When you're designing a system that needs to perform reliably for decades, "good enough" isn't good enough.</p>
        
        <p>Common issues we see in the industry:</p>
        
        <ul>
          <li>Rule-of-thumb designs instead of engineered solutions</li>
          <li>Inconsistent thermal conductivity testing</li>
          <li>Lack of verified drilling geometry</li>
          <li>Minimal quality control documentation</li>
          <li>Performance assumptions instead of measurements</li>
        </ul>
        
        <h2>The GeoStellar Approach</h2>
        
        <p>We bring O&G-grade precision to every geothermal project—not to be expensive, but to make clean energy accessible through optimized, reliable systems.</p>
        
        <p>When every BTU matters, when every square foot of land has value, and when systems need to perform for decades—<strong>engineering discipline isn't a luxury. It's the foundation.</strong></p>
      `
    },
    'trt-best-practices': {
      title: "Thermal Conductivity Testing: Best Practices for Accurate Results",
      excerpt: "Accurate TRT results are the foundation of good system design. We break down the key factors that affect test accuracy and how to ensure reliable data.",
      author: "GeoStellar Team",
      date: "January 21, 2026",
      readTime: "6 min read",
      category: "Technical",
      content: `
        <p>Thermal Response Testing (TRT) is the foundation of accurate geothermal system design. Get it wrong, and every calculation that follows is built on faulty assumptions.</p>
        
        <h2>Why TRT Matters</h2>
        
        <p>Ground thermal conductivity varies significantly—even within the same property. Assuming values from tables or nearby projects can lead to:</p>
        
        <ul>
          <li>Undersized systems that can't meet load</li>
          <li>Oversized systems that waste capital</li>
          <li>Long-term performance degradation</li>
          <li>Unexpected operating costs</li>
        </ul>
        
        <h2>Key Factors for Accurate Testing</h2>
        
        <p><strong>Test Duration:</strong> Minimum 48 hours, preferably 72+ hours for accurate results.</p>
        
        <p><strong>Stable Power Input:</strong> Variations in heat input compromise data quality.</p>
        
        <p><strong>Ground Temperature Baseline:</strong> Must be established before testing begins.</p>
        
        <p><strong>Proper Equipment Calibration:</strong> Sensors and data loggers must be verified.</p>
        
        <h2>The GeoStellar Standard</h2>
        
        <p>We follow O&G-grade testing protocols because accurate data is the foundation of everything that follows. Every test is documented, every result is verified.</p>
      `
    },
    'qc-hidden-costs': {
      title: "The Hidden Costs of Poor Quality Control in Geothermal",
      excerpt: "Skipping QC steps might save time upfront, but the long-term costs can be substantial. A look at real-world examples and how to avoid common pitfalls.",
      author: "GeoStellar Team",
      date: "January 14, 2026",
      readTime: "5 min read",
      category: "Quality Assurance",
      content: `
        <p>Quality control isn't glamorous. It doesn't show up in marketing photos. But it's often the difference between a system that performs for 30 years and one that becomes a liability.</p>
        
        <h2>The True Cost of Cutting Corners</h2>
        
        <p>We've seen projects where skipped QC steps led to:</p>
        
        <ul>
          <li>Loop field failures requiring complete replacement</li>
          <li>Performance 30-40% below design specifications</li>
          <li>Warranty claims that could have been prevented</li>
          <li>Callbacks and rework eating into margins</li>
        </ul>
        
        <h2>QC That Matters</h2>
        
        <p>Not all quality control is equal. Focus on the steps that have the biggest impact:</p>
        
        <ul>
          <li>Pressure testing before backfill</li>
          <li>Flow rate verification at commissioning</li>
          <li>Drilling geometry documentation</li>
          <li>Grout placement verification</li>
        </ul>
        
        <p>The time invested in proper QC pays dividends over the system's lifetime.</p>
      `
    },
    'dts-monitoring-future': {
      title: "DTS Monitoring: The Future of Geothermal Performance Verification",
      excerpt: "Distributed Temperature Sensing offers unprecedented insight into system performance. Here's how we're using this technology to optimize installations.",
      author: "GeoStellar Team",
      date: "January 7, 2026",
      readTime: "7 min read",
      category: "Technology",
      content: `
        <p>Distributed Temperature Sensing (DTS) represents a step change in how we understand and verify geothermal system performance.</p>
        
        <h2>What is DTS?</h2>
        
        <p>DTS uses fiber optic cables to measure temperature continuously along the entire length of a borehole—not just at discrete points, but everywhere.</p>
        
        <h2>Why It Matters</h2>
        
        <p>Traditional monitoring gives you snapshots. DTS gives you the complete picture:</p>
        
        <ul>
          <li>Identify thermal anomalies along the bore path</li>
          <li>Detect performance issues before they become problems</li>
          <li>Verify actual vs. designed thermal exchange</li>
          <li>Optimize system operation based on real data</li>
        </ul>
        
        <h2>The Future of Verification</h2>
        
        <p>As geothermal moves toward Energy-as-a-Service models, verified performance becomes critical. DTS provides the data foundation for performance guarantees.</p>
      `
    },
    'northeast-design-considerations': {
      title: "Designing for the Northeast: Regional Considerations",
      excerpt: "Ground conditions, climate patterns, and regulatory requirements vary significantly across the Northeast. Key design considerations for optimal performance.",
      author: "GeoStellar Team",
      date: "December 28, 2025",
      readTime: "6 min read",
      category: "Design",
      content: `
        <p>Geothermal design isn't one-size-fits-all. Regional conditions significantly impact system performance and design requirements.</p>
        
        <h2>Northeast Ground Conditions</h2>
        
        <p>The Northeast presents unique challenges:</p>
        
        <ul>
          <li>Variable geology—granite, clay, sand, mixed conditions</li>
          <li>Groundwater presence and movement</li>
          <li>Heating-dominant loads in most applications</li>
          <li>Freeze protection requirements</li>
        </ul>
        
        <h2>Regulatory Landscape</h2>
        
        <p>Massachusetts, Connecticut, and other Northeast states have specific requirements for geothermal installations. Understanding these upfront prevents costly surprises.</p>
        
        <h2>Design for Performance</h2>
        
        <p>Successful Northeast projects account for regional factors from day one. That means proper site characterization, appropriate safety factors, and designs that perform in real conditions—not just on paper.</p>
      `
    },
    'commissioning-guide': {
      title: "Commissioning Done Right: A Step-by-Step Guide",
      excerpt: "System commissioning is where design meets reality. Our comprehensive approach ensures every system performs to specification from day one.",
      author: "GeoStellar Team",
      date: "December 21, 2025",
      readTime: "8 min read",
      category: "Technical",
      content: `
        <p>Commissioning is the final verification that everything works as designed. Skip it or rush it, and you're gambling with system performance.</p>
        
        <h2>The Commissioning Process</h2>
        
        <p><strong>1. Pre-Startup Verification</strong></p>
        <ul>
          <li>All pressure tests complete and documented</li>
          <li>Electrical connections verified</li>
          <li>Controls properly configured</li>
        </ul>
        
        <p><strong>2. Initial Startup</strong></p>
        <ul>
          <li>Controlled system energization</li>
          <li>Flow rate measurement and balancing</li>
          <li>Heat pump operation verification</li>
        </ul>
        
        <p><strong>3. Performance Verification</strong></p>
        <ul>
          <li>Entering/leaving water temperatures</li>
          <li>Actual vs. design heat transfer</li>
          <li>System efficiency measurements</li>
        </ul>
        
        <p><strong>4. Documentation & Handover</strong></p>
        <ul>
          <li>Complete as-built records</li>
          <li>Operator training</li>
          <li>Warranty documentation</li>
        </ul>
      `
    },
    'economics-of-precision': {
      title: "The Economics of Precision: Why Quality Engineering Pays Off",
      excerpt: "Higher upfront engineering costs often lead to lower total project costs. We analyze the ROI of investing in proper design and QC.",
      author: "GeoStellar Team",
      date: "December 14, 2025",
      readTime: "5 min read",
      category: "Business",
      content: `
        <p>There's a persistent myth that rigorous engineering is expensive. The reality? Poor engineering is expensive. Precision pays for itself.</p>
        
        <h2>The Math</h2>
        
        <p>Consider a typical commercial geothermal project:</p>
        
        <ul>
          <li>10% oversizing due to conservative assumptions = 10% wasted capital</li>
          <li>Performance 15% below design = higher operating costs for 25 years</li>
          <li>One major warranty claim = project profit margin gone</li>
        </ul>
        
        <h2>Where Precision Saves Money</h2>
        
        <p><strong>Right-sized systems:</strong> Accurate design means you don't overbuild.</p>
        
        <p><strong>Predictable performance:</strong> Verified systems perform as expected.</p>
        
        <p><strong>Reduced risk:</strong> Proper QC prevents costly failures.</p>
        
        <p><strong>Easier financing:</strong> Documented quality supports better terms.</p>
        
        <h2>The Bottom Line</h2>
        
        <p>Quality engineering isn't a cost center—it's a profit center. The projects that perform best financially are the ones engineered with precision from day one.</p>
      `
    }
  }

  const post = posts[slug]

  if (!post) {
    return (
      <div className="pt-16 min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Post Not Found</h1>
          <p className="text-slate-400 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center text-sky-400 hover:text-sky-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-sky-400 hover:text-sky-300 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Link>
          
          <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
            <span className="px-2 py-1 bg-sky-500/10 text-sky-400 rounded">
              {post.category}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-light text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-slate-400">
            <span className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-light prose-headings:text-white
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-slate-400 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-white prose-strong:font-medium
              prose-ul:text-slate-400 prose-ul:my-6
              prose-li:my-2
              prose-a:text-sky-400 prose-a:no-underline hover:prose-a:text-sky-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-slate-400 mb-8">
            Get in touch to discuss how GeoStellar can support your next project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BlogPostPage
