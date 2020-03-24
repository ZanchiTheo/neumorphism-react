### Displays checkboxes ###

```jsx { "props": { "style": { "backgroundColor": "#5f3d27", "textAlign": "center", "padding": "60px 20px" } } }
import { useState } from "react"
import { NeuRadio } from "react-neucomponents";

con

<NeuRadio data={[1, 2, 3, 4, 5]} onChange={(value) => console.log("new value : ", value)} />
```

### Displays radio choice ###

```jsx { "props": { "style": { "backgroundColor": "#5f3d27", "textAlign": "center", "padding": "60px 20px" } } }
import { NeuRadio } from "react-neucomponents";

<NeuRadio data={[1, 2, 3, 4, 5]} onChange={(value) => console.log("new value : ", value)} radio />
```