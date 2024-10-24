import { CompanyCreateNestedManyWithoutCategoriesInput } from "./CompanyCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  companies?: CompanyCreateNestedManyWithoutCategoriesInput;
};
