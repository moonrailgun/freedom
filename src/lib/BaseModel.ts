export class BaseModel {
  // model名, model的唯一标识
  public modelName: string = 'basicModel';

  // model说明
  public describe: string = '';

  // model依赖
  public requireModel: string[] = [];

  onload() {}
}
