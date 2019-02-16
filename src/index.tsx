import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { GameManager } from './lib/GameManager';

window.GameManager = new GameManager();

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
