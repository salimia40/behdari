import { TextField, Datagrid ,  List } from "ra-ui-materialui";



const RoomList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id"  label="شناسه"/>
            <TextField source="title"  label="نام اتاق" />
        </Datagrid>
    </List>
);

export default RoomList;