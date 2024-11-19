# Попап на реакте с модальными окнами, тулпипами и менюшками

## Use case

```jsx
import React from 'react';
import Popup from './src/index';
import './src/index.css';

export default MyComponent() => (
  <Popup trigger={<button>Click trigger</button>} position="left center">
    <div>Popup content</div>
  </Popup>
);
```
