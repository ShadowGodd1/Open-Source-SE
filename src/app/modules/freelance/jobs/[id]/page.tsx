"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ProtectedRoute from '@/components/auth/protected-route';

interface Job {
  id: string | number;
  title: string;
  description: string;
  location: string;
  budget: string;
  skills: string[];
  postedBy: string;
  postedDate: string;
  detailedDescription?: string;
  requirements?: string[];
  employerProfile?: {
    name: string;
    rating: number;
    jobsPosted: number;
    memberSince: string;
  };
}

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.id;
  
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isApplying, setIsApplying] = useState(false);
  const [applicationData, setApplicationData] = useState({
    coverLetter: '',
    expectedRate: '',
    availability: 'immediate',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      setIsLoading(true);
      setError('');
      
      try {
        // In a real application, this would call an API endpoint
        // For now, we'll simulate a successful response with mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock job data
        const mockJob: Job = {
          id: jobId,
          title: 'Website Development',
          description: 'Looking for a developer to create a simple business website',
          detailedDescription: 'We are a small business looking to establish our online presence with a professional website. The website should have 5-7 pages including Home, About Us, Services, Portfolio, and Contact. We need a responsive design that works well on mobile devices. The website should be easy to update and maintain.',
          requirements: [
            'Experience with HTML, CSS, and JavaScript',
            'Responsive design skills',
            'Knowledge of SEO best practices',
            'Ability to integrate with social media platforms',
            'Experience with content management systems (WordPress preferred)',
          ],
          location: 'Nairobi',
          budget: 'KSh 15,000 - 25,000',
          skills: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Responsive Design'],
          postedBy: 'John Doe',
          postedDate: '2 days ago',
          employerProfile: {
            name: 'John Doe',
            rating: 4.8,
            jobsPosted: 12,
            memberSince: 'January 2022',
          },
        };
        
        setJob(mockJob);
      } catch (err) {
        console.error('Error fetching job details:', err);
        setError('Failed to load job details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      // In a real application, this would call an API endpoint
      // For now, we'll simulate a successful response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
    } catch (err) {
      console.error('Error submitting application:', err);
      setError('Failed to submit application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/modules/freelance"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to Job Listings
            </Link>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          ) : job ? (
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h1>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                      Posted by {job.postedBy} • {job.postedDate}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                    {job.budget}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700">
                <dl>
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">{job.location}</dd>
                  </div>
                  <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Skills Required</dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </dd>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Job Description</dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                      <p className="mb-4">{job.detailedDescription}</p>
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.requirements?.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">About the Employer</dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                      <div className="flex items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                          {job.employerProfile?.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">{job.employerProfile?.name}</p>
                          <div className="flex items-center">
                            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1">{job.employerProfile?.rating} rating</span>
                          </div>
                        </div>
                      </div>
                      <p>Member since {job.employerProfile?.memberSince}</p>
                      <p>{job.employerProfile?.jobsPosted} jobs posted</p>
                    </dd>
                  </div>
                </dl>
              </div>
              
              <div className="px-4 py-5 sm:px-6 border-t border-gray-200 dark:border-gray-700">
                {submitSuccess ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <p className="font-bold">Application Submitted!</p>
                    <p className="text-sm">Your application has been successfully submitted. The employer will contact you if they're interested.</p>
                  </div>
                ) : (
                  <>
                    {isApplying ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Cover Letter
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="coverLetter"
                              name="coverLetter"
                              rows={4}
                              required
                              value={applicationData.coverLetter}
                              onChange={handleInputChange}
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                              placeholder="Explain why you're a good fit for this job..."
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="expectedRate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Expected Rate (KSh)
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="expectedRate"
                              id="expectedRate"
                              required
                              value={applicationData.expectedRate}
                              onChange={handleInputChange}
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                              placeholder="Your expected rate"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="availability" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Availability
                          </label>
                          <select
                            id="availability"
                            name="availability"
                            value={applicationData.availability}
                            onChange={handleInputChange}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:text-white"
                          >
                            <option value="immediate">Immediate</option>
                            <option value="one_week">Within one week</option>
                            <option value="two_weeks">Within two weeks</option>
                            <option value="one_month">Within one month</option>
                          </select>
                        </div>
                        
                        <div className="flex justify-end space-x-3">
                          <button
                            type="button"
                            onClick={() => setIsApplying(false)}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="flex justify-center">
                        <button
                          onClick={() => setIsApplying(true)}
                          className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Apply for this Job
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6 text-center">
                <p className="text-gray-700 dark:text-gray-300">Job not found.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
