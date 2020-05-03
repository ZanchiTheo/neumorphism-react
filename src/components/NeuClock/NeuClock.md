This component displays a clock. This clock has a fixed size of 260px by 260px so it will fit even on the litlest device :)

#### Color ####

Like any component of this lib, you are free to choose the color you want, just by modifying the color props. The base color for every component is #929292.

!!! The colors handled are currently only RGB hexadecimal colors like: #929292 !!!

```jsx { "props": { "style": { "backgroundColor": "#6a8d88", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuClock } from "neumorphism-react";
  
<NeuClock color="#6a8d88" />
```

#### Donut ####

You can also add a prop called donut to the clock to have a donut styled clock.

```jsx { "props": { "style": { "backgroundColor": "#929292", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuClock } from "neumorphism-react";
  
<NeuClock donut />
```

#### Distance ####

You can play with the distance prop to control the elevation of the NeuClock component. Base value is 5.

```jsx { "props": { "style": { "backgroundColor": "#8d3c37", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuClock } from "neumorphism-react";
  
<NeuClock color="#8d3c37" distance={3} />
```

### Fully customizable ###

The NeuClock component support prop propagation and style propagation. Thus you can pass your how styles and props to the component.

! Make sure that the styles and props you pass to the component will not interfere with the component behavior !