import React, { useState } from 'react';
import { 
  Building2, Users, FileText, ChevronRight, 
  Menu, X, Shield, Globe, Award, Briefcase,
  TrendingUp, ArrowUpRight, BarChart3, Quote, Lock
} from 'lucide-react';

export default function CorporateBoardPortal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const boardMembers = [
    {
      name: "Abhishek Tiwari",
      role: "Chairman & Managing Director",
      bio: "Abhishek Tiwari is an entrepreneur, engineer, and business leader serving as the Founder, Chairman & Managing Director of Vigor Industries Limited. He leads the group's strategic vision and corporate development, with interests spanning technology, artificial intelligence, infrastructure, energy, natural resources, manufacturing, and logistics.",
      insight: "“Long-term enterprise value is anchored in uncompromising institutional resilience, regulatory foresight, and sustainable capital allocation that transcends quarterly horizons.”",
      image: "./Abhishek.png"
    },
    /*{
      name: "Sanjeevani Mishra",
      role: "Vice Chairwoman",
      bio: "Pioneered large-scale digital transformation frameworks across global markets. Leads Vigor's global strategic blueprint and technological roadmap.",
      insight: "“The convergence of secure edge architectures and mission-critical enterprise systems defines the frontier of modern industrial autonomy.”",
      image: "sanjeevani.png"
    },*/
    {
      name: "Yogin Chetwani",
      role: "Chief Technology Officer",
      bio: "B.Tech in Data Science from CSVTU Bhilai, specializing in Exploratory Data Analysis (EDA), Business Intelligence and high-performance computing clusters.",
      insight: "“True technological sovereignty demands structural mastery over both silicon-level execution and air-gapped data integrity.”",
      image: "yogin.png"
    }
    
  ];

  const financialMetrics = [
    { label: "Revenue (FY 2025-26)", value: "₹10,00,000", change: "+14.2% YoY" },
    { label: "Operating Margin", value: "26.4%", change: "+110 bps" },
    { label: "R&D Investment", value: "45% of Revenue", change: "Accelerated Focus" }
  ];

  const governanceDocuments = [
    { title: "Corporate Governance Report 2026", type: "PDF", size: "2.4 MB", date: "May 2026" },
    { title: "Board Committee Charters & Terms of Reference", type: "PDF", size: "1.1 MB", date: "April 2026" },
    { title: "Code of Conduct for Board Members and Senior Management", type: "PDF", size: "850 KB", date: "January 2026" },
    { title: "Whistleblower & Vigil Mechanism Policy", type: "PDF", size: "620 KB", date: "March 2026" }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#002D62] selection:text-white">
      {/* Top Utility Bar - Enterprise Style */}
      <div className="bg-[#002D62] text-white text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> Global Portal</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline text-blue-200">BSE: 543210 | NSE: VIGOR</span>
          </div>
          <div className="flex items-center space-x-6 font-medium">
            <a href="#investors" className="hover:underline">Investors</a>
            <a href="#careers" className="hover:underline">Careers</a>
            <a href="#contact" className="hover:underline">Contact Board Secretariat</a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
     <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <img src="/logo.png" alt="Vigor Technologies" className="w-10 h-10 object-contain" />
      <div>
        <span className="text-xl font-bold tracking-tight text-[#002D62]">VIGOR</span>
        <span className="text-xs block text-gray-500 uppercase tracking-widest font-semibold">Technologies Limited</span>
      </div>
    </div>

    <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-gray-700">
      <a href="#overview" className="hover:text-[#002D62] transition-colors py-2 border-b-2 border-transparent hover:border-[#002D62]">Overview</a>
      <a href="#leadership" className="hover:text-[#002D62] transition-colors py-2 border-b-2 border-transparent hover:border-[#002D62]">Board of Directors</a>
      <a href="#insights" className="hover:text-[#002D62] transition-colors py-2 border-b-2 border-transparent hover:border-[#002D62]">Strategic Insights</a>
      <a href="#governance" className="hover:text-[#002D62] transition-colors py-2 border-b-2 border-transparent hover:border-[#002D62]">Governance & Ethics</a>
      <a href="#filings" className="hover:text-[#002D62] transition-colors py-2 border-b-2 border-transparent hover:border-[#002D62]">Financial Filings</a>
    </nav>

    

   
  </div>

  {/* Mobile Nav Drawer */}
  {mobileMenuOpen && (
    <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 font-medium text-sm">
      <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700">Overview</a>
      <a href="#leadership" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700">Board of Directors</a>
      <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700">Strategic Insights</a>
      <a href="#governance" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700">Governance & Ethics</a>
      <a href="#filings" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700">Financial Filings</a>
      
    </div>
  )}
</header>

      {/* Hero Section */}
      <section className="relative bg-[#0A192F] text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/60 border border-blue-700/50 text-blue-200 text-xs font-semibold tracking-wider uppercase">
              <Shield className="w-3.5 h-3.5 text-blue-400" /> Institutional Governance & Leadership
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
              Steering Enterprise <span className="font-bold text-white">Excellence</span> with Foresight & Rigor.
            </h1>
            <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl">
              Vigor Technologies Limited is guided by an independent, visionary Board committed to sustainable stakeholder value, rigorous compliance, and transformative technological leadership.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#leadership" className="bg-white text-[#0A192F] hover:bg-gray-100 font-semibold px-6 py-3 transition-colors text-sm flex items-center gap-2">
                Meet the Board <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#insights" className="border border-white/30 hover:border-white text-white font-semibold px-6 py-3 transition-colors text-sm">
                Explore Board Insights
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
            <h3 className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-6">Key Performance Indicators</h3>
            <div className="grid grid-cols-2 gap-6">
              {financialMetrics.map((metric, idx) => (
                <div key={idx} className="border-l-2 border-blue-400 pl-4">
                  <div className="text-2xl lg:text-3xl font-bold tracking-tight text-white">{metric.value}</div>
                  <div className="text-xs text-gray-400 mt-1 font-medium">{metric.label}</div>
                  <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">{metric.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Insights & Perspective Section */}
      <section id="insights" className="py-24 px-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-[#002D62] font-bold">Strategic Vision</span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#111] mt-2">Board Member Perspectives</h2>
            <p className="text-gray-600 mt-4 text-base">
              Direct insights and strategic commentary from our directors on corporate governance, technological shifts, and long-term value creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-16 h-16 object-cover rounded-none"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-[#111]">{member.name}</h4>
                      <p className="text-xs text-[#002D62] font-semibold uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic bg-blue-50/50 p-4 border-l-2 border-[#002D62]">
                    {member.insight}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                  <span>Vigor Boardroom Series</span>
                  <span className="font-semibold text-[#002D62]">Read Full Profile &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Board Directory Section */}
      <section id="leadership" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#002D62] font-bold">Leadership Structure</span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#111] mt-2">Board of Directors</h2>
            </div>
            <p className="text-gray-600 max-w-md text-sm mt-4 md:mt-0">
              Comprising industry leaders, financial experts, and independent governance specialists dedicated to steering Vigor Technologies Limited with integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, idx) => (
              <div key={idx} className="group border border-gray-200 bg-white overflow-hidden">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-[#111]">{member.name}</h4>
                  <p className="text-xs font-semibold text-[#002D62] uppercase tracking-wider mt-1">{member.role}</p>
                  <p className="text-xs text-gray-600 mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Committees */}
      <section id="governance" className="py-24 px-6 bg-[#002D62] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-blue-300 font-bold">Accountability & Ethics</span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">Robust Committee Governance</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              To ensure specialized focus and rigorous adherence to statutory compliance, the Board operates through dedicated committees structured under international corporate standards.
            </p>
            <ul className="space-y-3 text-sm font-medium text-blue-200">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Audit & Risk Management Committee</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Nomination and Remuneration Committee</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Stakeholders Relationship Committee</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Corporate Social Responsibility & Ethics Committee</li>
            </ul>
          </div>

          <div className="lg:col-span-7 bg-white text-[#111] p-8 lg:p-12">
            <h3 className="text-xl font-bold mb-6 text-[#002D62]">Governance Framework & Disclosures</h3>
            <div className="space-y-4">
              {governanceDocuments.map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 hover:border-[#002D62] transition-colors">
                  <div className="flex items-center gap-4">
                    <FileText className="w-5 h-5 text-[#002D62] shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{doc.title}</h4>
                      <p className="text-xs text-gray-500">{doc.date} • {doc.type} • {doc.size}</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold uppercase tracking-wider text-[#002D62] hover:underline flex items-center gap-1">
                    Download <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
  <img src="/logo.png" alt="Vigor Technologies" className="w-10 h-10 object-contain" />
  
</div>
              <span className="text-lg font-bold tracking-tight">VIGOR TECHNOLOGIES</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Empowering global enterprise infrastructure through secure edge architectures, automated artificial intelligence, and uncompromising governance.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Board & Governance</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#leadership" className="hover:text-white">Board of Directors</a></li>
              <li><a href="#insights" className="hover:text-white">Director Insights</a></li>
              <li><a href="#governance" className="hover:text-white">Committee Charters</a></li>
              <li><a href="https://board-repo.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1"><Lock className="w-3 h-3" /> Board Portal Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Investor Relations</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#" className="hover:text-white">Financial Results</a></li>
              <li><a href="#" className="hover:text-white">Annual Reports</a></li>
              <li><a href="#" className="hover:text-white">Shareholder Information</a></li>
              <li><a href="#" className="hover:text-white">Stock Exchange Filings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Secretariat Office</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Vigor Technologies Limited<br />
              Corporate Secretariat & Investor Services<br />
              Bhilai Industrial Corridor, CG, India<br />
              Email: secretariat@vigortechnologies.in
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Vigor Technologies Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Security & Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
