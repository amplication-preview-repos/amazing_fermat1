import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";

export type CompanyWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  items?: ItemListRelationFilter;
};
