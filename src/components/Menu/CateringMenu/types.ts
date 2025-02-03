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