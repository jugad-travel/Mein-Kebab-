import infosData from "@/data/infos.json";
import menuData from "@/data/menu.json";
import reviewsData from "@/data/reviews.json";

export const infos = infosData;
export const menu = menuData;
export const reviews = reviewsData;

export type MenuItem = {
  name: string;
  price?: number;
  description?: string;
  tags?: string[];
  _a_confirmer?: boolean;
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

export type Review = {
  author: string;
  rating: number;
  text: string;
};

export type Hours = {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
  note?: string;
};

