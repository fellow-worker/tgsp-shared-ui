A very basic form consist just of a number (one or more) of fields:

```jsx harmony
import TextField from '../../elements/TextField/TextField';

<Form>
    <Form.Fields>
        <TextField label="Username" />
        <TextField label="Password" type="password" />
    </Form.Fields>
</Form>
```

```jsx harmony
import TextField from '../../elements/TextField/TextField';

<Form>
    <Form.Fields>
        <TextField color="tertiary" label="Email" />
    </Form.Fields>
</Form>
```

Using the Heading macro component an header can be added

```jsx harmony
import { Header, TextField }  from '../../elements';

<Form>
    <Form.Heading>
        <Header variant="h3" color="secondary">Provide information</Header>
    </Form.Heading>
    <Form.Fields>
        <TextField label="Name" />
        <TextField label="Location" />
    </Form.Fields>
</Form>
```

Buttons can be added by settings a (optional) confirm and / or cancel button, using the Buttons tag.

```jsx harmony
import TextField from '../../elements/TextField/TextField';

<Form>
    <Form.Fields>
        <TextField label="Name" />
        <TextField label="Occupation" />
    </Form.Fields>
    <Form.Buttons confirm={{label : "Save" }} cancel={{label : "Cancel" }} />
</Form>
```

But there is also the flexibility to use components in the form

```jsx harmony
import { Button, Box, Flex, Header, TextField }  from '../../elements';

<Form>
    <Form.Heading>
        <Header variant="h3" color="secondary">Please logon</Header>
        <Box mt={2} mb={2} style={{ borderTop: "1px solid #eee", height: "1px", width:"100%",  }} />
    </Form.Heading>
    <Form.Fields>
        <TextField label="Username" />
        <TextField label="Password" type="password" />
    </Form.Fields>
    <Form.Buttons>
        <Box mt={2} mb={2} style={{ borderTop: "1px solid #eee", height: "1px", width:"100%",  }} />
        <Flex justifyContent="flex-end">
            <Button variant="tertiary" label="Logon" />
        </Flex>
    </Form.Buttons>
</Form>

```
