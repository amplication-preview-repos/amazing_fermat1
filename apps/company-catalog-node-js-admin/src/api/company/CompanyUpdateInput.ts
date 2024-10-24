import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ItemUpdateManyWithoutCompaniesInput } from "./ItemUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  items?: ItemUpdateManyWithoutCompaniesInput;
};
