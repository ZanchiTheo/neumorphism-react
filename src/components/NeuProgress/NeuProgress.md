### Displays a progress bar ###

```jsx { "props": { "style": { "backgroundColor": "#929292", "textAlign": "center", "padding": "100px" } } }
import { NeuProgress } from "react-neucomponents";
<>
  <NeuProgress progress={0} />
  <br /><br />
  <NeuProgress progress={15} />
  <br /><br />
  <NeuProgress progress={50} />
  <br /><br />
  <NeuProgress progress={90} />
</>
```