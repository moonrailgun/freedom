import { BaseModule } from 'src/lib/BaseModule';

export class NormalPerson extends BaseModule {
  modelName = 'NormalPerson';
  description = '为默认角色增加血量、体力、精力等基础属性';

  onload() {}
}
