import { StageElement } from 'types/loader';

export abstract class BaseStage implements StageElement {
  public name = 'Stage';

  public getNextStage(): string | null {
    return null;
  }

  public getView(): JSX.Element | null {
    return null;
  }
}
