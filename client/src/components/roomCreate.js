import {
    SimpleForm,
    Create,
    TextInput,
  } from "ra-ui-materialui";
  

const RoomCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title"  label="نام اتاق"/>
        </SimpleForm>
    </Create>
);

export default RoomCreate