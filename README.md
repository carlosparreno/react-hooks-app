This app is a basic implementation of Hooks useState, useEffect and useRef for teaching purposes.

### Run this app

To use this app run the following commands in the console:

> git clone https://github.com/carlosparreno/react-hooks-app.git

> npm install

> npm start


### Exercises:

To see the exercises:

- Replace `src/index.js` with the following content:

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExerciseApp from './ExerciseApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ExerciseApp />, document.getElementById('root'));
serviceWorker.unregister();
```

> npm start
