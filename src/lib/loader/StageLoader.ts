import { LaunchpadStage } from 'lib/stages/Launchpad';
import * as _ from 'lodash';
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
    const elements = this.getElements();
    return elements[0];
  }

  public getElements() {
    return _.sortBy(this.elements, ['order']);
  }
}
