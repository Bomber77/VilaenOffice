<<<<<<< HEAD
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
=======
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
>>>>>>> 5e63e0a74f4da842f34a6f5326049916fd6f69b0
