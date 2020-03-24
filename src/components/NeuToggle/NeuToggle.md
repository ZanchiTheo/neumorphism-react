### Displays a basic toogle button ###

```jsx { "props": { "style": { "backgroundColor": "#929292", "textAlign": "center", "padding": "100px 20px" } } }
import { NeuSlider } from "neumorphism-react";

<>
  <NeuToggle size="small" onChange={(value) => console.log("new toggle value : ", value)} />
  <br /><br />
  <NeuToggle size="medium" onChange={(value) => console.log("new toggle value : ", value)} />
</>
```