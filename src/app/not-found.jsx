import Link from 'next/link';
import { Home, SearchX } from 'lucide-react';

const NotfoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 via-white to-slate-100 px-6">
      <div className="max-w-xl w-full bg-white border border-slate-200 rounded-3xl shadow-xl p-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center shadow-inner">
            <SearchX className="w-12 h-12 text-slate-500" />
          </div>
        </div>

        <h1 className="text-6xl font-extrabold text-slate-900 mb-3">404</h1>

        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          No Data Found
        </h2>

        <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto mb-8">
          Sorry, the page or animal you are looking for does not exist. It may
          have been removed or the link might be incorrect.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-all duration-300 hover:scale-105"
        >
          <Home size={18} />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotfoundPage;
