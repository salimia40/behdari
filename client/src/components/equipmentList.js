import {
  TextField,
  Datagrid,
  List,
  ReferenceField,
} from "ra-ui-materialui";

const EquipmentList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id"  label="شناسه" />
      <TextField source="title"  label="نام تجهیزات"/>
      <ReferenceField source="RoomId" reference="room" label="محل تجهیزات">
        <TextField source="title" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default EquipmentList;
