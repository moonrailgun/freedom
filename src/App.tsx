import * as React from 'react';
import './App.css';

import { StageLoader } from 'lib/loader/StageLoader';
import { StageElement } from 'types/loader';

class App extends React.Component {
  public stageLoader: StageLoader;
  public state = {
    stage: null,
  };

  public componentDidMount() {
    this.stageLoader = window.gameManager.getLoader('stage') as StageLoader;
    this.setState({
      stage: this.stageLoader.getFirstStage(),
    });
  }

  public render() {
    const stage = this.state.stage;
    if (stage) {
      return (stage as StageElement).getView();
    }

    return null;
  }
}

export default App;
