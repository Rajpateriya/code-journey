import React from 'react';
import { User, Lock } from 'lucide-react';

const Login = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="m-auto bg-gray-900 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
        <div className="p-8 md:w-1/2">
          <div className="text-white mb-8">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <User size={32} />
            </div>
            <h2 className="text-2xl font-bold">Welcome</h2>
            <p className="text-gray-400 mt-2">Sign in to your account</p>
          </div>
          <form>
            <div className="mb-4">
              <div className="flex items-center border-b border-gray-700 py-2">
                <User size={20} className="text-gray-400 mr-2" />
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Username" />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center border-b border-gray-700 py-2">
                <Lock size={20} className="text-gray-400 mr-2" />
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Password" />
              </div>
            </div>
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out" type="button">
              Login
            </button>
          </form>
          <div className="mt-4 flex justify-between text-sm text-gray-400">
            <a href="#" className="hover:text-white transition duration-300 ease-in-out">Remember me</a>
            <a href="#" className="hover:text-white transition duration-300 ease-in-out">Forgot password?</a>
          </div>
          <div className="mt-8 text-sm text-center text-gray-400">
            <span>Not a member? </span>
            <a href="#" className="text-white hover:underline">Sign up now</a>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 bg-cover bg-center rounded-r-xl" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVnP1dM-1qvWSv7qmerdKHCmaiO9A3aebFg&s')"}}>
          <div className="h-full flex items-center justify-center bg-black bg-opacity-50 rounded-r-xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Welcome.</h1>
              <p className="text-gray-300 px-8">Your journey begins here. Sign in to access your personalized experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;