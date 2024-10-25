// src/components/StartPage.tsx
'use client';
import Link from 'next/link';

const StartPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-800 p-8">
      <div className="text-center space-y-8  ">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Welcome to Travoger</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto py-8">
          Discover the best of what we offer. Begin your journey with us.
        </p>
        <Link href="/trip_planner">
          <button className="px-8 py-3 bg-black text-gray-200 font-semibold rounded-md hover:bg-gray-600 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
