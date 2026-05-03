'use client';

import { ArrowUpDown } from 'lucide-react';

const CatgoryPricePage = ({ sortOrder, handleSort, total }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
      <div>
        <h1 className="text-4xl font-bold text-white">Sort by Price</h1>
        <p className="text-slate-200 mt-1 text-sm">
          {total} টি পশু পাওয়া গেছে
        </p>
      </div>

      <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-2.5 w-fit shadow-sm">
        <ArrowUpDown size={16} className="text-slate-400" />

        <select
          value={sortOrder}
          onChange={e => handleSort(e.target.value)}
          className="text-sm text-slate-100 outline-none cursor-pointer  "
        >
          <option value="default" className="text-black">
            Default
          </option>
          <option value="low" className="text-black">
            Price: Low to High
          </option>
          <option value="high" className="text-black">
            Price: High to Low
          </option>
        </select>
      </div>
    </div>
  );
};

export default CatgoryPricePage;
