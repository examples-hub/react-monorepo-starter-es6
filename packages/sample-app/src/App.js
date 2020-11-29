import React from 'react';
import { CheckboxWithLabel } from '@examples-hub/sample-components';

export function App() {
  return (
    <div>
      <h2>本项目 react-monorepo-starter-es6</h2>
      <a href='https://github.com/examples-hub/react-monorepo-starter-es6'>
        <h4>github repo</h4>
      </a>
      <div>
        <input type='text' />
      </div>
      <CheckboxWithLabel labelOn='On' labelOff='Off' />
    </div>
  );
}

export default App;
