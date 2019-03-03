import { LaunchpadStage } from 'lib/stages/Launchpad';
import { StageElement } from 'types/loader';
import { BaseLoader } from './BaseLoader';

export class StageLoader extends BaseLoader<StageElement> {
  public name = 'stage';

  constructor() {
    super();
    const launchPad = new LaunchpadStage();
    this.register(launchPad);
  }

  public getFirstStage(): StageElement {
    return this.elements[0];
  }
}
