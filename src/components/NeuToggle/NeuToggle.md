Displays a toggle. A function can be passed to the component which is fired every time the toggle is trigered.

Several props are available :
+ color: set the text input color,
+ onChange: function fired every time the text input vaue is changed
+ size: the size of this component is fixed, you can just choose between 'medium' and 'small'
+ distance: set the component elevation, base to 18

```jsx { "props": { "style": { "backgroundColor": "#929292", "textAlign": "center", "padding": "100px 20px" } } }
import { NeuSlider } from "neumorphism-react";

<>
  <NeuToggle size="small" onChange={(value) => console.log("new toggle value : ", value)} />
  <br /><br />
  <NeuToggle distance={2} size="medium" onChange={(value) => console.log("new toggle value : ", value)} />
  <br /><br />
  <NeuToggle size="medium" onChange={(value) => console.log("new toggle value : ", value)} />
</>
```

### Fully customizable ###

The NeuToggle support prop propagation and style propagation. These styles and props will be applied to the wrapper of the component. Thus you can pass your how styles and props to the component.

! Make sure that the styles and props you pass to the component will not interfere with the component behavior !