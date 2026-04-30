'use client';

import { useState } from 'react';
import { TbMoonStars } from 'react-icons/tb';
import { LuSun } from 'react-icons/lu';

const DarkLightPages = () => {
  const [isDark, setIsDark] = useState(true);

  const toggle = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggle}
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/8 bg-white/4 text-slate-400 hover:text-yellow-300 hover:bg-yellow-500/8 transition-all duration-200"
      aria-label="Toggle dark mode"
    >
      {isDark ? <LuSun size={16} /> : <TbMoonStars size={16} />}
    </button>
  );
};

export default DarkLightPages;
