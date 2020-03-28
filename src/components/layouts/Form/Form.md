A very basic form consist just of a number of fields:

```jsx harmony
import TextField from '../../structures/TextField/TextField';

<Form>
    <Form.Fields>
        <TextField labelWidth="120px" label="Username" />
        <TextField labelWidth="120px" label="Password" type="password" />
    </Form.Fields>
</Form>

```

Using the Heading macro component an header can be added

```jsx harmony
import TextField from '../../structures/TextField/TextField';
import { Header }  from '../../elements';

<Form>
    <Form.Heading>
        <Header variant="h3" color="secondary">Please logon</Header>
    </Form.Heading>
    <Form.Fields>
        <TextField labelWidth="120px" label="Username" />
        <TextField labelWidth="120px" label="Password" type="password" />
    </Form.Fields>
</Form>
```

Buttons can be added by settings a (optional) confirm and / or cancel button, using the Buttons tag.

```jsx harmony
import TextField from '../../structures/TextField/TextField';

<Form>
    <Form.Fields>
        <TextField labelWidth="120px" label="Username" />
        <TextField labelWidth="120px" label="Password" type="password" />
    </Form.Fields>
    <Form.Buttons confirm={{label : "Save" }} cancel={{label : "Cancel" }} />
</Form>
```

But there is also the flexibility to use components in the form

```jsx harmony
import TextField from '../../structures/TextField/TextField';
import { Button, Box, Flex, Header }  from '../../elements';

<Form>
    <Form.Heading>
        <Header variant="h3" color="secondary">Please logon</Header>
        <Box mt={2} mb={2} style={{ borderTop: "1px solid #eee", height: "1px", width:"100%",  }} />
    </Form.Heading>
    <Form.Fields>
        <TextField labelWidth="120px" label="Username" />
        <TextField labelWidth="120px" label="Password" type="password" />
    </Form.Fields>
    <Form.Buttons>
        <Box mt={2} mb={2} style={{ borderTop: "1px solid #eee", height: "1px", width:"100%",  }} />
        <Flex justifyContent="flex-end">
            <Button variant="tertiary" label="Logon" />
        </Flex>
    </Form.Buttons>
</Form>

```
