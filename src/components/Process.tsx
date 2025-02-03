import React from 'react';
import { ChefHat, Clock, Truck } from 'lucide-react';

const steps = [
  {
    icon: <ChefHat className="h-12 w-12" />,
    title: "1. Fresh Preparation",
    description: "Every dish is freshly prepared in our cloud kitchen by our expert chef with premium ingredients."
  },
  {
    icon: <Clock className="h-12 w-12" />,
    title: "2. Flexible Timing",
    description: "Choose your preferred meal time. We offer breakfast, lunch, dinner, and mini-meals delivery."
  },
  {
    icon: <Truck className="h-12 w-12" />,
    title: "3. Swift Delivery",
    description: "Hot and fresh meals delivered right to your doorstep within Madurai city limits."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-forest-800 to-forest-600">
          How Our Cloud Kitchen Works
        </h2>
        <p className="text-center text-forest-700 mb-12 font-serif max-w-2xl mx-auto">
          Experience the convenience of home-cooked meals prepared with love and delivered fresh to your doorstep.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="backdrop-blur-md bg-white/95 rounded-2xl border border-forest-200/20 p-8 text-center shadow-lg">
              <div className="text-forest-600 flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-forest-800">{step.title}</h3>
              <p className="text-forest-600 font-serif">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}