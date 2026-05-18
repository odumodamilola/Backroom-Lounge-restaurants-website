export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  sodium?: number;
}

export interface Badge {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  badges?: Badge[];
  isFeatured?: boolean;
  nutritionalInfo?: NutritionalInfo;
}

export interface MenuCategory {
  id: string;
  name: string;
  label: string;
  count: number;
}
