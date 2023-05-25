import { useState } from "react";
export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 py-4 px-8">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">Mood Mention</div>
          <button
            onClick={toggleNav}
            className="text-white focus:outline-none md:hidden"
          >
            {isNavOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-indigo-500 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-indigo-500 transition duration-300"
            >
              Happiest Person of the Week
            </a>
            <a
              href="#"
              className="text-white hover:text-indigo-500 transition duration-300"
            >
              About
            </a>
          </div>
        </div>
      </nav>
      {/* Gradient Overlay */}
      {isNavOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-75 z-50 flex items-center justify-center">
          <div className="p-8 rounded-lg">
            <button
              onClick={closeNav}
              className="text-gray-600 text-2xl absolute top-4 right-4 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-white text-2xl font-bold hover:underline"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white text-2xl font-bold hover:underline"
              >
                Happiest Person of the Week
              </a>
              <a
                href="#"
                className="text-white text-2xl font-bold hover:underline"
              >
                About
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
