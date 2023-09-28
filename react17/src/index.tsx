import React from 'react';
import { render } from 'react-dom';

const App = () => <div>Hello App</div>;

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);

export default {};
