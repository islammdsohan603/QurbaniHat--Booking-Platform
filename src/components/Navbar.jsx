import Image from 'next/image';
import logo from '@/images/logo.png';
import Link from 'next/link';
import NavLinksPage from './NavLinks';
import DarkLightPages from './DarkLight';
import MenuBar from './MenuBar';

const NavbarPages = () => {
  return (
    <div className="sticky top-0 z-50">
      <header className="bg-slate-900 border-b border-yellow-500/10 backdrop-blur-md">
        <nav className="w-10/12  mx-auto flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group ">
            <div className="relative">
              <Image
                src={logo}
                alt="AnimalWorld logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-yellow-500 p-0.5 bg-white/80 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6"
              />
            </div>
            <span className="font-bold text-lg tracking-tight text-white hidden md:block">
              Qurbani<span className="text-yellow-400">Hat</span>
            </span>
          </Link>

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
            {/* Mobile Hamburger */}
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
