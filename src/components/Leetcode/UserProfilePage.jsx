import React, { useState, useEffect } from 'react';
import Sidebar from '../Leetcode/Sidebar';
import LeetCodeProfile from './LeetcodeProfile';

const UserProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://rajpateriya-leetcode-api.onrender.com/rajpateriya'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div className="text-center py-10"> Loading... </div>;
  if (!userData) return <div className="text-center py-10">No user data available</div>;

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar userData={userData} />
      <div className="flex-1 p-8">
        <LeetCodeProfile/>
        {/* Add more profile content here */}
      </div>
    </div>
    
  );
};

export default UserProfilePage;