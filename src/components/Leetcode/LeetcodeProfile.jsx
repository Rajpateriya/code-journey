import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar } from 'lucide-react';

const difficultyColors = {
  Easy: 'text-green-500',
  Medium: 'text-yellow-500',
  Hard: 'text-red-500',
};

const LeetCodeProfile = ({username}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://rajpateriya-leetcode-api.onrender.com/userProfile/${username}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch LeetCode profile data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  const submissionData = data.totalSubmissions.map(item => ({
    name: item.difficulty,
    Solved: item.count,
    Submissions: item.submissions,
  }));

  const recentActivity = data.recentSubmissions.slice(0, 5);

  return (
    <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 p-4 sm:p-6 md:p-8 bg-gray-100">
      {/* Profile Overview */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Profile Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard title="Problems Solved" value={data.totalSolved} total={data.totalQuestions} />
          <StatCard title="Acceptance Rate" value={`${((data.totalSolved / data.totalSubmissions[0].submissions) * 100).toFixed(1)}%`} />
          <StatCard title="Contribution Points" value={data.contributionPoint} />
          <StatCard title="Ranking" value={data.ranking} />
        </div>
      </div>

      {/* Solved Problems */}
      <div className="bg-white text-black rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Solved Problems</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ProblemTypeCard type="Easy" solved={data.easySolved} total={data.totalEasy} />
          <ProblemTypeCard type="Medium" solved={data.mediumSolved} total={data.totalMedium} />
          <ProblemTypeCard type="Hard" solved={data.hardSolved} total={data.totalHard} />
        </div>
      </div>

      {/* Submissions Chart */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Submissions</h2>
        <div className="h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={submissionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Solved" fill="#4CAF50" />
              <Bar dataKey="Submissions" fill="#2196F3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <ActivityItem key={index} activity={activity} />
          ))}
        </div>
      </div>

      {/* Submission Calendar */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Submission Calendar</h2>
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar size={20} />
          <span className="text-sm sm:text-base">Submissions in the last year: {Object.values(data.submissionCalendar).reduce((a, b) => a + b, 0)}</span>
        </div>
        {/* Implement the heatmap calendar here */}
      </div>
    </div>
  );
};

const StatCard = ({ title, value, total }) => (
  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
    <h3 className="text-sm sm:text-base font-semibold text-gray-700">{title}</h3>
    <p className="text-lg sm:text-2xl font-bold text-gray-900">
      {value}
      {total && <span className="text-xs sm:text-sm text-gray-500"> / {total}</span>}
    </p>
  </div>
);

const ProblemTypeCard = ({ type, solved, total }) => (
  <div className={`p-3 sm:p-4 rounded-lg border ${difficultyColors[type]} border-opacity-50`}>
    <h3 className={`text-base sm:text-lg font-semibold ${difficultyColors[type]}`}>{type}</h3>
    <p className="text-lg sm:text-2xl font-bold">
      {solved} <span className="text-xs sm:text-sm text-gray-500">/ {total}</span>
    </p>
    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5 mt-2">
      <div 
        className={`h-2 sm:h-2.5 rounded-full ${difficultyColors[type]}`} 
        style={{ width: `${(solved / total) * 100}%` }}
      ></div>
    </div>
  </div>
);

const ActivityItem = ({ activity }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 hover:bg-gray-50 rounded">
    <div>
      <h4 className="font-semibold text-sm sm:text-base">{activity.title}</h4>
      <p className="text-xs sm:text-sm text-gray-600">{new Date(parseInt(activity.timestamp) * 1000).toLocaleString()}</p>
    </div>
    <span className={`mt-2 sm:mt-0 px-2 py-1 rounded text-xs sm:text-sm ${
      activity.statusDisplay === 'Accepted' ? 'bg-green-100 text-green-800' :
      activity.statusDisplay === 'Wrong Answer' ? 'bg-red-100 text-red-800' :
      'bg-yellow-100 text-yellow-800'
    }`}>
      {activity.statusDisplay}
    </span>
  </div>
);

export default LeetCodeProfile;