import { ActionType } from 'types/ui';

export class BaseAction {
  public label: string = '';
  public type: ActionType = ActionType.Button;

  public action(): void {}

  public visibility(): boolean {
    return true;
  }

  public disabled(): boolean {
    return true;
  }
}
