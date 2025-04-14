import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-gray-900">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-800 dark:text-blue-300">
          Open Source Economic Empowerment Ecosystem
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive digital platform designed to economically empower underserved communities across Kenya
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#modules"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Modules
          </a>
          <a
            href="#about"
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800 dark:text-blue-300">Our Vision</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              To create a unified, accessible digital ecosystem that empowers Kenyans across all economic backgrounds to participate meaningfully in the digital economy, build financial resilience, and create sustainable livelihoods while fostering community collaboration.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Universal Accessibility</h3>
                <p className="text-gray-700 dark:text-gray-300">Solutions usable across feature phones, smartphones, and low-connectivity environments</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Economic Inclusion</h3>
                <p className="text-gray-700 dark:text-gray-300">Lower barriers to financial services, job markets, and digital skills development</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Community Empowerment</h3>
                <p className="text-gray-700 dark:text-gray-300">Support existing community structures like chamas and cooperatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800 dark:text-blue-300">Core Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Module 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Authentication & Profile System</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Universal digital identity with tiered KYC levels and integration with existing ID systems</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
              </div>
            </div>
            {/* Module 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Freelance & Gig Marketplace</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Job posting and matching for formal and informal work with transparent rating systems</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
              </div>
            </div>
            {/* Module 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Peer-to-Peer Microfinance</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Digital chama management, P2P lending, and group savings with transparent governance</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
              </div>
            </div>
            {/* Module 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Digital Cooperative Management</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Cooperative formation, governance tools, and transparent dividend distribution</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
              </div>
            </div>
            {/* Module 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Job-Matching Portal</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">AI-driven skills matching with training recommendations based on market demands</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
              </div>
            </div>
            {/* Module 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Financial Literacy App</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Gamified learning modules on saving, investing, and budgeting with offline access</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 dark:bg-blue-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Open Source SE</h3>
              <p className="text-blue-200">Building economic empowerment through technology</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Modules</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Contribute</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <p className="text-blue-200 mb-2">Join our community of developers and contributors</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-200 hover:text-white">GitHub</a>
                <a href="#" className="text-blue-200 hover:text-white">Twitter</a>
                <a href="#" className="text-blue-200 hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
            <p>© {new Date().getFullYear()} Open Source Economic Empowerment Ecosystem. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
