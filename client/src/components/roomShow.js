import {
  TextField,
  Datagrid,
  Show,
  ArrayField,
  SimpleShowLayout,
} from "ra-ui-materialui";

const Aside = () => (
  <div style={{ width: 200, margin: "1em" }}>
  <h3 variant="h6">تجهیزات اتاق</h3>
    <SimpleShowLayout>
      <TextField source="id" label="شناسه" />
      <TextField source="title" label="نام اتاق"/>
    </SimpleShowLayout>
  </div>
);

const RoomShow = (props) => (
  <Show {...props} aside={<Aside/>}>
    <SimpleShowLayout>
      <ArrayField source="Equipment"  label="تجهیزات اتاق">
        <Datagrid>
          <TextField source="id" label="شناسه"/>
          <TextField source="title" label="نام تجهیزات"/>
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

export default RoomShow;
