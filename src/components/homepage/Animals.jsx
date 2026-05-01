import { getData } from '@/fetchdata/page';
import Image from 'next/image';
import Link from 'next/link';

const AnimalsPage = async () => {
  const data = await getData();
  const animals = data.slice(0, 4);

  return (
    <div>
      <div className=" w-10/12 mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Animals
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Discover our beautiful collection of animals. Each one is unique and
            looking for a loving home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {animals.map(animal => (
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
                  BDT:{animal.price}
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
      </div>
    </div>
  );
};

export default AnimalsPage;
