import React from 'react';
import { PricingPlan } from './types';

type PricingCardProps = {
  title: string;
  pricing: PricingPlan;
  type: 'normal' | 'diet';
};

export default function PricingCard({ title, pricing, type }: PricingCardProps) {
  return (
    <div className="backdrop-blur-md bg-white/95 rounded-2xl border border-forest-200/20 p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-forest-800">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${
          type === 'diet' ? 'bg-orange-100 text-orange-700' : 'bg-forest-100 text-forest-700'
        }`}>
          {type === 'diet' ? 'Diet' : 'Normal'}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-forest-600">Monthly</span>
          <span className="font-bold text-forest-800">₹{pricing.monthly}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-forest-600">Weekly</span>
          <span className="font-bold text-forest-800">₹{pricing.weekly}</span>
        </div>
      </div>
    </div>
  );
}