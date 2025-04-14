import React from 'react';
import Link from 'next/link';

export default function FreelancePage() {
  // Sample job listings
  const jobListings = [
    {
      id: 1,
      title: 'Website Development',
      description: 'Looking for a developer to create a simple business website',
      location: 'Nairobi',
      budget: 'KSh 15,000 - 25,000',
      skills: ['HTML', 'CSS', 'JavaScript'],
      postedBy: 'John Doe',
      postedDate: '2 days ago',
    },
    {
      id: 2,
      title: 'Logo Design',
      description: 'Need a professional logo for a new restaurant',
      location: 'Mombasa',
      budget: 'KSh 5,000 - 10,000',
      skills: ['Graphic Design', 'Illustrator'],
      postedBy: 'Jane Smith',
      postedDate: '1 day ago',
    },
    {
      id: 3,
      title: 'Content Writing',
      description: 'Looking for a writer to create blog posts about Kenyan tourism',
      location: 'Remote',
      budget: 'KSh 1,000 per article',
      skills: ['Writing', 'SEO', 'Research'],
      postedBy: 'Tourism Kenya',
      postedDate: '3 days ago',
    },
    {
      id: 4,
      title: 'Delivery Driver',
      description: 'Need a driver with a motorcycle for food delivery',
      location: 'Kisumu',
      budget: 'KSh 200 per delivery',
      skills: ['Driving', 'Navigation'],
      postedBy: 'Local Restaurant',
      postedDate: '5 hours ago',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Freelance & Gig Marketplace
          </h1>
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Post a Job
          </Link>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Search and Filter Section */}
          <div className="px-4 py-6 sm:px-0 mb-6">
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg p-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Search
                  </label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                    placeholder="Keywords, skills, titles..."
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">All Locations</option>
                    <option>Nairobi</option>
                    <option>Mombasa</option>
                    <option>Kisumu</option>
                    <option>Remote</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">All Categories</option>
                    <option>Technology</option>
                    <option>Design</option>
                    <option>Writing</option>
                    <option>Delivery</option>
                    <option>Household</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Any Budget</option>
                    <option>Under KSh 5,000</option>
                    <option>KSh 5,000 - 15,000</option>
                    <option>KSh 15,000 - 30,000</option>
                    <option>Over KSh 30,000</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Search Jobs
                </button>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="px-4 sm:px-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Job Listings</h2>
            <div className="space-y-4">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                          {job.title}
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                          {job.description}
                        </p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                        {job.budget}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-4 sm:px-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">{job.postedBy}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">{job.postedDate}</span>
                        </div>
                      </div>
                      <Link
                        href="#"
                        className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Apply Now
                      </Link>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
