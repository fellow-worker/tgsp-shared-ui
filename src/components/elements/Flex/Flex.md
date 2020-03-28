Flex is a [Box](#/Primitives?id=box) with the flex box layout properties.

See https://styled-system.com/api#flexbox for more information.

Using Flex we can create a simple columns layout:

```jsx
import Box from '../Box/Box';

<Flex>
  <Box flex="1 1 auto" p={3} bg="secondary">Column 1</Box>
  <Box flex="1 1 auto" p={3} bg="primary">Column 2</Box>
  <Box flex="1 1 auto" p={3} bg="tertiary">Column 3</Box>
</Flex>;
```

or rows:

```jsx
import Box from '../Box/Box';

<Flex flexDirection="column">
  <Box p={3} bg="secondary">Row A</Box>
  <Box p={3} bg="primary">Row B</Box>
  <Box p={3} bg="tertiary">Row C</Box>
</Flex>;
```
