import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - AWS Inspired */}
      <section className="relative bg-gradient-to-br from-aws-squid via-aws-slate to-aws-squid-light text-white overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* AWS Logo-inspired accent */}
            <div className="inline-flex items-center gap-2 bg-aws-orange/10 border border-aws-orange/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-aws-orange rounded-full animate-pulse"></div>
              <span className="text-aws-orange text-sm font-medium tracking-wide">University of Minnesota</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up bg-gradient-to-r from-white via-gray-100 to-aws-orange bg-clip-text text-transparent">
              AWS Cloud Club
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
              Building the next generation of cloud architects and innovators
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Link
                to="/register"
                className="group bg-aws-orange hover:bg-aws-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-aws-orange/50 hover:scale-105 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  Join the Club
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              <Link
                to="/events"
                className="group border-2 border-white/20 hover:border-aws-orange text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
              >
                Explore Events
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
              <div className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-aws-orange mb-2">500+</div>
                <div className="text-gray-400 text-sm">Members</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl md:text-4xl font-bold text-aws-orange mb-2">50+</div>
                <div className="text-gray-400 text-sm">Events</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl md:text-4xl font-bold text-aws-orange mb-2">100+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* What We Offer - Minimal Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aws-squid mb-4">
              What We Offer
            </h2>
            <div className="w-20 h-1 bg-aws-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-aws-orange transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-aws-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-aws-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-aws-squid mb-3">Learn Cloud</h3>
              <p className="text-gray-600 leading-relaxed">
                Master AWS services through hands-on workshops and earn industry-recognized certifications.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-aws-orange transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-aws-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-aws-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-aws-squid mb-3">Build Projects</h3>
              <p className="text-gray-600 leading-relaxed">
                Deploy real-world applications and contribute to production-grade cloud infrastructure.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-aws-orange transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-aws-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-aws-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-aws-squid mb-3">Grow Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with industry leaders, recruiters, and fellow cloud enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aws-squid mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get hands-on experience with cutting-edge cloud technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {['Lambda', 'EC2', 'S3', 'DynamoDB', 'CloudFormation', 'API Gateway', 'CloudWatch', 'IAM'].map((tech, index) => (
              <div
                key={tech}
                className="bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-aws-orange group cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-aws-squid font-semibold group-hover:text-aws-orange transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aws-squid mb-4">
              Meet the Team
            </h2>
            <div className="w-20 h-1 bg-aws-orange mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Led by passionate students dedicated to cloud computing excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Officer Card 1 - President */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-aws-orange transition-all duration-300 text-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-aws-orange/20 to-aws-squid/20 flex items-center justify-center overflow-hidden">
                  {/* Placeholder - replace with actual image */}
                  <svg className="w-16 h-16 text-aws-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* AWS Orange accent ring on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-aws-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h3 className="text-xl font-bold text-aws-squid mb-1">Your Name</h3>
              <p className="text-aws-orange font-semibold text-sm mb-2">President</p>
              <p className="text-gray-600 text-sm mb-4">Computer Science '25</p>

              <div className="flex justify-center gap-3">
                <a href="#" className="text-gray-400 hover:text-aws-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-aws-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Officer Card 2 - Vice President */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-aws-orange transition-all duration-300 text-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-aws-orange/20 to-aws-squid/20 flex items-center justify-center overflow-hidden">
                  <svg className="w-16 h-16 text-aws-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-aws-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h3 className="text-xl font-bold text-aws-squid mb-1">Officer Name</h3>
              <p className="text-aws-orange font-semibold text-sm mb-2">Vice President</p>
              <p className="text-gray-600 text-sm mb-4">Data Science '25</p>

              <div className="flex justify-center gap-3">
                <a href="#" className="text-gray-400 hover:text-aws-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-aws-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Officer Card 3 - Technical Lead */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-aws-orange transition-all duration-300 text-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-aws-orange/20 to-aws-squid/20 flex items-center justify-center overflow-hidden">
                  <svg className="w-16 h-16 text-aws-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-aws-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h3 className="text-xl font-bold text-aws-squid mb-1">Officer Name</h3>
              <p className="text-aws-orange font-semibold text-sm mb-2">Technical Lead</p>
              <p className="text-gray-600 text-sm mb-4">Software Engineering '26</p>

              <div className="flex justify-center gap-3">
                <a href="#" className="text-gray-400 hover:text-aws-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-aws-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Officer Card 4 - Events Coordinator */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-aws-orange transition-all duration-300 text-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-aws-orange/20 to-aws-squid/20 flex items-center justify-center overflow-hidden">
                  <svg className="w-16 h-16 text-aws-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-aws-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h3 className="text-xl font-bold text-aws-squid mb-1">Officer Name</h3>
              <p className="text-aws-orange font-semibold text-sm mb-2">Events Coordinator</p>
              <p className="text-gray-600 text-sm mb-4">Information Technology '26</p>

              <div className="flex justify-center gap-3">
                <a href="#" className="text-gray-400 hover:text-aws-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-aws-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* View Full Team Link */}
          <div className="text-center mt-12">
            <Link
              to="/members"
              className="inline-flex items-center gap-2 text-aws-orange hover:text-aws-orange-dark font-semibold transition-colors group"
            >
              View Full Team
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal & Modern */}
      <section className="py-20 bg-gradient-to-br from-aws-squid to-aws-slate text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join us and accelerate your cloud computing journey at the University of Minnesota
            </p>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-aws-orange hover:bg-aws-orange-dark text-white px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-aws-orange/50 hover:scale-105"
            >
              Get Started Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
