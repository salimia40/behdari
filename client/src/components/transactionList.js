import {
  TextField,
  Datagrid,
  NumberField,
  List,
  DateField,
  ArrayField,
  ReferenceField,
  FunctionField,
} from "ra-ui-materialui";

const roomFactory = (_, v) => {
  switch (_[v]) {
    case "store":
      return "انبار دارویی";

    case "drugstore":
      return "دارو خانه";
    case "policlinic":
      return "استوک دارویی";
    default:
      return "";
  }
};


const TransactionList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" label="شناسه" />
      <FunctionField
        render={roomFactory}
        source="from"
        label="از"
      />
      <FunctionField
        render={roomFactory}
        source="to"
        label="به"
      />
      <DateField source="updatedAt" label="آخرین ویرایش" />
      <ArrayField source="TransactionDrugs" label="اقلام دارویی">
        <Datagrid>
          <ReferenceField source="DrugId" reference="Drugs" label="نام دارو">
            <TextField source="title" />
          </ReferenceField>
          <NumberField source="amount" label="مقدار دارو" />
        </Datagrid>
      </ArrayField>
    </Datagrid>
  </List>
);

export default TransactionList;
