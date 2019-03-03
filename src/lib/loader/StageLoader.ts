import { StageElement } from 'types/loader';
import { BaseLoader } from './BaseLoader';

export class StageLoader extends BaseLoader<StageElement> {
  public name = 'stage';

  public getFirstStage(): StageElement {
    return this.elements[0];
  }
}
