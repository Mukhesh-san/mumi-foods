import React from 'react';
import MenuItem from './MenuItem';
import { MenuCategory } from './types';

type MenuSectionProps = {
  category: MenuCategory;
};

export default function MenuSection({ category }: MenuSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}