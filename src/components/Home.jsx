import React, { useState } from "react";
import UserProfilePage from "./Leetcode/UserProfilePage";
import Side from "./Side";
import UserProfilegfg from "./gfg/UserProfilegfg";



const UserProfile = () => {

  const [activeTab, setActiveTab] = useState('Leetcode');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Leetcode':
        return <UserProfilePage/>;
      case 'Codechef':
        return <p>Codechef content goes here.</p>;
      case 'HackerRank':
        return <p>HackerRank content goes here.</p>;
      case 'GFG':
        return <UserProfilegfg/>;
      default:
        return null;
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  return (
    <div className="grid min-h-screen w-full grid-cols-[280px_1fr] border-gray-700 bg-gray-800 text-white">
      {/* THIS IS THE SIDEBAR SECTION */}

     <Side/>

      {/* THIS IS THE TAB BAR SECTION */}

      <div className="flex flex-col">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-gray-700 bg-gray-900 px-6 shadow-sm">
        <div className="flex space-x-4 w-full">
          <button
            className={`inline-flex w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ${
              activeTab === 'Leetcode' ? 'bg-gray-800 text-white shadow' : 'bg-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
            onClick={() => setActiveTab('Leetcode')}
            role="tab"
            aria-selected={activeTab === 'Leetcode'}
          >
            Leetcode
          </button>
          <button
            className={`inline-flex w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ${
              activeTab === 'Codechef' ? 'bg-gray-800 text-white shadow' : 'bg-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
            onClick={() => setActiveTab('Codechef')}
            role="tab"
            aria-selected={activeTab === 'Codechef'}
          >
            Codechef
          </button>
          <button
            className={`inline-flex w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ${
              activeTab === 'HackerRank' ? 'bg-gray-800 text-white shadow' : 'bg-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
            onClick={() => setActiveTab('HackerRank')}
            role="tab"
            aria-selected={activeTab === 'HackerRank'}
          >
            HackerRank
          </button>
          <button
            className={`inline-flex w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ${
              activeTab === 'GFG' ? 'bg-gray-800 text-white shadow' : 'bg-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
            onClick={() => setActiveTab('GFG')}
            role="tab"
            aria-selected={activeTab === 'GFG'}
          >
            GFG
          </button>
        </div>
        <div className="relative">
          <button
            className="inline-flex items-center justify-center h-10 w-10 rounded-full text-sm font-medium transition-colors hover:bg-gray-800 hover:text-white"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
              <img
                className=" object-cover content-center h-full w-full"
                src="https://static.vecteezy.com/system/resources/previews/006/388/924/original/logout-sign-out-icon-in-circle-button-vector.jpg"
                alt="User"
              />
            </span>
            <span className="sr-only">Toggle user menu</span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white"
                onClick={() => console.log('Edit Profile')}
              >
                Edit Profile
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white"
                onClick={() => console.log('Logout')}
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

export default UserProfile;
