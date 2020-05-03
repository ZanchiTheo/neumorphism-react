Displays a progress bar. The progress prop give the percentage of the progress bar filled. This value goes from 0 to 100, if the value is under 0 it will display 0% and if the value is over 100, the comonent will display 100%.

#### Color ####

Like any component of this lib, you are free to choose the color you want, just by modifying the color props. The base color for every component is #929292.

!!! The colors handled are currently only RGB hexadecimal colors like: #929292 !!!

```jsx { "props": { "style": { "backgroundColor": "#6a8d88", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuProgress } from "neumorphism-react";
  
<NeuProgress progress={15} color="#6a8d88" />
```

```jsx { "props": { "style": { "backgroundColor": "#5f3d27", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuProgress } from "neumorphism-react";
  
<NeuProgress progress={50} color="5f3d27" />
```

#### Distance ####

You can play with the distance prop to control the elevation of the NeuProgress component. Base value is 5.

```jsx { "props": { "style": { "backgroundColor": "#929292", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuProgress } from "neumorphism-react";
  
<NeuProgress progress={90} distance={3} />
```

### Fully customizable ###

The NeuProgress component support prop propagation and style propagation. Thus you can pass your how styles and props to the component.

! Make sure that the styles and props you pass to the component will not interfere with the component behavior !