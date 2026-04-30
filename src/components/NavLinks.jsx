'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinksPage = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative inline-block px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 group
        ${
          isActive
            ? 'text-yellow-400'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
    >
      {children}
      <span
        className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-yellow-400 transition-all duration-300 origin-center
          ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
      />
    </Link>
  );
};

export default NavLinksPage;
