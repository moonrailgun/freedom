import { BaseLoader } from './loader/BaseLoader';

// type Loader = any extends BaseLoader;

export class GameManager {
  loaders = {};

  registerLoader(name: string, loader: any) {}

  getLoader(name: string) {
    return this.loaders[name] || null;
  }
}
