import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  companies?: CompanyListRelationFilter;
  id?: StringFilter;
};
