import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import UserProfilePage from "./Leetcode/UserProfilePage";
import UserProfilegfg from "./gfg/UserProfilegfg";
import HackerrankProfile from "./Hackerrank/HackerrankProfile";
import CodeChefProfile from "./codechef/CodeChefProfile";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import GitHubProfile from "./Github/GitHubProfile";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [availableTabs, setAvailableTabs] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  const updateTabs = (data) => {
    const tabs = [];
    if (data.leetCode) tabs.push('Leetcode');
    if (data.codeChef) tabs.push('Codechef');
    if (data.hackerRank) tabs.push('HackerRank');
    if (data.gfg) tabs.push('GFG');
    if (data.github) tabs.push('Github');
    setAvailableTabs(tabs);
    if (tabs.length > 0) setActiveTab(tabs[0]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://code-journey-backend-1.onrender.com/profile/${params.username}`);
        localStorage.setItem('userData', JSON.stringify(response.data));
        setUserData(response.data);
        updateTabs(response.data);
      } catch (err) {
        // Handle error
      }
    };

    fetchData();

    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
      updateTabs(parsedUserData);
    }

    const handleStorageChange = (event) => {
      if (event.key === 'userData') {
        const updatedUserData = JSON.parse(event.newValue);
        setUserData(updatedUserData);
        updateTabs(updatedUserData);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [params.username]);

  const renderTabContent = () => {
    if (!userData) return null;

    switch (activeTab) {
      case 'Leetcode':
        return userData.leetCode ? (
          <UserProfilePage username={userData.leetCode} />
        ) : (
          <UsernameNotExist platform="Leetcode" />
        );
      case 'Codechef':
        return userData.codeChef ? (
          <CodeChefProfile username={userData.codeChef} />
        ) : (
          <UsernameNotExist platform="Codechef" />
        );
      case 'HackerRank':
        return userData.hackerRank ? (
          <HackerrankProfile username={userData.hackerRank} />
        ) : (
          <UsernameNotExist platform="HackerRank" />
        );
      case 'GFG':
        return userData.gfg ? (
          <UserProfilegfg username={userData.gfg} />
        ) : (
          <UsernameNotExist platform="GeeksForGeeks" />
        );
        case 'Github':
          return userData.github ? (
            <GitHubProfile username={userData.github} />
          ) : (
            <UsernameNotExist platform="Github" />
          );
      default:
        return null;
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/login');
  };

  if (!userData) {
    return <div className="text-center mt-8">Loading user data...</div>;
  }

  return (
    <div className="grid w-full border-gray-700 bg-gray-800 text-white">
      <div className="flex flex-col">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-700 bg-gray-900 px-2 sm:px-6 py-2 shadow-sm">
  <div className="flex items-center justify-between space-x-1 sm:space-x-2 overflow-x-auto flex-grow max-w-[calc(100%-3rem)]">
    {availableTabs.map((tab) => (
      <button
        key={tab}
        className={`flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 sm:px-3 py-1 text-[15px] sm:text-sm font-medium ${
          activeTab === tab ? 'bg-gray-800 text-white shadow' : 'bg-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white'
        }`}
        onClick={() => setActiveTab(tab)}
        role="tab"
        aria-selected={activeTab === tab}
      >
        {tab}
      </button>
    ))}
  </div>
  <div className="relative flex-shrink-0 ml-2">
    <button
      className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full text-sm font-medium transition-colors hover:bg-gray-800 hover:text-white"
      type="button"
      aria-haspopup="menu"
      aria-expanded={dropdownOpen}
      onClick={toggleDropdown}
    >
      <span className="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6 sm:h-8 sm:w-8">
        <img
          className="object-cover content-center h-full w-full"
          src="https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-vector-logout-icon-png-image_991952.jpg"
          alt="User"
        />
      </span>
      <span className="sr-only">Toggle user menu</span>
    </button>
    {dropdownOpen && (
      <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
        <button
          className="block w-full text-center px-4 py-2 text-lg text-gray-400 hover:bg-gray-700 hover:text-white"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    )}
  </div>
</header>
        <main className="flex-1 overflow-auto p-6">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

const UsernameNotExist = ({ platform }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center h-full text-center"
  >
    <div className="bg-gray-700 rounded-full p-8 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
    <h2 className="text-2xl font-bold mb-2">Username Not Found</h2>
    <p className="text-gray-400 mb-4">
      We couldn't find a {platform} username associated with your account.
    </p>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
      Add {platform} Username
    </button>
  </motion.div>
);

export default UserProfile;
