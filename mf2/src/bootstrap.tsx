import React from 'react';
// @ts-ignore
import { useNav } from 'mf1/useNav';

import { render } from 'react-dom';

const App = () => {
  const { someFun } = useNav();
  console.log('someFun = ', someFun);
  someFun();
  return <div>Hello App</div>;
};

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
