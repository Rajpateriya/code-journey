import React, { useEffect, useState } from 'react';
import Sidebar from '../Leetcode/Sidebar';
import LeetCodeProfile from './LeetcodeProfile';

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

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!userData) return <div className="text-center py-10">No user data available</div>;

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
