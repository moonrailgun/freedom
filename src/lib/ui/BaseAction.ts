import { ActionType } from 'types/ui';

export class BaseAction {
  public label: string = '';
  public type: ActionType = ActionType.Button;

  action(): void {}

  visibility(): boolean {
    return true;
  }

  disabled(): boolean {
    return true;
  }
}
