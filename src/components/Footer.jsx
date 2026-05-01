import Image from 'next/image';
import Link from 'next/link';

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';

import logo from '@/images/logo.png';
import { SiGithub } from 'react-icons/si';

const FooterPage = () => {
  return (
    <footer className="bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 text-white border-t border-white/10">
      <div className="w-10/12 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 group mb-5">
              <Image
                src={logo}
                alt="QurbaniHat logo"
                width={45}
                height={45}
                className="rounded-full border-2 border-yellow-500 bg-white p-1 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6"
              />

              <h2 className="text-2xl font-bold tracking-tight">
                Qurbani<span className="text-yellow-400">Hat</span>
              </h2>
            </Link>

            <p className="text-slate-400 leading-relaxed text-sm">
              Find healthy and premium quality animals for Qurbani with trusted
              sellers across Bangladesh.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://github.com/islammdsohan603"
                type="blank"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <SiGithub />
              </Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-yellow-400">
              Information
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/allanimals"
                  className="hover:text-white transition"
                >
                  All Animals
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-yellow-400">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white transition">
                  Seller Policy
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-yellow-400">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <p>Tangail, Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-400" />
                <p>+880 1643223840</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" />
                <p>islammdsohan603@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 QurbaniHat. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Designed with ❤️ for animal marketplace
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
