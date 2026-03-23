// components/Navbar/Logo.jsx
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" aria-label="Home" className="flex items-center">
    <img
      src="/concept/hikewikenewlogo.svg"
      alt="HikeWiki Logo"
      className="h-[22px] sm:h-[25px] w-[120px] sm:w-[145px] object-contain"
      draggable={false}
      fetchpriority="high"
      loading="eager"
    />
  </Link>
);

export default Logo;