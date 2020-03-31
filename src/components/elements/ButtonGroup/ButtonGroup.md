Since buttons have rounded corners it will looks a bit strange:

```jsx harmony
import { Button }  from '../../elements';

<div>
    <Button label="One" />
    <Button color="secondary" label="Two" />
</div>
```

But is easily by wrapping the buttons in a button group:
```jsx harmony
import { Button, ButtonGroup }  from '../../elements';

<ButtonGroup>
    <Button label="One" />
    <Button color="secondary" label="Two" />
</ButtonGroup>
```