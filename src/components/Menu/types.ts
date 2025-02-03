export type MenuItem = {
  name: string;
  description: string;
  price: number;
  image?: string;
  dietary?: string[];
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

export type MealTime = 'BREAKFAST' | 'Mini meals' | 'Lunch' | 'DINNER';

export type DayMenu = {
  [key in MealTime]: string;
};

export type WeeklyMenu = {
  MONDAY: DayMenu;
  TUESDAY: DayMenu;
  WEDNESDAY: DayMenu;
  THURSDAY: DayMenu;
  FRIDAY: DayMenu;
  SATURDAY: DayMenu;
  SUNDAY: DayMenu;
};

export type PricingPlan = {
  monthly: number;
  weekly: number;
};

export type MealPricing = {
  breakfast: PricingPlan;
  lunch: PricingPlan;
};

export type ArabianMenuItem = {
  name: string;
  price: number;
  category: 'dishes' | 'appetizers';
};