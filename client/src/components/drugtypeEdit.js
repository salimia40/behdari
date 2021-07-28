import { TextInput , Edit , SimpleForm } from "ra-ui-materialui";


 const DrugtypeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" label="شکل دارویی" />
        </SimpleForm>
    </Edit>
);

export default DrugtypeEdit