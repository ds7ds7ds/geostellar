import { Link } from 'react-router-dom'
import { 
  ArrowRight,
  Award,
  Users,
  Target,
  Globe,
  Linkedin,
  Mail
} from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision",
      description: "Every measurement, every calculation, every detail matters. We bring O&G-grade accuracy to geothermal."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We don't cut corners. Our standards are high because your projects deserve nothing less."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Partnership",
      description: "We work alongside contractors and engineers, not above them. Your success is our success."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Sustainability",
      description: "Geothermal is the future. We're committed to accelerating clean energy adoption through technical excellence."
    }
  ]

  const team = [
    {
      name: "Alex Petrov",
      role: "Founder & Principal Engineer",
      background: "O&G / Geothermal",
      experience: "20+ years",
      bio: "Former senior drilling engineer with 15 years in offshore O&G before transitioning to geothermal. Expert in thermal conductivity testing and system optimization.",
      specialties: ["Thermal Analysis", "System Design", "QA/QC Protocols"]
    },
    {
      name: "Maria Santos",
      role: "Director of Engineering",
      background: "Mechanical Engineering",
      experience: "15+ years",
      bio: "Led engineering teams at major HVAC firms before joining GeoStellar. Specializes in heat pump integration and commercial-scale system design.",
      specialties: ["Heat Pump Systems", "Commercial Design", "Energy Modeling"]
    },
    {
      name: "James Chen",
      role: "Field Operations Manager",
      background: "O&G Field Services",
      experience: "18+ years",
      bio: "Extensive experience in wellsite supervision and quality control. Brings rigorous O&G field standards to every geothermal installation.",
      specialties: ["Installation Oversight", "Quality Control", "Safety Management"]
    },
    {
      name: "Sarah Mitchell",
      role: "Technical Services Lead",
      background: "Geoscience / Testing",
      experience: "12+ years",
      bio: "Geologist with expertise in subsurface thermal characterization. Leads all thermal conductivity testing and ground analysis operations.",
      specialties: ["TRT Testing", "Ground Analysis", "Performance Verification"]
    },
    {
      name: "David Kumar",
      role: "Senior Design Engineer",
      background: "Energy Systems",
      experience: "10+ years",
      bio: "Specialized in ground-source heat pump system design for residential and light commercial applications.",
      specialties: ["Loop Design", "Load Calculations", "CAD/BIM"]
    },
    {
      name: "Elena Volkov",
      role: "Commissioning Specialist",
      background: "Controls Engineering",
      experience: "8+ years",
      bio: "Expert in system startup, controls integration, and performance optimization. Ensures every system delivers from day one.",
      specialties: ["System Startup", "Controls", "Performance Tuning"]
    }
  ]

  const milestones = [
    { year: "2015", event: "GeoStellar founded with O&G industry veterans" },
    { year: "2017", event: "Expanded to full-service geothermal engineering" },
    { year: "2019", event: "Opened Northeast regional operations center" },
    { year: "2021", event: "500th project milestone achieved" },
    { year: "2023", event: "Launched advanced DTS monitoring services" },
    { year: "2024", event: "725+ projects completed across Northeast" }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">ABOUT US</h2>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              O&G Expertise Meets
              <br />
              <span className="gradient-text font-semibold">Sustainable Energy</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              GeoStellar was founded by oil & gas industry veterans who saw the opportunity 
              to bring world-class engineering standards to the rapidly growing geothermal sector.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">OUR STORY</h2>
              <h3 className="text-3xl font-light text-white mb-6">
                From Oilfields to Ground Loops
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  After decades in offshore drilling and petroleum engineering, our founders recognized 
                  a gap in the geothermal industry: the lack of rigorous technical standards that are 
                  commonplace in oil & gas.
                </p>
                <p>
                  They saw contractors struggling with inconsistent designs, unreliable testing, and 
                  quality control that varied wildly from project to project. The solution was clear — 
                  bring O&G discipline to geothermal.
                </p>
                <p>
                  Today, GeoStellar serves as the technical backbone for contractors and engineering 
                  firms across the Northeast, providing the expertise and quality assurance that 
                  elevates every project we touch.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-8">
              <h4 className="text-sm font-semibold text-sky-400 tracking-widest mb-6">MILESTONES</h4>
              <div className="space-y-6">
                {milestones.map((m, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-sky-500 font-mono text-sm w-16 flex-shrink-0">{m.year}</div>
                    <div className="text-slate-300 text-sm">{m.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">OUR VALUES</h2>
            <p className="text-3xl md:text-4xl font-light text-white">
              What Drives Us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-slate-950/50 border border-slate-800 rounded-lg"
              >
                <div className="text-sky-500 mb-4">{value.icon}</div>
                <h3 className="text-lg font-medium text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">THE TEAM</h2>
            <p className="text-3xl md:text-4xl font-light text-white mb-4">
              Industry Veterans. Technical Experts.
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our team combines decades of oil & gas experience with deep geothermal expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-sky-500/50 transition-all"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full mb-4 flex items-center justify-center text-slate-900 font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-lg font-medium text-white">{member.name}</h3>
                <p className="text-sky-400 text-sm mb-1">{member.role}</p>
                <p className="text-slate-500 text-xs mb-4">
                  {member.background} • {member.experience}
                </p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.specialties.map((spec, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4 border-t border-slate-800">
                  <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-sky-900/20 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Join the contractors and engineering firms who trust GeoStellar for their 
            geothermal engineering needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded transition-all hover:shadow-lg hover:shadow-sky-500/25"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
