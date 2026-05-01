'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Avatar } from '@heroui/react';

import logo from '@/images/logo.png';
import NavLinksPage from './NavLinks';
import DarkLightPages from './DarkLight';
import MenuBar from './MenuBar';
import { authClient } from '@/lib/auth-client';

const NavbarPages = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handleLogOut = async () => {
    const data = await authClient.signOut();
  };

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-slate-900/95 border-b border-yellow-500/10 backdrop-blur-md">
        <nav className="w-10/12 mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src={logo}
              alt="QurbaniHat logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-yellow-500 p-0.5 bg-white/80 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6"
            />

            <span className="font-bold text-lg tracking-tight text-white hidden md:block">
              Qurbani<span className="text-yellow-400">Hat</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            <li>
              <NavLinksPage href="/">Home</NavLinksPage>
            </li>
            <li>
              <NavLinksPage href="/allanimals">All Animals</NavLinksPage>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <DarkLightPages />

            {isPending ? (
              <div className="w-8 h-8 rounded-full border-2 border-slate-600 border-t-yellow-400 animate-spin"></div>
            ) : user ? (
              <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <Avatar src={user.image} alt={user.name} className="w-9 h-9" />

                <div className="leading-tight">
                  <p className="text-sm font-medium text-white">{user.name}</p>
                  <p className="text-xs text-slate-400">Welcome Back</p>
                </div>

                <button
                  onClick={handleLogOut}
                  className="bg-red-400 px-4 py-1 rounded-2xl cursor-pointer"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Link
                  href="/signin"
                  className="text-sm font-semibold px-4 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all duration-200 hover:-translate-y-px"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="text-sm font-semibold px-4 py-1.5 rounded-lg border border-green-600/60 text-white hover:bg-green-600/10 hover:border-green-500 transition-all duration-200 hover:-translate-y-px"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Menu */}
            <div className="md:hidden">
              <MenuBar />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavbarPages;
