### Displays a basic button ###

```jsx { "props": { "style": { "backgroundColor": "#929292", "textAlign": "center" } } }
import { NeuButton } from "react-neucomponents";

<NeuButton
  width={150}
  height={100}
  onClick={() => console.log("Button cliked !")}
>
  Click me !
</NeuButton>
```