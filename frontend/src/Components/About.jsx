import React from 'react';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Support Page</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        Welcome to the support page. If you have any questions or need assistance, please feel free to reach out to us.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-2">Email: support@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </div>
  );
};
