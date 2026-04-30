'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import NavLinksPage from './NavLinks';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'All Animals', href: '/animals' },
];

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="  relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg border cursor-pointer text-white border-gray-300 hover:bg-gray-700 transition"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <ul className="absolute right-0 px-4  mt-3 w-48 bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden z-50">
          {navItems.map(item => (
            <li key={item.href}>
              <NavLinksPage
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLinksPage>
            </li>
          ))}

          <div className="flex flex-col mt-2.5 pb-10 items-center gap-4">
            <Link
              href="/signin"
              className="text-sm font-semibold px-4 w-full py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all duration-200 hover:-translate-y-px"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-sm font-semibold px-4 py-1.5 w-full rounded-lg border border-green-600/60  hover:bg-green-600/10 hover:border-green-500 transition-all duration-200 hover:-translate-y-px"
            >
              Register
            </Link>
          </div>
        </ul>
      )}
    </div>
  );
};

export default MenuBar;
