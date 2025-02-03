import React from 'react';
import { DayMenu } from './types';

type DayCardProps = {
  day: string;
  menu: DayMenu;
};

export default function DayCard({ day, menu }: DayCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-primary-300 py-3 px-4">
        <h3 className="text-xl font-bold text-gray-800">{day}</h3>
      </div>
      <div className="p-4 space-y-4">
        {(Object.entries(menu) as [keyof DayMenu, string][]).map(([mealTime, dishes]) => (
          <div key={mealTime} className="space-y-1">
            <h4 className="font-semibold text-primary-600">{mealTime}</h4>
            <p className="text-gray-600 text-sm">{dishes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}