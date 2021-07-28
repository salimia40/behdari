import {
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput,
  Edit,
} from "ra-ui-materialui";

const EquipmentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" label="نام تجهیزات"/>
      <ReferenceInput source="RoomId" reference="room" label="محل تجهیزات">
        <SelectInput optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export default EquipmentEdit;
