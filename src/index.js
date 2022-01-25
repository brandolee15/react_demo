import React from 'react';
import ReactDom from 'react-dom';

import App from './App.js';

ReactDom.render(
    //JSX not html
    
    <React.StrictMode>
    <App />
  </React.StrictMode>,

    document.getElementById('root')
);
