import debug from 'debug';
const log = debug('freedom:loader');

export interface ILoader<ElementType> {
  register(from: string, element: ElementType): void;
}

export class BaseLoader<ElementType> implements ILoader<ElementType> {
  public name: string;
  public elements: ElementType[] = [];

  constructor() {
    if (!this.name) {
      throw new Error('loader require define name');
    }
  }

  public register(from: string, element: ElementType): void {
    log(`load element from ${from}`);
    this.elements.push(element);
  }
}
