import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  ReferenceField,
  NumberField,
  ArrayField,
  Datagrid,
} from "ra-ui-materialui";

const Aside = () => (
  <div style={{ width: 200, margin: "1em" }}>
    <h3 variant="h6">جزئیات ورود و خروج</h3>
    <SimpleShowLayout>
      <TextField source="id" label="شناسه"/>
      <TextField source="from" label="از"/>
      <TextField source="to" label="به"/>
      <DateField source="updatedAt" label="آخرین ویرایش" />
    </SimpleShowLayout>
  </div>
);



const TransactionShow = (props) => (
  <Show {...props} aside={<Aside />}>
    <SimpleShowLayout>
      <ArrayField source="TransactionDrugs" label="اقلام دارویی">
        <Datagrid>
          <ReferenceField source="DrugId" reference="Drugs"  label="نام دارو" >
          <TextField source="title" />
          </ReferenceField>
          <NumberField source="amount" label="مقدار دارو"/>
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
    
  </Show>
);

export default TransactionShow;
