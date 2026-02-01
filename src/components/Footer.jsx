import { Link } from 'react-router-dom'
import { Hexagon, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Hexagon className="h-8 w-8 text-sky-500" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-sky-500">GS</span>
                </div>
              </div>
              <span className="text-xl font-light tracking-wider">
                GEO<span className="font-semibold text-sky-500">STELLAR</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Precision geothermal engineering with Oil & Gas industry standards. 
              Delivering technical excellence to contractors and engineering firms across the Northeast.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">NAVIGATION</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">About & Team</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 text-sky-500" />
                <span>Northeast USA</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4 text-sky-500" />
                <a href="mailto:info@geostellar.com" className="hover:text-sky-400 transition-colors">
                  info@geostellar.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <Phone className="h-4 w-4 text-sky-500" />
                <a href="tel:+1234567890" className="hover:text-sky-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <Linkedin className="h-4 w-4 text-sky-500" />
                <a href="#" className="hover:text-sky-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} GeoStellar. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2 md:mt-0">
            Precision Engineering. Sustainable Future.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
