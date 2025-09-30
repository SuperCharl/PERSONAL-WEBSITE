import Link from 'next/link';
import Image from 'next/image';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">
              <Link href="/" className="hover:text-gray-300 transition-colors">CHARLIE SCOTT</Link>
            </h1>
            <nav>
              <ul className="flex space-x-8 text-sm">
                <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
                <li><a href="/#about" className="hover:text-gray-300 transition-colors">About</a></li>
                <li><Link href="/work" className="text-gray-300 font-medium">Work</Link></li>
                <li><a href="/#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 mt-8 flex gap-8">
        {/* Main Content */}
        <main className="flex-1">
          <article className="bg-white">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-6">Professional Experience</h2>
              <p className="text-lg text-gray-600 mb-8">
                A journey through technology entrepreneurship, venture capital, and building the future of innovation.
              </p>
            </div>

            {/* Current Role */}
            <section className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Managing Partner</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-3">TechVenture Capital</h4>
                  <p className="text-gray-600 mb-4">2018 - Present</p>
                  <p className="text-gray-700 mb-4">
                    Leading a $100M early-stage venture capital fund focused on AI, blockchain, and sustainable technology.
                    Successfully invested in 150+ portfolio companies with multiple unicorn exits.
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Generated 3.2x fund returns over 6 years</li>
                      <li>Led investments in 5 companies that achieved unicorn status</li>
                      <li>Built portfolio spanning 15+ countries</li>
                      <li>Established diversity-focused investment initiatives</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-48 flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1560472355-109703aa3edc?w=300&h=200&fit=crop"
                    alt="TechVenture Capital Office"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            </section>

            {/* Previous Experiences */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold mb-8">Career Timeline</h3>

              <div className="space-y-8">
                {/* Microsoft */}
                <div className="flex border-l-2 border-gray-200 pl-6 pb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full -ml-8 border-4 border-white"></div>
                      <h4 className="text-xl font-semibold">Senior Product Manager</h4>
                      <span className="text-gray-500">2015 - 2018</span>
                    </div>
                    <h5 className="text-lg text-blue-600 font-medium mb-2">Microsoft Azure</h5>
                    <p className="text-gray-700 mb-3">
                      Led product strategy for Azure&rsquo;s enterprise data services, managing a team of 12 engineers and designers.
                      Launched 3 major features that generated $50M+ in revenue.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Cloud Computing</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Product Strategy</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Team Leadership</span>
                    </div>
                  </div>
                </div>

                {/* CloudSync - Founder */}
                <div className="flex border-l-2 border-gray-200 pl-6 pb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full -ml-8 border-4 border-white"></div>
                      <h4 className="text-xl font-semibold">Co-Founder & CEO</h4>
                      <span className="text-gray-500">2010 - 2015</span>
                    </div>
                    <h5 className="text-lg text-green-600 font-medium mb-2">CloudSync (Acquired by Microsoft)</h5>
                    <p className="text-gray-700 mb-3">
                      Built and scaled a B2B data synchronization platform from 0 to $10M ARR.
                      Led team of 45 employees across engineering, sales, and operations. Successfully exited to Microsoft for $85M.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Entrepreneurship</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">SaaS</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Exit Strategy</span>
                    </div>
                  </div>
                </div>

                {/* Early Career */}
                <div className="flex border-l-2 border-gray-200 pl-6 pb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-3 h-3 bg-gray-500 rounded-full -ml-8 border-4 border-white"></div>
                      <h4 className="text-xl font-semibold">Software Engineer</h4>
                      <span className="text-gray-500">2008 - 2010</span>
                    </div>
                    <h5 className="text-lg text-gray-600 font-medium mb-2">Various Startups</h5>
                    <p className="text-gray-700 mb-3">
                      Gained experience in early-stage startups, working on full-stack development and product design.
                      Contributed to 3 different companies in fintech and e-commerce sectors.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Full Stack Development</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Startup Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Notable Investments */}
            <section className="mb-12 p-8 bg-gray-50 rounded-lg">
              <h3 className="text-3xl font-bold mb-6">Notable Portfolio Companies</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">AI Dynamics</h4>
                  <p className="text-sm text-gray-600 mb-3">Series A Lead • 2020</p>
                  <p className="text-gray-700 text-sm">Enterprise AI automation platform. Grew from $1M to $50M ARR in 3 years.</p>
                  <div className="mt-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">AI/ML</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">GreenTech Solutions</h4>
                  <p className="text-sm text-gray-600 mb-3">Seed Investor • 2019</p>
                  <p className="text-gray-700 text-sm">Carbon tracking and offset platform for enterprises. 500+ enterprise customers.</p>
                  <div className="mt-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Climate Tech</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">CryptoSecure</h4>
                  <p className="text-sm text-gray-600 mb-3">Series B Follow-on • 2021</p>
                  <p className="text-gray-700 text-sm">Blockchain security and compliance platform. IPO planned for 2025.</p>
                  <div className="mt-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Blockchain</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">HealthAI Labs</h4>
                  <p className="text-sm text-gray-600 mb-3">Series A Co-Lead • 2022</p>
                  <p className="text-gray-700 text-sm">AI-powered medical diagnostics. FDA approval received in 2024.</p>
                  <div className="mt-3">
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">HealthTech</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">EdgeCompute</h4>
                  <p className="text-sm text-gray-600 mb-3">Seed Lead • 2023</p>
                  <p className="text-gray-700 text-sm">Edge computing infrastructure for IoT. 1000% revenue growth in first year.</p>
                  <div className="mt-3">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Infrastructure</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">FinFlow</h4>
                  <p className="text-sm text-gray-600 mb-3">Series A Investor • 2021</p>
                  <p className="text-gray-700 text-sm">SMB financial management platform. Acquired by Intuit for $300M.</p>
                  <div className="mt-3">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">FinTech</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills & Expertise */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold mb-6">Expertise Areas</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Investment Focus</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Artificial Intelligence</span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">Climate Tech</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">Blockchain</span>
                    <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full">HealthTech</span>
                    <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full">Enterprise SaaS</span>
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full">FinTech</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full">Product Strategy</span>
                    <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full">Team Building</span>
                    <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full">Due Diligence</span>
                    <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full">Board Advisory</span>
                    <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full">M&A Strategy</span>
                    <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full">Fundraising</span>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>

        {/* Sidebar */}
        <aside className="w-80 bg-gray-50 p-6 h-fit">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Quick Stats */}
          <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Portfolio Companies</span>
                <span className="font-semibold">150+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Unicorns</span>
                <span className="font-semibold">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Successful Exits</span>
                <span className="font-semibold">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fund Returns</span>
                <span className="font-semibold">3.2x</span>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Interested in Working Together?</h3>
            <p className="text-sm text-gray-600 mb-4">
              I&rsquo;m always looking for exceptional entrepreneurs building the future.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Recent Recognition */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recognition</h3>
            <ul className="space-y-3 text-sm">
              <li className="border-l-2 border-blue-500 pl-3">
                <div className="font-medium">Forbes 40 Under 40</div>
                <div className="text-gray-600">2023</div>
              </li>
              <li className="border-l-2 border-green-500 pl-3">
                <div className="font-medium">Top VC by TechCrunch</div>
                <div className="text-gray-600">2022</div>
              </li>
              <li className="border-l-2 border-purple-500 pl-3">
                <div className="font-medium">Climate Investor Award</div>
                <div className="text-gray-600">2021</div>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <p>&copy; 2025 Charlie Scott</p>
              <p className="text-sm text-gray-400">Website designed with inspiration from modern personal brands</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>Built with Next.js & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}