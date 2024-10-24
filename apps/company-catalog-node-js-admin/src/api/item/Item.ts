import { Company } from "../company/Company";
import { JsonValue } from "type-fest";

export type Item = {
  company?: Company | null;
  createdAt: Date;
  description: string | null;
  id: string;
  images: JsonValue;
  price: number | null;
  title: string | null;
  updatedAt: Date;
};
