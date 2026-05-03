import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarPages from "@/components/Navbar";
import FooterPage from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'QurbaniHat | Premium Qurbani Animals Marketplace',
    template: ' QurbaniHat',
  },
  description:
    'QurbaniHat is a trusted premium Qurbani animals marketplace in Bangladesh. Explore healthy cows, goats, sheep, and verified livestock with secure booking and professional experience.',

  keywords: [
    'QurbaniHat',
    'Qurbani animals',
    'Cow marketplace Bangladesh',
    'Buy cow online',
    'Qurbani cow',
    'Goat marketplace',
    'Livestock marketplace',
    'Bangladesh Qurbani',
    'Premium cattle',
    'Online animal marketplace',
  ],



};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarPages />
        {children}
        <FooterPage />

        <ToastContainer />
      </body>
    </html>
  );
}
