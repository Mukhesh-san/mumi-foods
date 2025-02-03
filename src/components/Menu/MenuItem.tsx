import React from 'react';

type MenuItemProps = {
  name: string;
  description: string;
  price: number;
  image: string;
  dietary?: string[];
};

export default function MenuItem({ name, description, price, image, dietary = [] }: MenuItemProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img 
        src={image} 
        alt={name} 
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{name}</h3>
          <span className="text-primary-600 font-semibold">${price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        {dietary.length > 0 && (
          <div className="flex gap-2">
            {dietary.map((item) => (
              <span 
                key={item} 
                className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}