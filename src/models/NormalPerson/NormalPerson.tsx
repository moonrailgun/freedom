import { BaseModel } from 'src/lib/BaseModel';

export class NormalPerson extends BaseModel {
  modelName = 'NormalPerson';
  describe = '为默认角色增加血量、体力、精力等基础属性';

  onload() {}
}
