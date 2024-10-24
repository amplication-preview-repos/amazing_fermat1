import { Category } from "../category/Category";
import { Item } from "../item/Item";

export type Company = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  items?: Array<Item>;
  updatedAt: Date;
};
