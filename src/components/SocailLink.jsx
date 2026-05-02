import { authClient } from '@/lib/auth-client';

import React from 'react';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SocailLink = () => {
  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/',
    });
    toast.success('Succsfully');
  };

  return (
    <div className="w-full space-y-4">
      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-white/10"></div>
        <p className="text-sm text-zinc-500">Or continue with</p>
        <div className="flex-1 h-px bg-white/10"></div>
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-1 gap-4">
        {/* Google */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center cursor-pointer justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/40 transition-all duration-300 py-3 text-white font-medium backdrop-blur-md"
        >
          <FaGoogle className="text-red-400 text-lg" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SocailLink;
