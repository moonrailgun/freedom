import { BaseLoader } from './loader/BaseLoader';
import { UILoader } from './loader/UILoader';

// type Loader = any extends BaseLoader;

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
  }

  public registerLoader(Loader: any) {
    const loader = new Loader();
    const name = loader.name;

    this.loaders[name] = loader;
  }

  public getLoader<E>(name: string): BaseLoader<E> {
    return this.loaders[name] || null;
  }
}
