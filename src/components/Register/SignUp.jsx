import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Code } from 'lucide-react';
import {Link}  from 'react-router-dom';

const SignUp = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="h-screen flex  bg-gradient-to-br from-gray-800 to-gray-600">
      <div className="grid md:grid-cols-2 w-full bg-gradient-to-br from-gray-800 to-gray-600 flex-1">
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center p-8 md:p-12 lg:p-16"
        >
          <div className="max-w-md space-y-6 text-white">
            <h1 className="text-4xl font-bold">Welcome to our platform!</h1>
            <p className="text-xl">Sign up to access our powerful tools and resources.</p>
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
              <p className="text-lg text-gray-300">Fill out the form to get started.</p>
            </div>

            <form className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-4 md:gap-y-6">
              <InputField icon={<User />} id="name" placeholder="Full Name" />
              <InputField icon={<User />} id="name" placeholder="Username" />
              <InputField icon={<Mail />} id="email" placeholder="Email" type="Email" />
              <InputField icon={<Code />} id="hackerrank" placeholder="HackerRank " />
              <InputField icon={<Code />} id="leetcode" placeholder="LeetCode " />
              <InputField icon={<Code />} id="gfg" placeholder="GeeksForGeeks " />
              <InputField icon={<Code />} id="codechef" placeholder="CodeChef " />
              <InputField icon={<Lock />} id="password" placeholder="Password" type="password" />

              <div className="md:col-span-2">
                <motion.button 
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

const InputField = ({ icon, id, placeholder, type = "text" }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      {icon}
    </span>
    <input
      className="w-full bg-white/5 border border-gray-600 rounded-md py-2 pl-10 pr-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
      id={id}
      placeholder={placeholder}
      type={type}
    />
  </div>
);

export default SignUp;
