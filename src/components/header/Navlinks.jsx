// components/Navbar/Navlinks.jsx
import React from "react";

const NavLinks = ({ onScrollTo, isMobile = false }) => {
  const links = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "COMMUNITY", label: "COMMUNITY" },
  ];

  const linkClasses = isMobile
    ? "block py-3 text-lg font-medium cursor-pointer text-white hover:text-orange-400 transition-colors border-b border-white/10 last:border-b-0"
    : "text-white/90 hover:text-white font-medium text-sm cursor-pointer hover:text-orange-400 transition-colors px-2 py-1 rounded-md hover:bg-white/5 tracking-wider";

  return (
    <ul className={`flex ${isMobile ? 'flex-col w-full space-y-1' : 'space-x-8 items-center'}`}>
      {links.map(({ id, label }) => (
        <li key={id} className={linkClasses} onClick={() => onScrollTo(id)}>
          {label}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;