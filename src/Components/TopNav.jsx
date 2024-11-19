import { useState, useEffect } from "react";
import { Navbar, Typography, IconButton, Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Admin from "./Admin"

const TopNav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:justify-center">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="land" className="flex items-center">
          Properties
        </a>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="about" className="flex items-center">
          About
        </a>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="w-full">
      <Navbar className="sticky text-black top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
            NobleHome Galle
          </Typography>
          <div className="flex-grow lg:flex lg:justify-center lg:items-center">
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
          {/* Replaced Avatar and IconButton with "ADMIN" text link */}
          <div className="flex items-center">
            <Link to="/admin">
              <Typography variant="small" color="blue-gray" className="cursor-pointer text-sm font-medium">
                ADMIN
              </Typography>
            </Link>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </Navbar>
    </div>
  );
};

export default TopNav;
