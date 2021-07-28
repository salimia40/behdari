import { TextInput , SimpleForm, Create } from "ra-ui-materialui";


 const DrugtypeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" label="شکل دارویی"/>
        </SimpleForm>
    </Create>
);

export default DrugtypeCreate