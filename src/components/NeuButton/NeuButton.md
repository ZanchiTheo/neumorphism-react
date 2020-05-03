This component is a basic button.

### Props ###

#### Color ####

Like any component of this lib, you are free to choose the color you want, just by modifying the color props. The base color for every component is #929292.

!!! The colors handled are currently only RGB hexadecimal colors like: #929292 !!!

```jsx { "props": { "style": { "backgroundColor": "#5f3d27", "textAlign": "center", "padding": "60px 30px" } } }
import { NeuButton } from "neumorphism-react";

<NeuButton
  width="150px"
  height="100px"
  onClick={() => console.log("Button cliked !")}
  color="#5f3d27"
/>
```

#### Wrap ####

The NeuButton can act as a wrapper for any component you want !

```jsx { "props": { "style": { "backgroundColor": "#477854", "textAlign": "center", "padding": "60px 30px" } } }
import { NeuButton } from "neumorphism-react"; 

<>
  <NeuButton
    width="150px"
    height="100px"
    onClick={() => console.log("Button cliked !")}
    color="#477854"
  >
    Click me !
  </NeuButton>
  <br /><br /><br /><br />
  <NeuButton
    width="150px"
    height="100px"
    onClick={() => console.log("Button cliked !")}
    color="#477854"
  >
    <img src={require('../../../public/images/switch.svg')} width={50} height={50} />
  </NeuButton>
</>
```

#### Border Radius ####

You can specify the border radius you want to apply to the NeuButton component in px. Base value is 25.

```jsx { "props": { "style": { "backgroundColor": "#c5c5c5", "textAlign": "center", "padding": "60px 30px" } } }
import { NeuButton } from "neumorphism-react";

<NeuButton
  width="150px"
  height="100px"
  onClick={() => console.log("Button cliked !")}
  color="#c5c5c5"
  radius={10}
>
  Click me !
</NeuButton>
```

#### Width and height ####

Last but not least, you can choose the width and height of your NeuButton in px. The base value for width and height is 100% of the parent container. 

```jsx { "props": { "style": { "backgroundColor": "#929292", "textAlign": "center", "padding": "60px 30px" } } }
import { NeuButton } from "neumorphism-react";

<NeuButton
  height="70"
  onClick={() => console.log("Button cliked !")}
  radius={10}
>
  Click me !
</NeuButton>
```

#### Distance ####

You can play with the distance prop to control the elevation of the NeuButton component. Base value is 5.

```jsx { "props": { "style": { "backgroundColor": "#8d3c37", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuButton } from "neumorphism-react";
  
<>
  <NeuButton
    width="150px"
    height="100px"
    onClick={() => console.log("Button cliked !")}
    color="#8d3c37"
    distance={3}
  >
    Close
  </NeuButton>
  <br /><br /><br /><br />
  <NeuButton
    width="150px"
    height="100px"
    onClick={() => console.log("Button cliked !")}
    color="#8d3c37"
    distance={8}
  >
    Far
  </NeuButton>
</>
```

#### Disable button ####

You can specify whether the button is disabled or not.

```jsx { "props": { "style": { "backgroundColor": "#c5c5c5", "textAlign": "center", "padding": "60px 30px" } } }
import { NeuButton } from "neumorphism-react";

<NeuButton
  width="150px"
  height="100px"
  onClick={() => console.log("Button cliked !")}
  color="#c5c5c5"
  radius={10}
  disabled
>
  Click me !
</NeuButton>
```

### Fully customizable ###

The NeuButton component support prop propagation and style propagation. Thus you can pass your how styles and props to the component.

! Make sure that the styles and props you pass to the component will not interfere with the component behavior !

```jsx { "props": { "style": { "backgroundColor": "#5f3d27", "textAlign": "center", "padding": "60px 30px" } } }
import { NeuButton } from "neumorphism-react";

<NeuButton
  width="150px"
  height="100px"
  onClick={() => console.log("Button cliked !")}
  color="#5f3d27"
  onMouseUp={() => alert('on mouse up !')}
  style={{ border: '2px dashed #929292', color: 'white', fontSize: '1.2rem' }}
>
  Button with custom styles and props
</NeuButton>
```