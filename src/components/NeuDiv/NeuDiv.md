This component is a basic Div which can be used to wrap any components. This div can also be reverted thus have a pressed style.

### Fully customizable ###

#### Color ####

Like any component of this lib, you are free to choose the color you want, just by modifying the color props. The base color for every component is #929292.

!!! The colors handled are currently only RGB hexadecimal colors like: #929292 !!!

```jsx { "props": { "style": { "backgroundColor": "#5f3d27", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuDiv } from "neumorphism-react";

<>
  <NeuDiv width="150px" height="100px" color="#5f3d27" />
  <br /><br />
  <NeuDiv width="150px" height="100px" revert color="#5f3d27" />
</>
```

#### Distance ####

You can play with the distance prop to control the elevation of the NeuDiv component. Base value is 5.

```jsx { "props": { "style": { "backgroundColor": "#477854", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuDiv } from "neumorphism-react";
  
<>
  <NeuDiv width="150px" height="100px" color="#477854" distance={3} />
  <br /><br />
  <NeuDiv width="150px" height="100px" revert color="#477854" distance={3} />
  <br /><br /><br /><br />
  <NeuDiv width="150px" height="100px" color="#477854" distance={8} />
  <br /><br />
  <NeuDiv width="150px" height="100px" revert color="#477854" distance={8} />
</>
```

#### Border Radius ####

You can specify the border radius you want to apply to the NeuDiv component in px. Base value is 25.

```jsx { "props": { "style": { "backgroundColor": "#c5c5c5", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuDiv } from "neumorphism-react";
  
<>
  <NeuDiv width="150px" height="100px" color="#c5c5c5" radius={10} />
  <br /><br />
  <NeuDiv width="150px" height="100px" revert color="#c5c5c5" radius={50} />
</>
```

#### Width and height ####

Last but not least, you can choose the width and height of your NeuDiv in px. The base value for width and height is 100% of the parent container. 

```jsx { "props": { "style": { "backgroundColor": "#929292", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuDiv } from "neumorphism-react";
  
<>
  {/* The NeuDiv will use 100% of his parent div */}
  <NeuDiv height="100%" />
  <br /><br />
  <NeuDiv width="100px" height="150px" revert />
</>
```

### Fully customizable ###

The NeuDiv component support prop propagation and style propagation. Thus you can pass your how styles and props to the component.

! Make sure that the styles and props you pass to the component will not interfere with the component behavior !

```jsx { "props": { "style": { "backgroundColor": "#5f3d27", "textAlign": "center", "padding": "60px 30px" } } }
import { NeuDiv } from "neumorphism-react";

<NeuDiv
  width="150px"
  height="100px"
  color="#5f3d27"
  onMouseUp={() => alert('on mouse up !')}
  style={{ border: '2px dashed #929292', cursor: 'pointer' }}
/>
```