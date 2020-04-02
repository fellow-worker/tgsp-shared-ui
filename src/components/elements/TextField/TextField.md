The minium required for a text field is to provide a label
```jsx
    <TextField label="Username" />
```

Using the password type, it becomes a password box
```jsx
    <TextField label="Password" type="password" />
```

As with text, the color can be changed
```jsx
    <TextField color="tertiary" autoFocus value="password" label="Password" type="password" />
```

Validation can be added be setting the error to true, this will override the color
```jsx
    <TextField color="secondary" error={true}  label="email" />
```

The same applies to disabled
```jsx
    <TextField color="secondary" disabled={true}  label="username" />
```