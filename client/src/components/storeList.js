import { TextField, Datagrid , NumberField , List , DateField } from "ra-ui-materialui";


const StoreList = props => (
    <List {...props} title="موجودی انبار دارویی">
        <Datagrid rowClick="edit">
            <TextField source="Drug.title" label="نام دارو" />
            <NumberField source="amount" label="موجودی" />
            <DateField source="updatedAt" label="آخرین ویرایش" />
        </Datagrid>
    </List>
);

export default StoreList