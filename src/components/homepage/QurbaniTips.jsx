'use client';

import { motion } from 'framer-motion';

const tips = [
  {
    id: 1,
    title: 'দাঁত পরীক্ষা করুন',
    description:
      'দাঁত দেখে পশুর বয়স নির্ধারণ করুন। কুরবানির জন্য কমপক্ষে ২ বছর বয়স হওয়া আবশ্যক।',
  },
  {
    id: 2,
    title: 'চোখ দেখুন',
    description:
      'পরিষ্কার ও উজ্জ্বল চোখ সুস্থ পশুর লক্ষণ। ঘোলাটে বা পানিযুক্ত চোখ থাকলে এড়িয়ে চলুন।',
  },
  {
    id: 3,
    title: 'শরীরের গঠন',
    description:
      'পশুর শরীর সুগঠিত ও শক্তিশালী হতে হবে। হাড় বের হওয়া বা অতিরিক্ত ক্ষীণ পশু কিনবেন না।',
  },
  {
    id: 4,
    title: 'ওজন যাচাই',
    description: 'বাজারদর ও পরিবারের চাহিদা অনুযায়ী সঠিক ওজনের পশু বেছে নিন।',
  },
  {
    id: 5,
    title: 'খাবার অভ্যাস',
    description:
      'স্বাভাবিকভাবে ঘাস ও খাবার খাচ্ছে কিনা দেখুন। খেতে না চাইলে অসুস্থতার লক্ষণ হতে পারে।',
  },
  {
    id: 6,
    title: 'চলাফেরা লক্ষ্য করুন',
    description:
      'পশু যেন স্বাভাবিকভাবে হাঁটতে পারে। খোঁড়ানো বা দুর্বলভাবে দাঁড়ানো পশু এড়িয়ে চলুন।',
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="#C8964A" strokeWidth="1.2" />
    <path
      d="M5 8.2l2 2 4-4"
      stroke="#C8964A"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const QurbaniTips = () => {
  return (
    <section className="bg-[#0c1118] py-14 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-[11px] tracking-[4px] uppercase text-amber-500 mb-3"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            Qurbani Guide
          </p>

          <h2
            className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            সঠিক পশু চেনার উপায়
          </h2>

          <span className="block w-10 h-[3px] bg-amber-500 rounded-sm mx-auto mb-4" />

          <p
            className="text-sm text-white/50 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            কুরবানির পশু কেনার আগে এই ৬টি বিষয় অবশ্যই যাচাই করুন
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="group bg-[#131b24] border border-white/[0.07] hover:border-amber-500/40 hover:bg-[#161f2a] rounded-xl p-5 transition-all duration-300"
            >
              {/* Icon badge */}
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mb-4">
                <CheckIcon />
              </div>

              <h3
                className="text-sm font-semibold text-white mb-2 leading-snug"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {tip.title}
              </h3>

              <p
                className="text-xs text-white/50 leading-relaxed"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;
