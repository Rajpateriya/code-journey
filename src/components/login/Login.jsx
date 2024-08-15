import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';


const Login = () => {
  
  const [formData, setFormData] = useState({ username: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('https://code-journey-backend-1.onrender.com/login', formData);
      
      // Store the user data in localStorage
      localStorage.setItem('userData', JSON.stringify(response.data.user));
      
      toast.success('Login successful!');
     
      navigate(`/profile/${formData.username}`);
    } catch (error) {
      console.error('Login Error:', error);
      const errorMessage = error.response?.data?.error || error.message || 'An unexpected error occurred';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen flex bg-gradient-to-br from-gray-800 to-gray-600">
      <div className="flex items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border bg-white/10 backdrop-blur-md text-white shadow-xl w-full max-w-md p-8"
        >
          <div className="text-center space-y-2 mb-6">
            <h3 className="text-3xl font-bold">Login</h3>
            {/* <p className="text-lg text-gray-300">Enter your username..</p> */}
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputField 
              icon={<User />} 
              id="username" 
              placeholder="Username" 
              value={formData.username} 
              onChange={handleChange} 
            />

            <div>
              <motion.button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-md font-semibold text-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </motion.button>
            </div>
          </form>

          <div className="text-center mt-4">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
              Don't have an account? Sign Up
            </Link>
          </div>
        </motion.div>
        <Toaster/>
      </div>
    </div>
  );
};


// InputField Component Definition
const InputField = ({
  icon,
  id,
  placeholder,
  type = "text",
  value,
  onChange,
}) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      {icon}
    </span>
    <input
      className="w-full bg-white/5 border border-gray-600 rounded-md py-2 pl-10 pr-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Login;
