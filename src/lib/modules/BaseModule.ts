import { IBaseElement } from 'types/loader';

export class BaseModule {
  // model名, model的唯一标识
  public modelName: string = 'basicModule';

  // model说明
  public description: string = '';

  // model依赖
  public requireModel: string[] = [];

  public onLoad() {}

  public onRegister() {}

  public register(loaderName: string, info: IBaseElement) {
    const loader = window.gameManager.getLoader(loaderName);
    loader.register(info);
  }
}
