### Displays checkboxes ###

```jsx { "props": { "style": { "backgroundColor": "#929292", "textAlign": "center", "padding": "100px" } } }
import { NeuRadio } from "react-neucomponents";

<NeuRadio data={[1, 2, 3, 4, 5]} onChange={(value) => console.log("new value : ", value)} />
```

### Displays radio choice ###

```jsx { "props": { "style": { "backgroundColor": "#929292", "textAlign": "center", "padding": "100px" } } }
import { NeuRadio } from "react-neucomponents";

<NeuRadio data={[1, 2, 3, 4, 5]} onChange={(value) => console.log("new value : ", value)} radio />
```