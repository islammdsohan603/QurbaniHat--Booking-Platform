import { getData } from '@/fetchdata/page';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, BadgeDollarSign } from 'lucide-react';

const AnimalsPage = async () => {
  const data = await getData();
  const animals = data.slice(0, 4);

  return (
    <section className="bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 py-20">
      <div className="w-10/12   mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-300 text-sm font-medium backdrop-blur-md">
            Premium Collection
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
            Featured Qurbani Animals
          </h1>

          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover healthy, premium, and verified Qurbani animals carefully
            selected for a trusted and beautiful marketplace experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {animals.map(animal => (
            <div
              key={animal.id}
              className="group relative overflow-hidden rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_80px_rgba(234,179,8,0.12)]"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-500 text-black text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    ৳ {animal.price}
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <div className="bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs px-3 py-1 rounded-full">
                    {animal.category}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col h-64">
                <h2 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {animal.name}
                </h2>

                <p className="mt-2 text-slate-400 text-sm leading-relaxed line-clamp-2">
                  {animal.description}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin size={16} />
                    <span>{animal.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-yellow-400">
                    <BadgeDollarSign size={16} />
                    <span>Premium</span>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href={`/details/${animal.id}`}
                    className="group/button flex items-center justify-center gap-2 rounded-2xl bg-yellow-500 text-black font-semibold py-3 transition-all duration-300 hover:bg-yellow-400"
                  >
                    View Details
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-b from-yellow-500/5 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalsPage;
