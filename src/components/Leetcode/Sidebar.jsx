import React from 'react';
import { User, MapPin, Briefcase, GraduationCap, Calendar, Github, Twitter, Linkedin, Globe } from 'lucide-react';

const Sidebar = ({ userData }) => {
  return (
    <div className=" bg-gray-800 shadow-lg overflow-hidden w-full md:w-64 lg:w-72">
      <div className="p-4 bg-black-400">
        <img
          src={userData.avatar}
          alt={userData.username}
          className="w-20 h-20 rounded-full mx-auto border-4 border-white"
        />
        <h2 className="text-xl font-bold text-center mt-2 text-white">{userData.name}</h2>
        <p className="text-sm text-center text-gray-300">{userData.username}</p>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-400 mb-2">About</p>
          <p className="text-sm text-gray-300">{userData.about}</p>
        </div>
        <div className="space-y-2">
          <InfoItem icon={<User size={16} />} text={`Ranking: ${userData.ranking}`} />
          <InfoItem icon={<MapPin size={16} />} text={userData.country} />
          {userData.company && (
            <InfoItem icon={<Briefcase size={16} />} text={userData.company} />
          )}
          <InfoItem icon={<GraduationCap size={16} />} text={userData.school} />
          <InfoItem icon={<Calendar size={16} />} text={`Joined: ${userData.birthday}`} />
        </div>
        <div className="mt-4">
          <p className="text-sm font-semibold text-gray-400 mb-2">Skills</p>
          <div className="flex flex-wrap gap-2">
            {userData.skillTags.map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-gray-700 rounded-full text-xs text-white">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <SocialLink icon={<Github size={16} />} href={userData.gitHub} text="GitHub" />
          <SocialLink icon={<Twitter size={16} />} href={userData.twitter} text="Twitter" />
          <SocialLink icon={<Linkedin size={16} />} href={userData.linkedIN} text="LinkedIn" />
          {userData.website.map((url, index) => (
            <SocialLink key={index} icon={<Globe size={16} />} href={url} text="Website" />
          ))}
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, text }) => (
  <div className="flex items-center space-x-2 text-sm text-gray-300">
    <span className="text-gray-400">{icon}</span>
    <span>{text}</span>
  </div>
);

const SocialLink = ({ icon, href, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-sm text-blue-400 hover:underline"
  >
    <span>{icon}</span>
    <span>{text}</span>
  </a>
);

export default Sidebar;