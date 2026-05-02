'use client';

import { Input, Label, Button } from '@heroui/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ShoppingCart, User, Mail, Phone, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

const OrderFormPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const orderData = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      phone: formData.get('phone')?.toString().trim(),
      address: formData.get('address')?.toString().trim(),
    };

    if (
      !orderData.name ||
      !orderData.email ||
      !orderData.phone ||
      !orderData.address
    ) {
      toast.error('All fields are required!');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);

        e.target.reset();

        router.push('/allanimals');
      } else {
        toast.error(data.message || 'Failed to place order.');
      }
    } catch (err) {
      console.error(' Order POST error →', err);
      toast.error('Network error  please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex p-3 rounded-2xl bg-sky-500/20 text-sky-400 mb-4">
              <ShoppingCart size={32} />
            </div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Place Your Order
            </h1>
            <p className="text-zinc-400 mt-2">
              Fill out the form below to reserve your animal.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-zinc-300">Full Name</Label>
              <Input
                name="name"
                placeholder="John Doe"
                variant="bordered"
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-zinc-300">Email Address</Label>
              <Input
                name="email"
                type="email"
                placeholder="john@example.com"
                variant="bordered"
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-zinc-300">Phone Number</Label>
              <Input
                name="phone"
                max={11}
                placeholder="01XXXXXXXXX"
                variant="bordered"
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-zinc-300">Full Address</Label>
              <Input
                name="address"
                placeholder="House, Road, Area, City"
                variant="bordered"
                className="w-full"
                required
              />
            </div>

            <Button
              type="submit"
              isLoading={loading}
              className="w-full py-7 bg-sky-600 hover:bg-sky-500 font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-sky-900/20 active:scale-95"
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
