'use client';

import {
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Button,
} from '@heroui/react';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const UpdataProfilePage = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get('name');
    const image = formData.get('photo');

    try {
      const { data, error } = await authClient.updateUser({
        name,

        image,
      });

      if (data) {
        toast.success('Profile Updated Successfully ✅');

        router.push('/profile');
        router.refresh();
      }

      if (error) {
        toast.error('Profile update failed');
        return;
      }
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Update Profile
        </h1>

        <Form onSubmit={onSubmit} className="space-y-5">
          <TextField isRequired name="name" type="text">
            <Label className="text-zinc-300 mb-1 block">Full Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField isRequired name="photo" type="url">
            <Label className="text-zinc-300 mb-1 block">Photo URL</Label>
            <Input placeholder="https://example.com/photo.jpg" />
            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="w-full bg-sky-600 text-white rounded-2xl py-6"
          >
            Update Profile
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdataProfilePage;
