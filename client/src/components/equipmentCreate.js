import {
  SimpleForm,
  Create,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "ra-ui-materialui";

const EquipmentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="نام تجهیزات" />
      <ReferenceInput source="RoomId" reference="room" label="محل تجهیزات">
        <SelectInput optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default EquipmentCreate;
