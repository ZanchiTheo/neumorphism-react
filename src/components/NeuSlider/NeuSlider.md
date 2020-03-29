Display a slider. A function is fired every time the value changes.

Several props are available :
+ min: set slider min value, default to 0
+ max: set slider max value, default to 255
+ color: set the text input color
+ distance: set the component elevation, base to 18
+ onChange: function fired every time the text input vaue is changed

```jsx { "props": { "style": { "backgroundColor": "#929292", "textAlign": "center", "padding": "100px 20px" } } }
import { NeuSlider } from "neumorphism-react";

<>
  <NeuSlider
    onChange={(value) => console.log("new value : ", value)}
  />
  <br /><br /><br /><br />
  <NeuSlider
    onChange={(value) => console.log("new value : ", value)}
    distance={2}
    min={-45}
    max={100}
  />
</>
```