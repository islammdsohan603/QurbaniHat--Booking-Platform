'use client';

import { Input, Label, Button } from '@heroui/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

const OrderFormPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    toast.success('Order successfully placed ✅');

    e.target.reset();

    setLoading(false);

    setTimeout(() => {
      router.push('/allanimals');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex p-3 rounded-2xl bg-sky-500/20 text-sky-400 mb-4">
              <ShoppingCart size={32} />
            </div>
            <h1 className="text-4xl font-bold text-white">Place Your Order</h1>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <Label className="block text-white">Full Name</Label>
              <Input name="name" required className={'w-full'} />
            </div>

            <div>
              <Label className="block text-white">Email</Label>
              <Input name="email" type="email" required className={'w-full'} />
            </div>

            <div>
              <Label className="block text-white">Phone</Label>
              <Input
                maxLength={11}
                name="phone"
                required
                className={'w-full'}
              />
            </div>

            <div>
              <Label className="block text-white">Address</Label>
              <Input name="address" required className={'w-full'} />
            </div>

            <Button
              type="submit"
              isLoading={loading}
              className="w-full py-6 bg-sky-600"
            >
              {loading ? 'Processing...' : 'Confirm Order Now'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderFormPage;
