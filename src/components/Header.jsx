import { useState } from 'react';
import { Link } from 'react-scroll'; // Using react-scroll for smooth scrolling
import eventLogo from '../assets/Nexus logo.png';
import partnerLogo from '../assets/GWECCC Logo.jpeg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full flex justify-between items-center p-4 bg-blue-600 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center">
        <img src={eventLogo} alt="Event Logo" className="h-8" />
        <img src={partnerLogo} alt="Partner Logo" className="h-8 ml-4" />
      </div>
      <nav className="hidden md:flex space-x-4">
        <Link to="about" smooth={true} duration={500} className="hover:cursor-pointer">About</Link>
        <Link to="schedule" smooth={true} duration={500} className="hover:cursor-pointer">Schedule</Link>
        <Link to="register" smooth={true} duration={500} className="hover:cursor-pointer">Register</Link>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
      {/* Mobile Navigation */}
      <div className={`absolute top-16 right-0 w-full bg-blue-600 text-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col p-4">
          <Link to="about" smooth={true} duration={500} onClick={toggleMobileMenu} className="py-2 hover:underline">About</Link>
          <Link to="schedule" smooth={true} duration={500} onClick={toggleMobileMenu} className="py-2 hover:underline">Schedule</Link>
          <Link to="register" smooth={true} duration={500} onClick={toggleMobileMenu} className="py-2 hover:underline">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
