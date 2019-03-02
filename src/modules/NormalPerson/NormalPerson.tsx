import { BaseModule } from 'src/lib/BaseModule';
import { AvatarElement } from './ui/Avatar';
const GameManager = window.GameManager;

export class NormalPerson extends BaseModule {
  public modelName = 'NormalPerson';
  public description = '为默认角色增加血量、体力、精力等基础属性';

  public onLoad() {
    GameManager.getLoader('ui').register(this.modelName, AvatarElement);
  }
}
