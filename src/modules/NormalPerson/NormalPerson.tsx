import { BaseModule } from 'lib/modules/BaseModule';
import { AvatarElement } from './ui/Avatar';
const gameManager = window.gameManager;

export class NormalPerson extends BaseModule {
  public modelName = 'NormalPerson';
  public description = '为默认角色增加血量、体力、精力等基础属性';

  public onLoad() {
    const avatar = new AvatarElement();
    gameManager.getLoader('ui').register(avatar);
  }
}
