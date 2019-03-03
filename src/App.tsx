import * as React from 'react';
import './App.css';

import { GameStage } from 'types/stage';
import { Launchpad } from './lib/stages/Launchpad';

class App extends React.Component {
  public state = {
    stage: GameStage.Launchpad,
  };

  public componentDidMount() {
    window.gameManager.getLoader('stage');
  }

  public render() {
    if (this.state.stage === GameStage.Launchpad) {
      return <Launchpad />;
    }

    return <div>error</div>;
  }
}

export default App;
