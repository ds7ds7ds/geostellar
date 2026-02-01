import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Shield, 
  Target, 
  Gauge, 
  Layers,
  Building2,
  Home,
  Factory,
  CheckCircle2,
  DollarSign,
  TrendingDown,
  Zap
} from 'lucide-react'

const HomePage = () => {
  const capabilities = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Engineering",
      description: "O&G-grade accuracy in every thermal calculation and system design"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing protocols inherited from oil & gas industry standards"
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Data-driven efficiency that makes clean energy accessible to everyone"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Full-Stack Expertise",
      description: "From subsurface analysis to system commissioning — complete coverage"
    }
  ]

  const sectors = [
    { icon: <Home className="h-8 w-8" />, label: "Residential", count: "500+" },
    { icon: <Building2 className="h-8 w-8" />, label: "Commercial", count: "150+" },
    { icon: <Factory className="h-8 w-8" />, label: "Industrial", count: "75+" }
  ]

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "725+", label: "Projects Completed" },
    { value: "99.2%", label: "System Efficiency" },
    { value: "0", label: "Compromise on Quality" }
  ]

  const comparison = [
    { 
      icon: <DollarSign className="h-8 w-8" />,
      og: "$10K - $100K",
      ogLabel: "per hour in O&G",
      geo: "Accessible",
      geoLabel: "for everyone"
    },
    { 
      icon: <Target className="h-8 w-8" />,
      og: "Critical",
      ogLabel: "precision required",
      geo: "Same Standard",
      geoLabel: "no compromise"
    },
    { 
      icon: <TrendingDown className="h-8 w-8" />,
      og: "High Stakes",
      ogLabel: "costly mistakes",
      geo: "Optimized",
      geoLabel: "efficient delivery"
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center grid-pattern overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-900/20" />
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-sky-400/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-cyan-400/5 rounded-full blur-2xl animate-float-slow" />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-sky-500/30 rotate-45 animate-float" />
        <div className="absolute top-40 right-40 w-2 h-2 bg-cyan-400/40 rounded-full animate-float-slow" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-sky-400/20 rotate-45 animate-float animation-delay-200" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm mb-6 animate-slide-up">
              <span className="w-2 h-2 bg-sky-400 rounded-full mr-2 animate-pulse" />
              Geothermal Engineering Excellence
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6 animate-slide-up animation-delay-200">
              O&G Precision.
              <br />
              <span className="gradient-text font-semibold">Accessible to All.</span>
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed mb-4 max-w-3xl animate-slide-up animation-delay-400">
              In oil & gas, one hour costs <span className="text-sky-400 font-semibold">$10,000 to $100,000</span>. 
              That's why precision, quality, and efficiency aren't optional — they're survival.
            </p>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl animate-slide-up animation-delay-600">
              We bring that same uncompromising standard to geothermal — not to be expensive, 
              but to make <span className="text-cyan-400 font-semibold">clean energy accessible for everyone</span>. 
              When every watt matters, optimization isn't a luxury. It's the mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-800">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded transition-all hover:shadow-lg hover:shadow-sky-500/25"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 hover:border-sky-500 text-white rounded transition-colors"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 animate-fade-in animation-delay-800">
          <span className="text-xs tracking-widest mb-2">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* The Why Section - NEW */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">THE PHILOSOPHY</h2>
            <p className="text-3xl md:text-4xl font-light text-white mb-4">
              Why O&G Standards Matter for Geothermal
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The same engineering discipline that handles million-dollar drilling operations 
              is exactly what's needed to make geothermal work for every home and building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparison.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-sky-500/50 transition-all hover-lift"
              >
                <div className="text-sky-500 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                
                {/* O&G side */}
                <div className="mb-6 pb-6 border-b border-slate-700">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Oil & Gas</div>
                  <div className="text-2xl font-light text-white">{item.og}</div>
                  <div className="text-sm text-slate-400">{item.ogLabel}</div>
                </div>
                
                {/* Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 -mt-3">
                  <Zap className="h-5 w-5 text-sky-500" />
                </div>
                
                {/* Geo side */}
                <div className="pt-2">
                  <div className="text-xs text-cyan-400 uppercase tracking-wider mb-1">Geothermal</div>
                  <div className="text-2xl font-light gradient-text">{item.geo}</div>
                  <div className="text-sm text-slate-400">{item.geoLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">CAPABILITIES</h2>
            <p className="text-3xl md:text-4xl font-light text-white">
              Engineering Excellence at Every Level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-950/50 border border-slate-800 rounded-lg hover:border-sky-500/50 transition-all hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-sky-500 mb-4 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-950 border-y border-slate-800 animated-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-light text-sky-400 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">SECTORS</h2>
              <p className="text-3xl md:text-4xl font-light text-white mb-6">
                Serving Contractors Across All Markets
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                From residential installations to large-scale commercial and industrial projects, 
                GeoStellar provides the technical backbone that contractors and engineering firms 
                need to deliver exceptional geothermal systems.
              </p>
              <ul className="space-y-3">
                {[
                  "Thermal conductivity testing & analysis",
                  "System design & engineering",
                  "Quality assurance & commissioning",
                  "Ongoing performance monitoring"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300 group">
                    <CheckCircle2 className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {sectors.map((sector, index) => (
                <div
                  key={index}
                  className="p-8 bg-slate-950/50 border border-slate-800 rounded-lg text-center hover:border-sky-500/50 transition-all hover-lift"
                >
                  <div className="text-sky-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">{sector.icon}</div>
                  <div className="text-2xl font-light text-white mb-1">{sector.count}</div>
                  <div className="text-sm text-slate-500">{sector.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-sky-900/20 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Ready to Elevate Your Geothermal Projects?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Partner with GeoStellar for engineering excellence that sets your projects apart. 
            Let's discuss how our O&G expertise can benefit your next installation.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded transition-all hover:shadow-lg hover:shadow-sky-500/25"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
