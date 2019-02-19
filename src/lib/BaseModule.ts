export class BaseModule {
  // model名, model的唯一标识
  public modelName: string = 'basicModule';

  // model说明
  public description: string = '';

  // model依赖
  public requireModel: string[] = [];

  onLoad() {}

  onRegister() {}

  register(loaderName: string, info: any) {
    const loader = window.GameManager.getLoader(loaderName);
    loader.register(this.modelName, info);
  }
}
