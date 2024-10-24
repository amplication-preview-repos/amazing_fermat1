import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ItemUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  images?: InputJsonValue;
  price?: number | null;
  title?: string | null;
};
