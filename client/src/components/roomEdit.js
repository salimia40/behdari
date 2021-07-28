import {
    SimpleForm,
    TextInput,
    Edit,
  } from "ra-ui-materialui";
  

const RoomEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title"  label="نام اتاق" />
        </SimpleForm>
    </Edit>
);

export default RoomEdit