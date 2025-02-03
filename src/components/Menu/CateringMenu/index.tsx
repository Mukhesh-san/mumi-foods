import React from 'react';
import { weeklyMenu } from './menuData';
import DayCard from './DayCard';
import AnimatedSection from '../../common/AnimatedSection';

export default function CateringMenu() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Object.entries(weeklyMenu).map(([day, menu], index) => (
        <AnimatedSection key={day} delay={index * 100}>
          <DayCard day={day} menu={menu} />
        </AnimatedSection>
      ))}
    </div>
  );
}