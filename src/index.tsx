import { GameManager } from 'lib/GameManager';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

window.gameManager = new GameManager();

import('./modules/index').then(() => {
  console.log('module loading completed!');
});

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
