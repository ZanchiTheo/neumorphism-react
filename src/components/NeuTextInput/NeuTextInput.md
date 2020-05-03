Displays a text input. A function can be passed to the component which is fired every time a change occurs in the component.

Several props are available :
+ placeholder: set the placeholder of the text input
+ fontSize: set the text input font size, base set to 20px
+ fontColor: set the text input text color
+ color: set the text input color
+ distance: set the component elevation, base to 18
+ onChange: function fired every time the text input vaue is changed
+ width: set the input width, based set to 100% of the parent
+ height: set the input height, based set to 50px

```jsx { "props": { "style": { "backgroundColor": "#6a8d88", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuTextInput } from "neumorphism-react";
  
<>
  <NeuTextInput
    placeholder="Placeholder you want"
    color="#6a8d88"
    onChange={(newValue) => console.log("newValue : ", newValue)}
  />
  <br /><br /><br /><br />
  <NeuTextInput
    placeholder="Type some text"
    color="#6a8d88"
    onChange={(newValue) => console.log("newValue : ", newValue)}
    width="500px"
    height="40px"
    distance={2}
    onChange={(newValue) => console.log("newValue : ", newValue)}
    fontSize={15}
    fontColor="#000000"
  />
</>
```

### Fully customizable ###

The NeuTextInput component support prop propagation and style propagation. Thus you can pass your how styles and props to the component.

! Make sure that the styles and props you pass to the component will not interfere with the component behavior !