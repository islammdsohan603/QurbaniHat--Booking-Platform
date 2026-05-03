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
import React from 'react';

const UpdataProfilePage = () => {
  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedData = {
      name: formData.get('name'),
      photo: formData.get('photo'),
    };

    console.log(updatedData);

    toast.success('Profile Updated Successfully ✅');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Update Profile</h1>
          <p className="text-zinc-400 mt-2">Change your profile information</p>
        </div>

        <Form onSubmit={onSubmit} className="space-y-5">
          {/* Name */}
          <TextField isRequired name="name" type="text">
            <Label className="text-zinc-300 mb-1 block">Full Name</Label>
            <Input placeholder="Enter your full name" />
            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          {/* Photo URL */}
          <TextField isRequired name="photo" type="url">
            <Label className="text-zinc-300 mb-1 block">Photo URL</Label>
            <Input placeholder="https://example.com/photo.jpg" />
            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          {/* Button */}
          <Button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-500 text-white rounded-2xl py-6 font-semibold"
          >
            Update Profile
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdataProfilePage;
