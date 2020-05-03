### Checkboxes ###

By default the NeuRadio component don't display a radio choice but checkboxes. The data prop (which is an array of numbers or strings) determines the options available. on every changes, an array is returned with the selected values inside.

```jsx { "props": { "style": { "backgroundColor": "#477854", "textAlign": "center", "padding": "60px 20px" } } }
import { useState } from "react"
import { NeuRadio } from "neumorphism-react";

const [selected, setSelected] = useState([]);

<>
  <NeuRadio
    color="#477854"
    data={[1, 2, 3, 4, 5]}
    onChange={(value) => setSelected(value)}
  />
  <br /><br /><br /><br />
  <p style={{ color: "#525252" }}>
    [{selected.join()}]
  </p>
</>
```

### Radio choice ###

Adding the radio prop to the NeuRadio component will turn it into as its name suggest, a radio choice. The data prop (which is an array of numbers or strings) determines the options available. on every changes, the selected value is returned.

```jsx { "props": { "style": { "backgroundColor": "#c3b6ea", "textAlign": "center", "padding": "60px 20px" } } }
import { useState } from "react"
import { NeuRadio } from "neumorphism-react";

const [selected, setSelected] = useState(null);

<>
  <NeuRadio
    color="#c3b6ea"
    data={[1, 2, 3, 4, 5]}
    onChange={(value) => setSelected(value)}
    radio
  />
  <br /><br /><br /><br />
  <p style={{ color: "#525252" }}>
    {selected || "null"}
  </p>
</>
```

#### Distance ####

You can play with the distance prop to control the elevation of the NeuRadio component. Base value is 5.

```jsx { "props": { "style": { "backgroundColor": "#596999", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuRadio } from "neumorphism-react";
  
<>
  <NeuRadio
    data={[1, 2, 3, 4, 5]}
    onChange={(value) => console.log("new value : ", value)}
    radio
    color="#596999"
    distance={2}
  />
  <br /><br /><br /><br />
  <NeuRadio
    data={[1, 2, 3, 4, 5]}
    onChange={(value) => console.log("new value : ", value)}
    radio
    color="#596999"
    distance={5}
  />
</>
```

### Fully customizable ###

The NeuRadio support prop propagation and style propagation. These styles and props will be applied to the wrapper of the component. Thus you can pass your how styles and props to the component.

! Make sure that the styles and props you pass to the component will not interfere with the component behavior !