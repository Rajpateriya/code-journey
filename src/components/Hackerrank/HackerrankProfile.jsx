import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaUserGraduate, FaBriefcase, FaAward, FaCertificate, FaLink, FaFileAlt } from "react-icons/fa";

function Profile({ userData }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <img
        src={userData.avatar || "default-avatar.png"}
        alt={userData.name}
        className="w-24 h-24 rounded-full mb-4 mx-auto"
      />
      <h1 className="text-2xl font-bold text-center text-gray-800">{userData.name}</h1>
      <p className="text-gray-600 mb-4 text-center">{userData.title}</p>
      <div className="space-y-2">
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Follow
        </button>
        <button className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
          Message
        </button>
      </div>
    </div>
  );
}


function Badges({ badges }) {
  const getBadgeColor = (badge) => {
    const colors = {
      "Problem Solving": "bg-pink-400",
      "C++": "bg-red-400",
      "Java": "bg-yellow-400",
      "Python": "bg-green-400",
      "SQL": "bg-blue-400",
    };
    return colors[badge] || "bg-gray-400";
  };

  const getStars = (badge) => {
    const stars = {
      "Problem Solving": 2,
      "C++": 3,
      "Java": 5,
      "Python": 4,
      "SQL": 4,
    };
    return "★".repeat(stars[badge] || 0) + "☆".repeat(5 - (stars[badge] || 0));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <FaAward className="mr-2 text-blue-500" />
        Badges
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`${getBadgeColor(badge)} rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
          >
            <div className="text-white text-center">
              <div className="font-bold mb-1">{badge}</div>
              <div className="text-xs">{getStars(badge)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Certifications({ certifications }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <FaCertificate className="mr-2 text-blue-500" />
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-4 rounded-lg flex flex-col shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-sm font-bold">{cert}</div>
            <div className="text-xs mt-1">Verified</div>
            <div className="text-right mt-auto">
              <span className="text-xs bg-blue-700 px-2 py-1 rounded hover:bg-blue-800 cursor-pointer">Details</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkExperience({ experiences }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <FaBriefcase className="mr-2 text-blue-500" />
        Work Experience
      </h2>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-gray-50 p-4 rounded-lg mb-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <h3 className="font-bold text-gray-800">{exp.title}</h3>
          <p className="text-gray-600">
            {exp.company} • {exp.date}
          </p>
          <p className="mt-2 text-gray-700">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}

function Education({ education }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <FaUserGraduate className="mr-2 text-blue-500" />
        Education
      </h2>
      {education.map((edu, index) => (
        <div
          key={index}
          className="bg-gray-50 p-4 rounded-lg mb-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <h3 className="font-bold text-gray-800">{edu.institution}</h3>
          <p className="text-gray-700">{edu.degree}</p>
          <p className="text-gray-600">{edu.date}</p>
        </div>
      ))}
    </div>
  );
}

function Links({ links }) {
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case "linkedin": return <FaLinkedin className="mr-2" />;
      case "github": return <FaGithub className="mr-2" />;
      default: return <FaLink className="mr-2" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-blue-600 hover:text-blue-800 flex items-center"
          >
            {getIcon(link.name)}
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function HackerrankProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData({
      name: "Raj Pateriya",
      title: "Java || Web Developer || Python",
      badges: ["Problem Solving", "C++", "Java", "Python", "SQL"],
      certifications: [
        "Java Basic",
        "Python Basic",
        "JavaScript Basic",
        "SQL Basic",
        "CSS Basic",
      ],
      workExperience: [
        {
          title: "Java Development Intern",
          company: "Oasis Infobyte",
          date: "November 2022 - December 2022",
          description:
            "I was a project Intern in java development at this organization. It was a one month internship program. I learned a lot during this period and it boost my confidence to work and deal with real time projects.",
        },
      ],
      education: [
        {
          institution: "Rajiv Gandhi Technical University,Bhopal",
          degree: "Computer Science & Engineering, B.Tech",
          date: "September 2020 - Present",
        },
      ],
      links: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/raj-pateriya-39424225",
        },
        { name: "Github", url: "https://github.com/Rajpateriya" },
      ],
    });
  }, []);

  if (!userData) return <div className="text-gray-800">Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <Profile userData={userData} />
          <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-gray-800 font-bold mb-2 flex items-center">
              <FaFileAlt className="mr-2 text-blue-500" />
              My Resume
            </h3>
            <a href="#" className="text-blue-500 hover:underline">Raj_Paterya_Resume.pdf</a>
          </div>
        </div>
        <div className="lg:col-span-3 space-y-8">
          <Badges badges={userData.badges} />
          <Certifications certifications={userData.certifications} />
          <WorkExperience experiences={userData.workExperience} />
          <Education education={userData.education} />
          <Links links={userData.links} />
        </div>
      </div>
    </div>
  );
}

export default HackerrankProfile;