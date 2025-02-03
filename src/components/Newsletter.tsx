import React from 'react';
import FloatingButton from './common/FloatingButton';

export default function Newsletter() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto backdrop-blur-md bg-white/95 rounded-2xl border border-forest-200/20 p-8 shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-forest-800 mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-forest-600 mb-6 font-serif">
              Get weekly updates on new menus, special offers, and cooking tips.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-forest-200 
                focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50
                w-full"
            />
            <FloatingButton className="w-full sm:w-auto whitespace-nowrap" variant="forest">
              Subscribe
            </FloatingButton>
          </form>
        </div>
      </div>
    </section>
  );
}