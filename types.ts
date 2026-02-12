
import React from 'react';

export interface PizzaItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface CartItem extends PizzaItem {
  quantity: number;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
