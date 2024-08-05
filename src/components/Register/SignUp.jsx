// import React from 'react';

// const SignUp = () => {
//   return (
//     <div className="grid md:grid-cols-2 min-h-screen w-full">
//       {/* Left Side */}
//       <div className="flex flex-col items-center justify-center bg-primary p-8 md:p-12 lg:p-16">
//         <div className="max-w-md space-y-4">
//           <h1 className="text-3xl font-bold text-primary-foreground">
//             Welcome to our platform!
//           </h1>
//           <p className="text-primary-foreground/80">
//             Sign up to access our powerful tools and resources.
//           </p>
//           <img
//             src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79d88f102686225.624f64899101f.jpeg"
//             width="500"
//             height="400"
//             alt="Login Illustration"
//             className="w-full max-w-[400px]"
//             style={{ aspectRatio: '500 / 400', objectFit: 'cover' }}
//           />
//         </div>
//       </div>
//       {/* Right Side */}
//       <div className="flex items-center justify-center p-8 md:p-12 lg:p-16">
//         <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md space-y-4">
//           <div className="flex flex-col space-y-1.5 p-6">
//             <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
//               Create an account
//             </h3>
//             <p className="text-sm text-muted-foreground">
//               Fill out the form below to get started.
//             </p>
//           </div>
//           <div className="p-6 space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <label
//                   className="text-sm font-medium leading-none"
//                   htmlFor="name"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-shadow duration-300 hover:shadow-lg"
//                   id="name"
//                   placeholder="John Doe"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label
//                   className="text-sm font-medium leading-none"
//                   htmlFor="email"
//                 >
//                   Email
//                 </label>
//                 <input
//                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-shadow duration-300 hover:shadow-lg"
//                   id="email"
//                   placeholder="john@example.com"
//                   type="email"
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <label
//                   className="text-sm font-medium leading-none"
//                   htmlFor="hackerrank"
//                 >
//                   HackerRank
//                 </label>
//                 <input
//                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-shadow duration-300 hover:shadow-lg"
//                   id="hackerrank"
//                   placeholder="@johnDoe"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label
//                   className="text-sm font-medium leading-none"
//                   htmlFor="leetcode"
//                 >
//                   LeetCode
//                 </label>
//                 <input
//                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-shadow duration-300 hover:shadow-lg"
//                   id="leetcode"
//                   placeholder="@johnDoe"
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <label
//                   className="text-sm font-medium leading-none"
//                   htmlFor="gfg"
//                 >
//                   GeeksForGeeks
//                 </label>
//                 <input
//                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-shadow duration-300 hover:shadow-lg"
//                   id="gfg"
//                   placeholder="@johnDoe"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label
//                   className="text-sm font-medium leading-none"
//                   htmlFor="codechef"
//                 >
//                   CodeChef
//                 </label>
//                 <input
//                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-shadow duration-300 hover:shadow-lg"
//                   id="codechef"
//                   placeholder="@johnDoe"
//                 />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <label
//                 className="text-sm font-medium leading-none"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <input
//                 className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-shadow duration-300 hover:shadow-lg"
//                 id="password"
//                 type="password"
//               />
//             </div>
//           </div>
//           <div className="flex items-center p-6 space-x-4">
//             <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-300 h-10 px-4 py-2 w-full">
//               Sign Up
//             </button>
//             <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-primary hover:underline">
//               Already registered? Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Code } from 'lucide-react';

const SignUp = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="grid md:grid-cols-2 min-h-screen w-full bg-gradient-to-br from-gray-800 to-gray-600">
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
      <div className="flex items-center justify-center p-8 md:p-12 lg:p-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg border bg-white/10 backdrop-blur-md text-white shadow-xl w-full max-w-md space-y-6 p-8"
        >
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold">Create an account</h3>
            <p className="text-lg text-gray-300">Fill out the form to get started.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <InputField icon={<User />} id="name" placeholder="Full Name" />
              <InputField icon={<Mail />} id="email" placeholder="Email" type="email" />
              <InputField icon={<Code />} id="hackerrank" placeholder="HackerRank Username" />
              <InputField icon={<Code />} id="leetcode" placeholder="LeetCode Username" />
              <InputField icon={<Code />} id="gfg" placeholder="GeeksForGeeks Username" />
              <InputField icon={<Code />} id="codechef" placeholder="CodeChef Username" />
              <InputField icon={<Lock />} id="password" placeholder="Password" type="password" />
            </div>

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
          </form>

          <div className="text-center">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Already registered? Login
            </a>
          </div>
        </motion.div>
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