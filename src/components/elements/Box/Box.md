Box is the simplest layout primitive that renders a `div` element

Box allows controlling its padding, margin, width, etc. with design tokens.

The following will render a `div` with `padding`, `width` props set to values from the design system.

```jsx harmony
<Box p={2} width={1 / 4}>
    Box content
</Box>
```

Box has an auto adapting color based on the background. If in the theme a text version for the background color is provided it will applied if no color is set:

```jsx harmony
<Box p={2} bg="secondary"  >
    Box content
</Box>
```
