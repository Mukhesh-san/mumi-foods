import React from 'react';
import { ArabianMenuItem } from './types';

const arabianMenu: ArabianMenuItem[] = [
  // Dishes
  { name: 'Chicken bbq', price: 310, category: 'dishes' },
  { name: 'Fish bbq', price: 300, category: 'dishes' },
  { name: 'Paneer,mushroom,Soya bbq', price: 300, category: 'dishes' },
  { name: 'Chicken shawarma', price: 150, category: 'dishes' },
  { name: 'Veg shawarma', price: 100, category: 'dishes' },
  { name: 'Falafel', price: 30, category: 'dishes' },
  { name: 'Falafel sandwich', price: 120, category: 'dishes' },
  // Appetizers
  { name: 'Bread with veg salads', price: 250, category: 'appetizers' },
  { name: 'Hummus', price: 70, category: 'appetizers' },
  { name: 'Tehini', price: 60, category: 'appetizers' },
  { name: 'Arabian pickle', price: 20, category: 'appetizers' },
  { name: 'French fries', price: 120, category: 'appetizers' }
];

export default function ArabianMenu() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-forest-800 to-forest-600">
          Arabian Specialties
        </h2>
        <p className="text-forest-600 font-serif">Authentic Middle Eastern flavors</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Main Dishes */}
        <div className="backdrop-blur-md bg-white/95 rounded-2xl border border-forest-200/20 p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-forest-800 to-forest-600">
            Main Dishes
          </h3>
          <div className="space-y-3">
            {arabianMenu
              .filter(item => item.category === 'dishes')
              .map((item) => (
                <div 
                  key={item.name} 
                  className="flex justify-between items-center"
                >
                  <span className="text-forest-700 font-serif">{item.name}</span>
                  <span className="font-bold text-forest-800">₹{item.price}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Appetizers */}
        <div className="backdrop-blur-md bg-white/95 rounded-2xl border border-forest-200/20 p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-forest-800 to-forest-600">
            Appetizers
          </h3>
          <div className="space-y-3">
            {arabianMenu
              .filter(item => item.category === 'appetizers')
              .map((item) => (
                <div 
                  key={item.name} 
                  className="flex justify-between items-center"
                >
                  <span className="text-forest-700 font-serif">{item.name}</span>
                  <span className="font-bold text-forest-800">₹{item.price}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}