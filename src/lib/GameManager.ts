import { BaseLoader } from 'lib/loader/BaseLoader';
import { StageLoader } from 'lib/loader/StageLoader';
import { UILoader } from 'lib/loader/UILoader';
import { IBaseElement, ILoaderClass } from 'types/loader';

interface ILoaderList {
  [name: string]: BaseLoader<any>;
}

export class GameManager {
  private loaders: ILoaderList = {};

  constructor() {
    this.initBuildingLoader();
  }

  public initBuildingLoader() {
    this.registerLoader(UILoader);
    this.registerLoader(StageLoader);
  }

  public registerLoader(Loader: ILoaderClass) {
    const loader = new Loader();
    const name = loader.name;

    this.loaders[name] = loader;
  }

  public getLoader<E extends IBaseElement>(name: string): BaseLoader<E> {
    return this.loaders[name] || null;
  }
}
