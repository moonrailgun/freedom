import { BaseLoader } from './loader/BaseLoader';
import { UILoader } from './loader/UILoader';

// type Loader = any extends BaseLoader;

interface ILoaderList {
  [name: string]: BaseLoader<any>;
}

export class GameManager {
  loaders: ILoaderList = {};

  constructor() {
    this.initBuildingLoader();
  }

  initBuildingLoader() {
    this.registerLoader(UILoader);
  }

  registerLoader(Loader: any) {
    const loader = new Loader();
    const name = loader.name;

    this.loaders[name] = loader;
  }

  getLoader<E>(name: string): BaseLoader<E> {
    return this.loaders[name] || null;
  }
}
