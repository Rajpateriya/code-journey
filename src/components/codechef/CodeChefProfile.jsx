import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, Award, Zap, Calendar } from 'lucide-react';

const CodeChefProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/codechef/zaheer_khan')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProfileData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (!profileData) return null;

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans text-black">
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <img src={profileData.profile} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h1 className="text-2xl font-bold">{profileData.name}</h1>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-black mr-1" />
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
                <p className="text-gray-600">Global Rank:</p>
                <p className="font-semibold">{profileData.globalRank}</p>
              </div>
              <div>
                <p className="text-gray-600">Country Rank:</p>
                <p className="font-semibold">{profileData.countryRank}</p>
              </div>
              <div>
                <p className="text-gray-600">Highest Rating:</p>
                <p className="font-semibold">{profileData.highestRating}</p>
              </div>
              <div>
                <p className="text-gray-600">Current Rating:</p>
                <p className="font-semibold">{profileData.currentRating}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Activity Heat Map</h2>
            <div className="text-sm text-gray-500 mb-2">(Last 6 Months)</div>
            <div className="grid grid-cols-7 gap-1">
              {profileData.heatMap && profileData.heatMap.length > 0
                ? profileData.heatMap.map((heat, index) => (
                    <div key={index} className="w-4 h-4" style={{ backgroundColor: heat.color }}></div>
                  ))
                : [...Array(180)].map((_, index) => (
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

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Contests</h2>
            {profileData.ratingData && profileData.ratingData.length > 0 ? (
              <div>
                {profileData.ratingData.map((contest, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-semibold">{contest.name}</h3>
                    <p className="text-gray-500">Rank: {contest.rank}</p>
                    <p className="text-gray-500">Rating: {contest.rating}</p>
                    <p className="text-gray-500">Date: {formatDate(contest.end_date.split(' ')[0])}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No recent contests</p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Skill Tests</h2>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white mr-4">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Build a strong profile by taking skill tests</p>
                <p className="text-sm text-gray-500">Your current score will appear here</p>
              </div>
            </div>
            <a href="#" className="text-blue-500 hover:underline text-sm">View skill tests</a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Total Problems Solved</h2>
            <p className="text-gray-500">{profileData.problemsSolved}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
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
                  <p className="font-semibold">Code Devotee - No Badge</p>
                  <p className="text-sm text-gray-500">0 / 20</p>
                  <p className="text-xs text-gray-400">Attempt 20 Solutions to get Silver Badge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeChefProfile;
