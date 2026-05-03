'use client';

import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
import { Calendar, Mail, User } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

const ProfilePage = () => {
  const route = useRouter();

  const { data, isPending } = authClient.useSession();

  const user = data?.user;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <p className="animate-pulse text-lg">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Image
              src={user?.image || '/default-avatar.png'}
              alt="user"
              width={120}
              height={120}
              className="rounded-full border-4 border-purple-500 shadow-lg"
            />

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple-600 to-indigo-600 text-xs px-3 py-1 rounded-full text-white shadow">
              Active User
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white mt-4">
            {user?.name || 'No Name'}
          </h1>

          <p className="text-zinc-400 text-sm">{user?.email}</p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 text-purple-400 mb-2">
              <User size={18} />
              <span className="font-medium">Full Name</span>
            </div>
            <p className="text-zinc-300">{user?.name}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 text-indigo-400 mb-2">
              <Mail size={18} />
              <span className="font-medium">Email</span>
            </div>
            <p className="text-zinc-300">{user?.email}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 text-cyan-400 mb-2">
              <Calendar size={18} />
              <span className="font-medium">User ID</span>
            </div>
            <p className="text-zinc-300 text-sm break-all">{user?.id}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 text-pink-400 mb-2">
              ⭐ <span className="font-medium">Status</span>
            </div>
            <p className="text-zinc-300">Active</p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8">
          <Link href={`/updataprofile`}>
            <button className="w-full py-3 rounded-xl cursor-pointer bg-linear-to-r from-red-500 to-pink-600 text-white font-semibold hover:scale-[1.02] transition duration-300">
              Updata Profile
            </button>
          </Link>

          <button
            onClick={async () => {
              await authClient.signOut();
              route.push('/');

              toast.error('logOut');
            }}
            className="w-full py-3 rounded-xl cursor-pointer bg-linear-to-r from-red-500 to-pink-600 text-white font-semibold hover:scale-[1.02] transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
