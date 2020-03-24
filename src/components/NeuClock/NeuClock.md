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