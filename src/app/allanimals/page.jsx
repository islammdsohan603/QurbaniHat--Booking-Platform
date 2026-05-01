'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getData } from '../../fetchdata/page';
import CatgoryPricePage from '@/components/CatgoryPrice';

const AllAnimalsPages = () => {
  const [animals, setAnimals] = useState([]);
  const [sortedAnimals, setSortedAnimals] = useState([]);
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    const loadData = async () => {
      const data = await getData();
      setAnimals(data);
      setSortedAnimals(data);
    };

    loadData();
  }, []);

  const handleSort = order => {
    setSortOrder(order);

    const copy = [...animals];

    if (order === 'low') {
      copy.sort((a, b) => a.price - b.price);
    } else if (order === 'high') {
      copy.sort((a, b) => b.price - a.price);
    }

    setSortedAnimals(order === 'default' ? animals : copy);
  };

  return (
    <div className="w-10/12 mx-auto py-10">
      <section className="mb-10">
        <CatgoryPricePage
          sortOrder={sortOrder}
          handleSort={handleSort}
          total={sortedAnimals.length}
        />
      </section>

      {sortedAnimals.length === 0 ? (
        <div className="flex justify-center items-center py-20">
          <h1 className="text-xl font-semibold text-slate-500 animate-pulse">
            <h1>Loading...</h1>
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedAnimals.map(animal => (
            <div
              key={animal.id}
              className="group relative bg-white rounded-3xl border border-slate-200 p-3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-slate-800 shadow-sm">
                  BDT: {animal.price}
                </div>
              </div>

              <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {animal.name}
                </h2>

                <p className="text-slate-500 text-sm mt-1">
                  Available for adoption
                </p>
              </div>

              <div className="flex justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={`/details/${animal.id}`}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAnimalsPages;
