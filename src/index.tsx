import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { GameManager } from './lib/GameManager';
import registerServiceWorker from './registerServiceWorker';

window.gameManager = new GameManager();

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
