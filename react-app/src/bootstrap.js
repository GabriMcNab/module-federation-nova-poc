import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const mount = ((el) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})

export { mount };
