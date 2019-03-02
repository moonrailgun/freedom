import debug from 'debug';
const log = debug('freedom:loader');

export interface ILoader<ElementType> {
  name: string;
  register(from: string, element: ElementType): void;
}

export abstract class BaseLoader<ElementType> implements ILoader<ElementType> {
  public abstract name: string;
  public elements: ElementType[] = [];

  public register(from: string, element: ElementType): void {
    log(`load element from ${from}`);
    this.elements.push(element);
  }
}
