import {
  CalendarDays,
  MapPin,
  Heart,
  Tag,
  Phone,
  Scale,
  Info,
  Banknote,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    'https://qurbani-hat-pink.vercel.app/animalsData.json',
    {
      cache: 'no-store',
    },
  );

  const data = await res.json();
  const animal = data.find(p => p.id === Number(id));

  if (!animal) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <h1 className="text-2xl font-bold text-red-400">
          ❌ Animal Data Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Main Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section: Image Gallery */}
          <div className="relative group   top-10">
            <div className="absolute -inset-4 bg-linear-to-r from-purple-600 to-indigo-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition duration-700"></div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-zinc-300">
                  Asking Price:{' '}
                </span>
                <span className="text-lg font-bold text-green-400">
                  ৳{animal.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Right Section: Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">
                  {animal.category}
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight bg-linear-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
                {animal.name}
              </h1>
              <p className="mt-6 text-zinc-400 leading-relaxed text-lg">
                {animal.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-green-500/20 text-green-400 group-hover:scale-110 transition-transform">
                    <Banknote size={24} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs uppercase tracking-wider font-medium">
                      Price
                    </p>
                    <h3 className="text-2xl font-bold">
                      ৳{animal.price.toLocaleString()}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                    <Scale size={24} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs uppercase tracking-wider font-medium">
                      Weight
                    </p>
                    <h3 className="text-2xl font-bold">{animal.weight} kg</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <DetailCard
                icon={<Tag size={18} />}
                label="Breed"
                value={animal.breed}
                color="text-purple-300"
              />
              <DetailCard
                icon={<CalendarDays size={18} />}
                label="Age"
                value={`${animal.age} Years`}
                color="text-indigo-300"
              />
              <DetailCard
                icon={<MapPin size={18} />}
                label="Location"
                value={animal.location}
                color="text-cyan-300"
              />
              <DetailCard
                icon={<Info size={18} />}
                label="Type"
                value={animal.type}
                color="text-orange-300"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 text-zinc-500 uppercase tracking-widest">
                Quick Identification
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-300 text-sm border border-zinc-700">
                  #{animal.type}
                </span>
                <span className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-300 text-sm border border-zinc-700">
                  #{animal.breed.replace(/\s+/g, '')}
                </span>
                <span className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-300 text-sm border border-zinc-700">
                  #{animal.location}
                </span>
              </div>
            </div>

            <Link href={`/order`}>
              <button className="group cursor-pointer relative w-full overflow-hidden rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/40 active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                  <Phone size={20} />
                  Contact Seller to Order
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-700 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailCard = ({ icon, label, value, color }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
    <div className={`flex items-center gap-2 mb-1 ${color}`}>
      {icon}
      <span className="text-xs font-medium uppercase tracking-wider">
        {label}
      </span>
    </div>
    <p className="text-zinc-100 font-semibold text-lg">{value}</p>
  </div>
);

export default AnimalsDetailsPage;
