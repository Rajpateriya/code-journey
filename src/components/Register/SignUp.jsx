import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Code } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    hackerRank: '',
    leetCode: '',
    gfg: '',
    codeChef: '',
    github:'',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    // Check for mandatory fields
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('https://code-journey-backend-1.onrender.com/signup', formData);
      toast(response.data.message);
      localStorage.setItem('username', formData.username);
      navigate(`/profile/${formData.username}`);
    } catch (error) {
      toast(error.response.data.error);
    }
  };

  return (
    <div className="h-full flex bg-gradient-to-br from-gray-800 to-gray-700">
      <div className="grid md:grid-cols-2 w-full bg-gradient-to-br from-gray-800 to-gray-700 flex-1">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex flex-col items-center justify-center p-8 md:p-12 lg:p-16"
        >
          <div className="max-w-md space-y-6 text-white">
            <h1 className="text-4xl font-bold">Welcome to <br /> <span className='text-red-500'>Code-Journey</span> !!</h1>
            <p className="text-xl text-red-200">From Novice to Pro in the World of Code.</p>
            <motion.img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79d88f102686225.624f64899101f.jpeg"
              width="500"
              height="400"
              alt="Login Illustration"
              className="w-full max-w-[400px] rounded-lg shadow-2xl"
              style={{ aspectRatio: '500 / 400', objectFit: 'cover' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-4 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg border bg-white/10 backdrop-blur-md text-white shadow-xl w-full max-w-md p-8"
          >
            <div className="text-center space-y-2 mb-6">
              <h3 className="text-3xl font-bold">Create an account</h3>
              {/* <p className="text-lg text-gray-300">Fill out the form to get started.</p> */}
            </div>

            <form className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-4 md:gap-y-6" onSubmit={handleSubmit}>
              <InputField 
                icon={<User />} 
                id="name" 
                placeholder="Full Name" 
                value={formData.name} 
                onChange={handleChange} 
                error={errors.name}
              />
              <InputField 
                icon={<User />} 
                id="username" 
                placeholder="Username" 
                value={formData.username} 
                onChange={handleChange} 
                error={errors.username}
              />
              <InputField 
                icon={<Mail />} 
                id="email" 
                placeholder="Email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                error={errors.email}
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
                placeholder="Gfg Username" 
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
                icon={<Code />} 
                id="github" 
                placeholder="Github Username" 
                value={formData.github} 
                onChange={handleChange} 
              />
              <InputField 
                icon={<Lock />} 
                id="password" 
                placeholder="Password" 
                type="password" 
                value={formData.password} 
                onChange={handleChange} 
                error={errors.password}
              />

              <div className="md:col-span-2">
                <motion.button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-md font-semibold text-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  Sign Up
                </motion.button>

                {isHovering && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-sm text-gray-300 mt-2"
                  >
                    Click to join our community!
                  </motion.div>
                )}
              </div>
            </form>

            <div className="text-center mt-4">
              <Link to="/login" className="text-gray-300 hover:text-white transition-colors duration-300">
                Already registered? Login
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ icon, id, placeholder, type = "text", value, onChange, error }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      {icon}
    </span>
    <input
      className={`w-full bg-white/5 border rounded-md py-2 pl-10 pr-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${error ? 'border-red-500' : 'border-gray-600'}`}
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
    {error && (
      <div className="absolute top-full left-0 text-red-500 text-sm mt-1">{error}</div>
    )}
  </div>
);

export default SignUp;
