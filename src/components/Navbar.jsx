import React from 'react';
import Image from 'next/image';
import logo from '@/images/logo.png';
import Link from 'next/link';

const NavbarPages = () => {
  return (
    <div className="sticky top-0 z-50">
      {/* bg-gradient-to-r ব্যবহার করা হয়েছে সুন্দর রঙের মিশ্রণের জন্য */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg">
        <nav className="w-11/12 max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full border-2 border-yellow-500 p-1"
            />
            <span className="font-bold text-xl tracking-tight hidden md:block">
              AnimalWorld
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8 font-medium">
            <li className="relative group">
              <Link
                href={'/'}
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
              >
                Home
              </Link>
              {/* Hover Underline Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link
                href={'/animals'}
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
              >
                All Animals
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href={'/'}
              className="bg-green-700 px-4 py-0.5 rounded-2xl cursor-pointer"
            >
              Sign In
            </Link>

            <Link
              href={'/'}
              className="px-4 py-0.5 rounded-2xl cursor-pointer hover:bg-green-700 duration-500 border border-green-700"
            >
              Register
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavbarPages;
