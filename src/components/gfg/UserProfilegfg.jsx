import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Camera, Edit } from "lucide-react";
import Spinner from "../Spinner";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg ${className}`}>
    {children}
  </div>
);

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-md transition-colors duration-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Tab = ({ children, isActive, onClick }) => (
  <button
    className={`px-4 py-2 rounded-md transition-colors duration-200 ${
      isActive
        ? "bg-blue-500 text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const UserProfilegfg = ({ username }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("MEDIUM");

  const fetchData = async () => {
    try {
      const response = await fetch(`https://gfg-stats-api.onrender.com/${username}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError("Error fetching data: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchData();
    }
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

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">No User Found</h2>
          <p className="text-lg">We couldn't find a GFG user with the username `{username}`.</p>
          <p className="mt-4">Please check the username or try searching for another one.</p>
        </div>
      </div>
    );
  }

  const { info, solvedStats } = data;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonth = new Date().getMonth();

  const submissionData = monthNames.map((month, index) => ({
    name: month,
    submissions: index === currentMonth ? 3 : 0,
  }));

  const difficultyData = [
    { name: "School", value: solvedStats.school.count, color: "#FF6384" },
    { name: "Basic", value: solvedStats.basic.count, color: "#36A2EB" },
    { name: "Easy", value: solvedStats.easy.count, color: "#FFCE56" },
    { name: "Medium", value: solvedStats.medium.count, color: "#4BC0C0" },
    { name: "Hard", value: solvedStats.hard.count, color: "#9966FF" },
  ];

  const renderProblemList = (category) => {
    const problems = solvedStats[category.toLowerCase()].questions.slice(0, 6);
    return (
      <ul className="space-y-2">
        {problems.map((problem, index) => (
          <li key={index}>
            <a
              href={problem.questionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              {problem.question}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-gray-50 rounded-xl shadow-lg text-gray-800">
      <Card className="mb-8">
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <div className="relative mb-4 md:mb-0 md:mr-6">
                <img
                  src={info.profilePicture}
                  alt={info.userName}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                  <Camera size={20} className="text-gray-600" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold">{info.userName}</h2>
                <p className="text-gray-600">{info.institution}</p>
              </div>
            </div>
            <Button className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white">
              <Edit size={16} />
              <span>Edit Profile</span>
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Overall Coding Score", value: info.codingScore },
          { label: "Total Problems Solved", value: info.totalProblemsSolved },
          { label: "Monthly Coding Score", value: info.monthlyCodingScore },
          { label: "Current POTD Streak", value: `${info.currentStreak}/${info.maxStreak}` },
        ].map((item, index) => (
          <Card key={index} className="hover:shadow-xl transition-shadow duration-200">
            <div className="p-6">
              <div className="text-3xl font-bold mb-2">{item.value}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Submissions in current year</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={submissionData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="submissions" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Monthly Problem Solved</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={[{ name: "July", solved: 3 }]}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="solved" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Problem Difficulty</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {difficultyData.map((item) => (
                <Tab
                  key={item.name}
                  isActive={activeCategory === item.name.toUpperCase()}
                  onClick={() => setActiveCategory(item.name.toUpperCase())}
                >
                  {item.name} ({item.value})
                </Tab>
              ))}
            </div>
            {renderProblemList(activeCategory)}
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">
              Total Problems Solved: {info.totalProblemsSolved}
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={difficultyData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {difficultyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserProfilegfg;