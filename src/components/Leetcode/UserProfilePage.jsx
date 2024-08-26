import React, { useEffect, useState } from 'react';
import Sidebar from '../Leetcode/Sidebar';
import LeetCodeProfile from './LeetcodeProfile';
import Spinner from '../Spinner';

const UserProfilePage = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://rajpateriya-leetcode-api.onrender.com/${username}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]); // Ensure the effect runs again if the username changes

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

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">No User Found</h2>
          <p className="text-lg">We couldn't find a Leetcode user with the username "{username}".</p>
          <p className="mt-4">Please check the username or try searching for another one.</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex flex-col md:flex-row bg-gray-100 min-h-screen">
      <div className="w-full md:w-64 lg:w-72">
        <Sidebar userData={userData} />
      </div>
      <div className="flex-1 overflow-y-auto">
        <LeetCodeProfile username={username} />
      </div>
    </div>
  );
};

export default UserProfilePage;
