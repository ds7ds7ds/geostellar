import { Link } from 'react-router-dom'
import { 
  ArrowRight,
  Compass,
  FileCheck,
  Thermometer,
  Activity,
  Ruler,
  Waves,
  Gauge,
  Settings,
  CheckCircle2
} from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Design & Engineering",
      description: "Complete geothermal system design with O&G-grade precision. From load calculations to loop field layout, we engineer systems that perform.",
      features: [
        "Thermal load analysis",
        "Ground loop design",
        "Heat pump sizing",
        "System integration planning",
        "CAD drawings & specifications"
      ]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Execution & Supervision",
      description: "On-site technical oversight ensuring every installation meets our rigorous standards. We don't just design — we deliver.",
      features: [
        "Installation supervision",
        "Quality checkpoints",
        "Real-time problem solving",
        "Contractor coordination",
        "Progress documentation"
      ]
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Permits & Licensing",
      description: "Navigate the regulatory landscape with confidence. We handle the paperwork so you can focus on execution.",
      features: [
        "Permit applications",
        "Code compliance review",
        "Utility coordination",
        "Environmental assessments",
        "Inspection coordination"
      ]
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Thermal Conductivity Testing",
      description: "Accurate ground thermal property analysis using industry-leading equipment and methodologies.",
      features: [
        "In-situ thermal response tests",
        "Soil thermal analysis",
        "Ground temperature profiling",
        "Conductivity mapping",
        "Test result interpretation"
      ]
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Quality Control",
      description: "Comprehensive QC protocols adapted from oil & gas industry best practices. Every detail matters.",
      features: [
        "Material verification",
        "Pressure testing",
        "Flow rate validation",
        "Thermal performance checks",
        "Documentation & reporting"
      ]
    },
    {
      icon: <Ruler className="h-8 w-8" />,
      title: "Directional & Inclination Measurements",
      description: "Precision bore path verification ensuring optimal loop placement and system performance.",
      features: [
        "Borehole deviation surveys",
        "Inclination logging",
        "Depth verification",
        "Path correction recommendations",
        "As-built documentation"
      ]
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Fiber Temperature Measurements",
      description: "Distributed temperature sensing (DTS) for detailed thermal profiling along the entire borehole length.",
      features: [
        "DTS installation & monitoring",
        "Temperature gradient analysis",
        "Thermal anomaly detection",
        "Long-term monitoring setup",
        "Performance trending"
      ]
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Flow & Pressure Tests",
      description: "Comprehensive hydraulic testing to verify system integrity and optimize circulation performance.",
      features: [
        "Flow rate measurement",
        "Pressure loss analysis",
        "Leak detection",
        "Pump curve verification",
        "System balancing"
      ]
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "System Commissioning",
      description: "Final verification and handover ensuring every system performs to specification from day one.",
      features: [
        "Startup procedures",
        "Performance verification",
        "Control system setup",
        "Operator training",
        "Warranty documentation"
      ]
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">SERVICES</h2>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Comprehensive Geothermal
              <br />
              <span className="gradient-text font-semibold">Engineering Services</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              From initial design through final commissioning, GeoStellar provides the technical 
              expertise contractors need to deliver exceptional geothermal installations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-sky-500/50 transition-all"
              >
                <div className="text-sky-500 mb-6 group-hover:text-cyan-400 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-500">
                      <span className="w-1 h-1 bg-sky-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-sky-400 tracking-widest mb-3">OUR PROCESS</h2>
            <p className="text-3xl md:text-4xl font-light text-white">
              How We Work With You
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consult", desc: "Understand your project scope and requirements" },
              { step: "02", title: "Design", desc: "Engineer optimal solutions with precision" },
              { step: "03", title: "Execute", desc: "Oversee installation with rigorous QC" },
              { step: "04", title: "Deliver", desc: "Commission and verify system performance" }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-light text-sky-500/20 mb-4">{phase.step}</div>
                <h3 className="text-lg font-medium text-white mb-2">{phase.title}</h3>
                <p className="text-sm text-slate-400">{phase.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-px bg-gradient-to-r from-sky-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Need Technical Support for Your Project?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Whether it's a single service or full project support, we're here to help you 
            deliver geothermal excellence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-900 font-medium rounded transition-all hover:shadow-lg hover:shadow-sky-500/25"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
