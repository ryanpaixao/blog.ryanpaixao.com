import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// styling
import 'reset-css/reset.css';
import './css/index.css';

// components
import Routes from './components/Routes';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
