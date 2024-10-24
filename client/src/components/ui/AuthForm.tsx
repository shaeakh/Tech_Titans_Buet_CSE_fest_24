'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
// import { useToast } from "@/components/hooks/use-toast"
import { useToast } from '@/hooks/use-toast';

import { Button } from "@/components/ui/button"

export default function AuthForm({ type }:any) {
    const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      type === 'signup'
        ? 'http://localhost:5000/api/auth/signup'
        : 'http://localhost:5000/api/auth/login';

    const data =
      type === 'signup'
        ? formData
        : { email: formData.email, password: formData.password };

    try {
      const response = await axios.post(endpoint, data);

      if ((response.status === 201 || response.status === 200)&& type==='signup') {
        router.push('/login'); // Redirect to home page on success
      }else   if ((response.status === 201 || response.status === 200)&& type==='login') {
        router.push('/'); // Redirect to home page on success
      } 
       else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          {type === 'signup' ? 'Sign Up' : 'Login'}
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          {type === 'signup' && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-black focus:border-black"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-black focus:border-black"
            />
          </div>

          {type === 'signup' && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 mt-6 font-bold text-white bg-black rounded-md hover:bg-gray-800"
          >
            {type === 'signup' ? 'Sign Up' : 'Login'}
          </button>
              {/* <Button
     
      onClick={() => {
        toast({
            
          description: "Your message has been sent.",
        })
      }}
    >
   {type === 'signup' ? 'Sign Up' : 'Login'}
    </Button> */}
        </form>
      </div>
    </div>
  );
}