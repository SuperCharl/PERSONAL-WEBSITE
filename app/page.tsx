import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">CHARLIE SCOTT</h1>
            <nav>
              <ul className="flex space-x-8 text-sm">
                <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
                <li><a href="#about" className="hover:text-gray-300 transition-colors">About</a></li>
                <li><Link href="/work" className="hover:text-gray-300 transition-colors">Work</Link></li>
                <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 mt-8 flex gap-8">
        {/* Main Content */}
        <main className="flex-1">
          <article className="bg-white">
            <div className="mb-6">
              <h2 className="text-4xl font-bold mb-6">About Charlie</h2>
              <div className="mb-8">
                <Image
                  src="/charlie-photo.jpg"
                  alt="Charlie Scott"
                  width={320}
                  height={480}
                  className="w-80 h-auto mb-6"
                />
              </div>
              <blockquote className="bg-gray-50 border-l-4 border-gray-300 pl-6 py-4 mb-8 italic text-lg">
                <p>Every morning from 5 to 8 AM is my &ldquo;reading and writing time&rdquo;. After reading extensively about global tech developments and commentary, I try to organize my insights into articles to share with everyone, hoping to inspire readers, especially those who, like me, are working hard to drive change as entrepreneurs.</p>
              </blockquote>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold mb-4">About Charlie Scott</h3>
              <p className="mb-4">
                Charlie Scott is a seasoned technology entrepreneur and investor based in San Francisco. Currently serving as Managing Partner at TechVenture Capital, Charlie has been instrumental in identifying and nurturing the next generation of breakthrough technologies.
              </p>

              <p className="mb-4">
                Through TechVenture Capital, Charlie focuses on early-stage startups, particularly those working on artificial intelligence, blockchain, and sustainable technology solutions. Over the past decade, TechVenture has supported over 150+ active portfolio companies, including several unicorns and successful exits.
              </p>

              <p className="mb-4">
                Charlie&rsquo;s entrepreneurial journey began in 2010 when he co-founded CloudSync, a B2B data synchronization platform that was later acquired by Microsoft. Following the acquisition, he spent three years at Microsoft Azure before transitioning to venture capital.
              </p>

              <p className="mb-4">
                Charlie holds an MBA from Stanford Graduate School of Business, where he specialized in Technology Entrepreneurship and Finance. He completed his undergraduate studies at UC Berkeley in Computer Science and Economics.
              </p>

              <p className="mb-6">
                Charlie currently resides in Palo Alto with his family and is passionate about mentoring young entrepreneurs and supporting diversity in tech.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Ask Charlie</h3>
              <p className="mb-6">
                Want to hear Charlie&rsquo;s perspective or insights? Feel free to <a href="#contact" className="text-blue-600 hover:underline">reach out</a>.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Social</h3>
              <p className="mb-4">
                Twitter: <a href="https://twitter.com/charliescott" className="text-blue-600 hover:underline" target="_blank">@CharlieScott</a><br/>
                LinkedIn: <a href="https://linkedin.com/in/charliescott" className="text-blue-600 hover:underline" target="_blank">Charlie Scott</a><br/>
                Medium: <a href="https://medium.com/@charliescott" className="text-blue-600 hover:underline" target="_blank">@charliescott</a>
              </p>

              <h4 className="text-xl font-semibold mb-3">Contact</h4>
              <p className="mb-4">charlie.scott [at] techventure.com</p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h4 className="text-xl font-semibold mb-3">Recent Thoughts</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-600 hover:underline">The Future of AI in Enterprise Software</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Why Climate Tech is the Next Big Investment Opportunity</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Building Diverse Teams in Tech Startups</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Lessons from 10 Years in Venture Capital</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">The Evolution of Remote Work Post-Pandemic</a></li>
                </ul>
              </div>
            </div>
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

          {/* Social Icons */}
          <div className="flex space-x-4 mb-8 pb-4 border-b border-gray-300">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Entrepreneurs learn from practice, whether the outcome is success or failure. I&rsquo;m building a better venture capital firm and writing about my daily learnings to inspire all entrepreneurs, regardless of their outcomes. I&rsquo;m Charlie Scott, and I&rsquo;m creating TechVenture Capital.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Latest Posts</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-blue-600 hover:underline">The AI Revolution in Venture Capital</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">5 Lessons from Failed Startups</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Building the Next Unicorn</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Why Diversity Drives Innovation</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">The Future of Remote Work</a></li>
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
