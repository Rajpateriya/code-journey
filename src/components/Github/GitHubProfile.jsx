import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from "../Spinner/Spinner";

const GitHubProfile = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos`)
        ]);
        setUserData(userResponse.data);
        setRepos(reposResponse.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <Spinner/>
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
          <p className="text-lg">We couldn't find a GitHub user with the username `{username}`.</p>
          <p className="mt-4">Please check the username or try searching for another one.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 flex flex-col items-center text-center md:text-left">
          <img
            src={userData.avatar_url}
            alt={`${userData.name}'s avatar`}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4">{userData.name}</h1>
          <p className="text-gray-400">@{userData.login}</p>
          {userData.bio && <p className="mt-2 text-gray-300">{userData.bio}</p>}
          {/* <div className="mt-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
              Edit profile
            </button>
          </div> */}
          <div className="mt-4 flex justify-center md:justify-start items-center space-x-4 text-gray-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z"></path>
            </svg>
            <span>{userData.followers} followers</span>
            <span className="mx-2">·</span>
            <span>{userData.following} following</span>
          </div>
          {userData.company && (
            <div className="mt-2 flex items-center justify-center md:justify-start text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
              </svg>
              <span>{userData.company}</span>
            </div>
          )}
          {userData.location && (
            <div className="mt-2 flex items-center justify-center md:justify-start text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
              </svg>
              <span>{userData.location}</span>
            </div>
          )}
          {userData.email && (
            <div className="mt-2 flex items-center justify-center md:justify-start text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <span>{userData.email}</span>
            </div>
          )}
          {userData.blog && (
            <div className="mt-2 flex items-center justify-center md:justify-start text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
              </svg>
              <a href={userData.blog} className="text-blue-400 hover:underline">{userData.blog}</a>
            </div>
          )}
          {userData.twitter_username && (
            <div className="mt-2 flex items-center justify-center md:justify-start text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.322 4.51 2.09 7.136 2.09 8.562 0 13.237-7.09 13.237-13.237 0-.202-.004-.404-.012-.606.911-.66 1.698-1.487 2.32-2.426z"></path>
              </svg>
              <a href={`https://twitter.com/${userData.twitter_username}`} className="text-blue-400 hover:underline">
                @{userData.twitter_username}
              </a>
            </div>
          )}
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Repositories <span className="bg-gray-100 rounded-full px-2 py-1 text-xs text-black text-pretty">{userData.public_repos}</span></h2>
          <div className="space-y-4">
            {repos.map(repo => (
              <div key={repo.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                <a href={repo.html_url} className="text-xl font-semibold text-blue-400 hover:underline">{repo.name}</a>
                <p className="mt-2 text-gray-300">{repo.description}</p>
                <div className="mt-2 text-gray-400">
                  <span className="mr-4">⭐ {repo.stargazers_count}</span>
                  <span className="mr-4">🍴 {repo.forks_count}</span>
                  <span>👁️ {repo.watchers_count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubProfile;
