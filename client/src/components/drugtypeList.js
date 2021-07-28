import { TextField, Datagrid, List } from "ra-ui-materialui";

const DrugtypeList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="شناسه" />
      <TextField source="title" label="شکل دارویی" />
    </Datagrid>
  </List>
);

export default DrugtypeList;
