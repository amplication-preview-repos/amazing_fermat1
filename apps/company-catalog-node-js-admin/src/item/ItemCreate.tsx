import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <div />
        <NumberInput label="Price" source="price" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
