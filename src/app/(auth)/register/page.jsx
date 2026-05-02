'use client';

import React from 'react';
import Link from 'next/link';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

import { User, Mail, Lock, Sparkles } from 'lucide-react';
import { toast } from 'react-toastify';

import SocailLink from '@/components/SocailLink';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const inputStyles = {
  base: 'w-full',
  inputWrapper:
    'bg-white/5 border border-white/10 hover:border-purple-500/50 focus-within:border-purple-500 rounded-xl px-4 py-3 h-auto',
  input: 'text-white placeholder:text-zinc-600 text-sm',
};

const RegisterPage = () => {
  const route = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      password: userData.password,
      email: userData.email,
      photo: userData.photo,
    });

    if (data) {
      toast.success('signUp succefully');
      route.push('/signin');
    }
    if (error) {
      toast.error('signUp Filed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 px-3 py-8 sm:px-6 lg:py-16">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl sm:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(139,92,246,0.15)]">
        {/* Left Side */}
        <div className="flex flex-col justify-center p-12 bg-linear-to-br from-purple-700/20 via-indigo-600/10 to-transparent border-r border-white/10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 text-purple-300 text-sm">
              <Sparkles size={16} />
              Qurbani Community
            </div>

            <h1 className="text-5xl font-black text-white leading-tight">
              Create Your QurbaniHat Account
            </h1>

            <div className="grid grid-cols-2 gap-4 pt-6"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-5 sm:p-8 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="mb-6 sm:mb-8 text-center">
              <h2 className="text-2xl sm:text-4xl font-bold text-white">
                Create Account
              </h2>
              <p className="text-zinc-400 mt-2 text-sm sm:text-base">
                Sign up and start Qurbani Order
              </p>
            </div>

            <Form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
              {/* Name */}
              <TextField isRequired name="name" type="text">
                <Label className="text-zinc-300 mb-1 block">Full Name</Label>
                <Input placeholder="Enter your full name" />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>

              {/* Email */}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={value =>
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ? 'Please enter a valid email'
                    : null
                }
              >
                <Label className="text-zinc-300 mb-1 block">
                  Email Address
                </Label>
                <Input placeholder="john@example.com" />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>

              {/* photo url-link */}

              <TextField isRequired name="photo" type="url">
                <Label className="text-zinc-300 mb-1 block">Photo URL</Label>

                <Input placeholder="https://example.com/photo.jpg" />

                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>
              {/* Password */}
              <TextField
                isRequired
                name="password"
                type="password"
                minLength={8}
                validate={value => {
                  if (value.length < 8)
                    return 'Password must be at least 8 characters';
                  if (!/[A-Z]/.test(value))
                    return 'Must include uppercase letter';
                  if (!/[0-9]/.test(value)) return 'Must include number';
                  return null;
                }}
              >
                <Label className="text-zinc-300 mb-1 block">Password</Label>
                <Input placeholder="Enter your password" />
                <Description className="text-zinc-500 text-xs mt-1">
                  Minimum 8 characters, 1 uppercase, 1 number
                </Description>
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>

              {/* Submit */}
              <div className="pt-3 sm:pt-4">
                <Button
                  type="submit"
                  className="w-full rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600 py-4 sm:py-6 text-white font-semibold hover:scale-[1.02] transition duration-300 shadow-lg"
                >
                  Create Account
                </Button>
              </div>
            </Form>
            {/* socail link */}

            <div>
              <SocailLink />
            </div>

            {/* Login Link */}
            <div className="text-center pt-2">
              <p className="text-zinc-400 text-sm">
                Already have an account?{' '}
                <Link
                  href="/signin"
                  className="text-purple-400 hover:text-purple-300 font-medium"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
