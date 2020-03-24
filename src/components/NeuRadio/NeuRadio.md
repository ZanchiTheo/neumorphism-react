### Displays checkboxes ###

```jsx { "props": { "style": { "backgroundColor": "#477854", "textAlign": "center", "padding": "60px 20px" } } }
import { useState } from "react"
import { NeuRadio } from "neumorphism-react";

<NeuRadio
  color="#477854"
  data={[1, 2, 3, 4, 5]}
  onChange={(value) => console.log("new value : ", value)}
/>
```

### Displays radio choice ###

```jsx { "props": { "style": { "backgroundColor": "#929292", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuRadio } from "neumorphism-react";

<NeuRadio data={[1, 2, 3, 4, 5]} onChange={(value) => console.log("new value : ", value)} radio />
```