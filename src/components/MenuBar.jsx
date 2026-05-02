'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Home,
  LayoutGrid,
  LogOut,
  User as UserIcon,
  MoonSun,
} from 'lucide-react';
import NavLinksPage from './NavLinks';
import DarkLightPages from './DarkLight';
import { Avatar, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const navItems = [
  { label: 'Home', href: '/', icon: <Home size={18} /> },
  { label: 'All Animals', href: '/allanimals', icon: <LayoutGrid size={18} /> },
];

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const route = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-300 active:scale-90 cursor-pointer"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-4 space-y-6">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider px-3 mb-2">
                Menu
              </p>
              {navItems.map(item => (
                <NavLinksPage
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-zinc-500 group-hover:text-sky-400 transition-colors">
                    {item.icon}
                  </span>
                  {item.label}
                </NavLinksPage>
              ))}
            </div>

            <div className="h-px bg-white/10 w-full" />

            <div className="flex flex-col gap-4">
              {isPending ? (
                <div className="flex justify-center py-4">
                  <div className="w-6 h-6 rounded-full border-2 border-white/10 border-t-sky-500 animate-spin"></div>
                </div>
              ) : user ? (
                <div className="flex flex-col items-center text-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <Link
                    href={`/profile`}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <Avatar className="ring-2 ring-sky-500/50 p-0.5">
                      <Avatar.Image
                        alt={user?.name}
                        src={user?.image}
                        referrerPolicy="no-referrer"
                      />
                      <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                    <div className="mt-2">
                      <p className="text-sm font-bold text-white">
                        {user?.name}
                      </p>
                      <p className="text-xs text-zinc-400">Logged In</p>
                    </div>
                  </Link>

                  <button
                    onClick={async () => {
                      await authClient.signOut();
                      route.push('/');
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 w-full py-2 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white rounded-xl text-xs font-semibold transition-all duration-300 border border-red-500/20"
                  >
                    <LogOut size={14} />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    href="/signin"
                    className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-center text-sm font-semibold transition-all duration-300 shadow-lg shadow-sky-900/20"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="w-full py-2.5 px-4 rounded-xl border border-white/10 hover:bg-white/5 text-zinc-300 text-center text-sm font-medium transition-all duration-300"
                  >
                    Create Account
                  </Link>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-zinc-500">Theme Settings</span>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                <DarkLightPages />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
