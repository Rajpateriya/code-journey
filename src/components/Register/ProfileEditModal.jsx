import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { X, User, Mail, Code, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';

const ProfileEditModal = ({ isOpen, onClose, username }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hackerRank: '',
    leetCode: '',
    gfg: '',
    codeChef: '',
    github: '',
  });

  useEffect(() => {
    if (isOpen && username) {
      fetchUserData();
    }
  }, [isOpen, username]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`https://code-journey-backend-1.onrender.com/profile/${username}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('Failed to fetch user data');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://code-journey-backend-1.onrender.com/profile/${username}`, formData);
      toast.success('Profile updated successfully');
      onClose();
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 rounded-lg p-6 w-full max-w-md relative"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-white mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                icon={<User />}
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              <InputField
                icon={<Mail />}
                id="email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <InputField
                icon={<Code />}
                id="hackerRank"
                placeholder="HackerRank Username"
                value={formData.hackerRank}
                onChange={handleChange}
              />
              <InputField
                icon={<Code />}
                id="leetCode"
                placeholder="LeetCode Username"
                value={formData.leetCode}
                onChange={handleChange}
              />
              <InputField
                icon={<Code />}
                id="gfg"
                placeholder="GeeksforGeeks Username"
                value={formData.gfg}
                onChange={handleChange}
              />
              <InputField
                icon={<Code />}
                id="codeChef"
                placeholder="CodeChef Username"
                value={formData.codeChef}
                onChange={handleChange}
              />
              <InputField
                icon={<Github />}
                id="github"
                placeholder="GitHub Username"
                value={formData.github}
                onChange={handleChange}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-md font-semibold text-lg shadow-lg"
                type="submit"
              >
                Update Profile
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const InputField = ({ icon, id, placeholder, type = "text", value, onChange }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      {icon}
    </span>
    <input
      className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 pl-10 pr-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default ProfileEditModal;