'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const tips = [
  {
    id: 1,
    title: 'Teeth Check করুন',
    description: 'দাঁত দেখে পশুর বয়স নির্ধারণ করুন। ২ বছরের বেশি হওয়া উচিত।',
  },
  {
    id: 2,
    title: 'চোখ পরিষ্কার কিনা দেখুন',
    description: 'চোখ পরিষ্কার ও উজ্জ্বল হলে পশু সুস্থ বোঝা যায়।',
  },
  {
    id: 3,
    title: 'শরীরের গঠন দেখুন',
    description: 'পশুর শরীর যেন সুগঠিত এবং শক্তিশালী হয়।',
  },
  {
    id: 4,
    title: 'ওজন যাচাই করুন',
    description: 'সঠিক ওজনের পশু নির্বাচন করুন, খুব বেশি দুর্বল না হয়।',
  },
  {
    id: 5,
    title: 'খাবার অভ্যাস দেখুন',
    description: 'স্বাভাবিকভাবে খাচ্ছে কিনা তা নিশ্চিত করুন।',
  },
  {
    id: 6,
    title: 'চলাফেরা লক্ষ্য করুন',
    description: 'পশু যেন ঠিকভাবে হাঁটতে পারে এবং অসুস্থ না হয়।',
  },
];

const QurbaniTips = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            🐄 Qurbani Tips
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            সঠিক পশু নির্বাচন করার জন্য নিচের গুরুত্বপূর্ণ টিপসগুলো অনুসরণ করুন
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {tip.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;
