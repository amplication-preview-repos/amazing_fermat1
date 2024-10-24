import { Company } from "../company/Company";

export type Category = {
  companies?: Array<Company>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
