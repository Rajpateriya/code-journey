import React, { useState, useEffect } from "react";
import { Star, ChevronRight, Award, Zap, Calendar } from "lucide-react";
import Spinner from "../Spinner";

const CodeChefProfile = ({ username }) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://codechef-api-7ilp.onrender.com/codechef/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProfileData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Username not found");
        setLoading(false);
      });
  }, [username]);

  if (loading) return <Spinner/>;
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="text-center p-6 bg-red-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Oops, something went wrong!</h2>
          <p className="text-lg">{error}</p>
          <p className="mt-4">Please check the username or try again later.</p>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">No User Found</h2>
          <p className="text-lg">We couldn't find a CodeChef user with the username "{username}".</p>
          <p className="mt-4">Please check the username or try searching for another one.</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 max-w-6xl mx-auto p-4 font-sans text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <img
                  src={profileData.profile}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-500 transition-transform duration-300 hover:scale-110"
                  alt="Profile"
                />
                <div>
                  <h1 className="text-2xl font-bold">{profileData.name}</h1>
                  <div className="flex items-center mt-1">
                    <span className="text-gray-700">{profileData.stars}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="transition-all duration-300 hover:bg-gray-100 p-2 rounded">
                  <p className="text-gray-600">Username:</p>
                  <p className="font-semibold">{profileData.name}</p>
                </div>
                <div className="transition-all duration-300 hover:bg-gray-100 p-2 rounded">
                  <p className="text-gray-600">Country:</p>
                  <div className="flex items-center">
                    <img
                      src={profileData.countryFlag}
                      alt={profileData.countryName}
                      className="w-5 h-4 mr-2"
                    />
                    <span>{profileData.countryName}</span>
                  </div>
                </div>
                <div className="transition-all duration-300 hover:bg-gray-100 p-2 rounded">
                  <p className="text-gray-600">Global Rank:</p>
                  <p className="font-semibold">{profileData.globalRank}</p>
                </div>
                <div className="transition-all duration-300 hover:bg-gray-100 p-2 rounded">
                  <p className="text-gray-600">Country Rank:</p>
                  <p className="font-semibold">{profileData.countryRank}</p>
                </div>
                <div className="transition-all duration-300 hover:bg-gray-100 p-2 rounded">
                  <p className="text-gray-600">Highest Rating:</p>
                  <p className="font-semibold">{profileData.highestRating}</p>
                </div>
                <div className="transition-all duration-300 hover:bg-gray-100 p-2 rounded">
                  <p className="text-gray-600">Current Rating:</p>
                  <p className="font-semibold">{profileData.currentRating}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 transition-all duration-300 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-4 text-blue-600">Activity Heat Map</h2>
              <div className="text-sm text-gray-500 mb-2">(Last 6 Months)</div>
              <div className="overflow-x-auto">
                <div className="grid grid-cols-7 gap-2 justify-items-center">
                  {Array.from({ length: 6 }).map((_, index) => {
                    const monthData = profileData.heatMap.find(
                      (heat) => {
                        const [year, month, day] = heat.date.split('-').map(Number);
                        return (
                          month === new Date().getMonth() + 1 - (5 - index) &&
                          year === new Date().getFullYear()
                        );
                      }
                    );

                    const backgroundColor =
                      monthData && monthData.value > 0
                        ? monthData.value < 10
                          ? "#c6e48b"
                          : monthData.value < 20
                          ? "#7bc96f"
                          : monthData.value < 30
                          ? "#239a3b"
                          : "#196127"
                        : "#f0f0f0"; // Light gray for no contribution

                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-125 hover:shadow-lg ${monthData && monthData.value === 0 ? 'bg-gray-200' : ''}`}
                          style={{ backgroundColor }}
                          title={
                            monthData
                              ? `Date: ${monthData.date}, Contributions: ${monthData.value}`
                              : "No activity"
                          }
                        ></div>
                        <span className="text-xs mt-1">{6 - index}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-4 sm:mb-6 text-center text-blue-600">
                Recent Contests
              </h2>
              {profileData.ratingData && profileData.ratingData.length > 0 ? (
                <div className="space-y-4 sm:space-y-6">
                  {profileData.ratingData.map((contest, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden mb-4 p-3 sm:p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform cursor-pointer group"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 transition-all duration-300 group-hover:w-full opacity-20"></div>
                      <h3 className="text-base sm:text-lg font-semibold text-blue-700 mb-2 sm:mb-3 relative z-10 truncate">
                        {contest.name}
                      </h3>
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 relative z-10">
                        <div className="text-center p-2 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105">
                          <p className="text-xs sm:text-sm text-gray-500 mb-1">
                            Rank
                          </p>
                          <p className="font-bold text-blue-600 text-lg sm:text-xl">
                            {contest.rank}
                          </p>
                        </div>
                        <div className="text-center p-2 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105">
                          <p className="text-xs sm:text-sm text-gray-500 mb-1">
                            Rating
                          </p>
                          <p className="font-bold text-green-600 text-lg sm:text-xl">
                            {contest.rating}
                          </p>
                        </div>
                        <div className="text-center p-2 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105">
                          <p className="text-xs sm:text-sm text-gray-500 mb-1">
                            Date
                          </p>
                          <p className="font-bold text-purple-600 text-lg sm:text-xl">
                            {formatDate(contest.end_date.split(" ")[0])}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center italic">
                  No recent contests
                </p>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-4">
                Total Problems Solved
              </h2>
              <p className="text-gray-500 text-2xl font-bold transition-all duration-300 hover:scale-110">
                {profileData.problemsSolved}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeChefProfile;
