import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, Award, Zap, Calendar } from 'lucide-react';

const CodeChefProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://codechef-api.vercel.app/handle/zaheer_khan');
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        setProfileData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (!profileData) return null;

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      <div className="text-sm breadcrumbs mb-4">
        <ul>
          <li><a href="#" className="text-black-500 hover:underline">Home</a></li>
          <li>{profileData.name}</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <img src={profileData.profile} alt={profileData.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h1 className="text-2xl font-bold">{profileData.name}</h1>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-black-400 mr-1" />
                  <span>{profileData.stars}</span>
                </div>
              </div>
              <div className="ml-auto">
                <button className="text-gray-600 hover:text-gray-800 mr-2">
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Username:</p>
                <p className="font-semibold">{profileData.name.toLowerCase()}</p>
              </div>
              <div>
                <p className="text-gray-600">Country:</p>
                <div className="flex items-center">
                  <img src={profileData.countryFlag} alt={profileData.countryName} className="w-5 h-4 mr-2" />
                  <span>{profileData.countryName}</span>
                </div>
              </div>
              <div>
                <p className="text-gray-600">Student/Professional:</p>
                <p className="font-semibold">N/A</p>
              </div>
              <div>
                <p className="text-gray-600">Institution:</p>
                <p className="font-semibold">N/A</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Activity Heat Map</h2>
            <div className="text-sm text-gray-500 mb-2">(Last 6 Months)</div>
            <div className="grid grid-cols-7 gap-1">
              {[...Array(180)].map((_, index) => (
                <div key={index} className="w-4 h-4 bg-gray-200 rounded-sm"></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Learning Paths (1)</h2>
            <div className="flex items-center p-2 hover:bg-gray-100 rounded">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-3">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <p className="font-semibold">Learn SQL</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Practice Paths (1)</h2>
            <div className="flex items-center p-2 hover:bg-gray-100 rounded">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-3">
                <Zap className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <p className="font-semibold">SQL: 30 Topic-wise Practice Queries</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Contests (0)</h2>
            <p className="text-gray-500">None</p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Skill tests</h2>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white mr-4">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Build a strong profile by taking skill tests</p>
                <p className="text-sm text-gray-500">Your current score of 0 appear here</p>
              </div>
            </div>
            <a href="#" className="text-blue-500 hover:underline text-sm">View skill tests</a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Badges</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="font-semibold">Code Enthusiast - No Badge</p>
                  <p className="text-sm text-gray-500">0 / 10</p>
                  <p className="text-xs text-gray-400">Attempt 10 Solutions to get Bronze Badge</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="font-semibold">Contest Contender - No Badge</p>
                  <p className="text-sm text-gray-500">0 / 5</p>
                  <p className="text-xs text-gray-400">Participate in 5 Contests to get Bronze Badge</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Problem Solver - Bronze Badge</p>
                  <p className="text-sm text-gray-500">243 / 250</p>
                  <p className="text-xs text-gray-400">Solve 7 more Problems to get Silver Badge</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Daily Streak - Gold Badge</p>
                  <p className="text-sm text-gray-500">0 / 100</p>
                  <p className="text-xs text-gray-400">Maintain streak for 100 days to get Diamond Badge</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <img src="/api/placeholder/400/200" alt="Master Data Structures and Algorithms" className="w-full rounded-lg mb-4" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full">
              Start Roadmap
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="pb-2">Time</th>
                  <th className="pb-2">Problem</th>
                  <th className="pb-2">Result</th>
                  <th className="pb-2">Lang</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2">
                      <Calendar className="w-4 h-4 inline-block mr-1" />
                    </td>
                    <td className="py-2 text-blue-500 hover:underline">
                      <a href="#">SSTRPRF</a>
                    </td>
                    <td className="py-2">
                      {index % 2 === 0 ? (
                        <span className="text-green-500">✓</span>
                      ) : (
                        <span className="text-red-500">✗</span>
                      )}
                    </td>
                    <td className="py-2">SQL</td>
                    <td className="py-2">
                      <button className="text-blue-500 hover:underline">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
      <p className="text-xl font-bold">
          Total Problems Solved: {profileData.ratingData && profileData.ratingData.length > 0 
            ? profileData.ratingData[profileData.ratingData.length - 1].rank 
            : 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default CodeChefProfile;