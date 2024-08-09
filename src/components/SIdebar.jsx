import React from 'react';

function Side() {
  return (
    <>
      <aside className="flex flex-col items-center gap-6 border-r border-gray-700 bg-gray-800 p-6">
        <div className="w-full flex flex-col items-center gap-2 bg-gray-700 p-4 rounded-lg shadow-md">
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24 border-4 border-gray-900">
            <img
              className="aspect-square h-full w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTykU2BZtuaSIFXvPHnTJsaL-Z3NgRvA2sA&s"
              alt="User"
            />
          </span>
          <div className="text-center">
            <div className="font-semibold text-white">Raj Pateriya</div>
            <div className="text-gray-400">@rajpateriya</div>
          </div>
        </div>
        <div className="w-full text-sm font-medium text-gray-400 bg-gray-700 p-4 rounded-lg shadow-md">
          <p className="mb-2"><span className="text-white">Email:</span> rpateriya111@gmail.com</p>
          <p className="mb-2"><span className="text-white">Phone:</span> 9301720822</p>
          <p className="mb-2"><span className="text-white">Location:</span> Bhopal, India</p>
        </div>
      </aside>
    </>
  );
}

export default Side;



 {/* <nav className="grid w-full gap-2 text-sm font-medium">
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-700 hover:text-white"
            to="/profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Profile
          </Link>
        </nav> */}