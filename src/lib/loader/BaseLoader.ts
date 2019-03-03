import debug from 'debug';
import { IBaseElement } from 'types/loader';
const log = debug('freedom:loader');

export interface ILoader<E extends IBaseElement> {
  name: string;
  register(element: E): void;
}

export abstract class BaseLoader<E extends IBaseElement> implements ILoader<E> {
  public abstract name: string;
  public elements: E[] = [];

  public register(element: E): void {
    const from = element.name;
    log(`load element from ${from}`);
    this.elements.push(element);
  }

  public getElements() {
    return this.elements;
  }
}
