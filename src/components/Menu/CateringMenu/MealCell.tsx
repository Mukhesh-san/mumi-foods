import React from 'react';

type MealCellProps = {
  meal: string;
  isHeader?: boolean;
};

export default function MealCell({ meal, isHeader = false }: MealCellProps) {
  const baseClasses = "p-4 text-center break-words";
  const cellClasses = isHeader 
    ? `${baseClasses} font-bold bg-primary-300 text-gray-800`
    : `${baseClasses} bg-white/90 hover:bg-primary-50 transition-colors`;

  return (
    <td className={cellClasses}>
      {meal}
    </td>
  );
}