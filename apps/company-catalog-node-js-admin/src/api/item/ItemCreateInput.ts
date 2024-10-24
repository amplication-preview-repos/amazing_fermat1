import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ItemCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  images?: InputJsonValue;
  price?: number | null;
  title?: string | null;
};
