import {
  SimpleForm,
  Create,
  TextInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  AutocompleteInput,
} from "ra-ui-materialui";

import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";
import {
  useCreateSuggestionContext,
  useCreate,
} from "react-admin";

const CreateCategory = () => {
  const { filter, onCancel, onCreate } = useCreateSuggestionContext();
  const [value, setValue] = React.useState(filter || "");
  const [type, setType] = React.useState( "");
  const [create] = useCreate("Drugs");

  const handleSubmit = (event) => {
    event.preventDefault();
    create(
      {
        payload: {
          data: {
            title: value,
            DrugTypeId: type,
          },
        },
      },
      {
        onSuccess: ({ data }) => {
          setValue("");
          onCreate(data);
          console.log(data)
        },
      }
    );
  };

  return (
    <Dialog open onClose={onCancel}>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            label="نام دارو"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            autoFocus
          />
          <ReferenceInput source="DrugTypeId" reference="drugtype" 
          label="شکل دارویی"
              value={type}
              onChange={(event) => setType(event.target.value)}>
            <SelectInput
              optionText="title"
            />
          </ReferenceInput>
        </DialogContent>
        <DialogActions>
          <Button type="submit">ذخیره</Button>
          <Button onClick={onCancel}>انصراف</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const TransactionCreate = (props) => {


  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput allowEmpty
          source="from"
          label="از"
          choices={[
            { id: "store", name: "انبار دارویی" },
            { id: "drugstore", name: "داروخانه" },
            { id: "policlinic", name: "استوک دارویی" },
          ]}
          cre
        />
        <SelectInput allowEmpty
          source="to"
          label="به"
          choices={[
            { id: "store", name: "انبار دارویی" },
            { id: "drugstore", name: "داروخانه" },
            { id: "policlinic", name: "استوک دارویی" },
          ]}
        />
        <ArrayInput source="transactionDrugs" label="اقلام دارویی">
          <SimpleFormIterator>
            <ReferenceInput source="DrugId" reference="Drugs" label="دارو">
            {/* <SelectInput optionText="title" create={<CreateCategory />}  /> */}
              <AutocompleteInput create={<CreateCategory />} optionText="title" createLabel="ایجاد" createItemLabel="ایجاد"/>
            </ReferenceInput>
            <TextInput source="amount" label="مقدار دارو"/>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default TransactionCreate;
