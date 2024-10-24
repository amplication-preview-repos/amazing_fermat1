import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ItemCreateNestedManyWithoutCompaniesInput } from "./ItemCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  items?: ItemCreateNestedManyWithoutCompaniesInput;
};
