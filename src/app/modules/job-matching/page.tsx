"use client";

import React from 'react';
import Link from 'next/link';
import ProtectedRoute from '@/components/auth/protected-route';

export default function JobMatchingPage() {
  // Sample job recommendations
  const jobRecommendations = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Tech Innovations Kenya',
      location: 'Nairobi',
      matchScore: 95,
      skills: ['JavaScript', 'React', 'Node.js'],
      salary: 'KSh 80,000 - 120,000',
      posted: '2 days ago',
    },
    {
      id: 2,
      title: 'Digital Marketing Specialist',
      company: 'Marketing Solutions Ltd',
      location: 'Remote',
      matchScore: 88,
      skills: ['Social Media', 'SEO', 'Content Creation'],
      salary: 'KSh 50,000 - 70,000',
      posted: '1 week ago',
    },
    {
      id: 3,
      title: 'Administrative Assistant',
      company: 'Global Enterprises',
      location: 'Mombasa',
      matchScore: 82,
      skills: ['MS Office', 'Organization', 'Communication'],
      salary: 'KSh 35,000 - 45,000',
      posted: '3 days ago',
    },
  ];

  // Sample training recommendations
  const trainingRecommendations = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      provider: 'Kenya Coding Academy',
      duration: '8 weeks',
      format: 'Online',
      cost: 'KSh 15,000',
      relevance: 'High demand in job market',
    },
    {
      id: 2,
      title: 'Digital Marketing Certificate',
      provider: 'Digital Skills Institute',
      duration: '4 weeks',
      format: 'Hybrid',
      cost: 'KSh 8,000',
      relevance: 'Growing sector with many opportunities',
    },
    {
      id: 3,
      title: 'Business Administration Basics',
      provider: 'Kenya Institute of Management',
      duration: '12 weeks',
      format: 'In-person',
      cost: 'KSh 20,000',
      relevance: 'Foundational skills for many roles',
    },
  ];

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Job-Matching Portal
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            AI-driven job matching and career development
          </p>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Profile Summary */}
          <div className="px-4 py-6 sm:px-0 mb-6">
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Your Career Profile
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                    Complete your profile to get better job matches
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  75% Complete
                </span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-700">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Top Skills
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Communication
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Problem Solving
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Customer Service
                        </span>
                        <Link href="#" className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                          + Add more skills
                        </Link>
                      </div>
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Experience
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                      <p>Sales Associate at Local Retail Store (2 years)</p>
                      <Link href="#" className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                        + Add more experience
                      </Link>
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Education
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                      <p>High School Diploma</p>
                      <Link href="#" className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                        + Add more education
                      </Link>
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Career Interests
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Customer Service
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Administration
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Sales
                        </span>
                        <Link href="#" className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                          + Update interests
                        </Link>
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => window.location.href = '/modules/job-matching/profile'}
                >
                  Complete Profile
                </button>
              </div>
            </div>
          </div>

          {/* Job Recommendations */}
          <div className="px-4 sm:px-0 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recommended Jobs</h2>
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {jobRecommendations.map((job) => (
                  <li key={job.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <span className="text-blue-800 dark:text-blue-200 font-semibold">{job.matchScore}%</span>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{job.title}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{job.company}</p>
                          </div>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <Link
                            href={`/modules/job-matching/jobs/${job.id}`}
                            className="px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                          >
                            Apply
                          </Link>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {job.location}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0 sm:ml-6">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            Posted {job.posted}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                          </svg>
                          {job.salary}
                        </div>
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
                  </li>
                ))}
              </ul>
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-center sm:px-6">
                <Link
                  href="/modules/job-matching/jobs"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View all job recommendations →
                </Link>
              </div>
            </div>
          </div>

          {/* Training Recommendations */}
          <div className="px-4 sm:px-0 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recommended Training</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trainingRecommendations.map((training) => (
                <div key={training.id} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{training.title}</h3>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <p className="mb-1">Provider: {training.provider}</p>
                      <p className="mb-1">Duration: {training.duration}</p>
                      <p className="mb-1">Format: {training.format}</p>
                      <p className="mb-1">Cost: {training.cost}</p>
                      <p className="mt-3 font-medium text-gray-700 dark:text-gray-300">Why it's relevant: {training.relevance}</p>
                    </div>
                    <div className="mt-4">
                      <Link
                        href="#"
                        className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View all training recommendations →
              </Link>
            </div>
          </div>

          {/* Career Tools */}
          <div className="px-4 sm:px-0 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Career Tools</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">CV Builder</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Create a professional CV with our guided templates
                  </p>
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Build your CV →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Interview Prep</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Practice common interview questions with AI feedback
                  </p>
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Start practicing →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Skill Assessment</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Take tests to verify your skills and stand out to employers
                  </p>
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Take an assessment →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Career Path Planner</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Visualize potential career paths and growth opportunities
                  </p>
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Plan your career →
                    </Link>
                  </div>
                </div>
              </div>
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
    </ProtectedRoute>
  );
}
