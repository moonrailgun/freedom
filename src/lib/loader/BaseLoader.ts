import debug from 'debug';
import { EventEmitterCallback, IEventEmitter } from 'types/global';
import { IBaseElement } from 'types/loader';
const log = debug('freedom:loader');

export interface ILoader<E extends IBaseElement> {
  name: string;
  register(element: E): void;
}

export abstract class BaseLoader<E extends IBaseElement>
  implements ILoader<E>, IEventEmitter {
  public abstract name: string;
  public elements: E[] = [];
  public _events = {};

  public register(element: E): void {
    const from = element.name;
    log(`load element from ${from}`);
    this.elements.push(element);
  }

  public getElements() {
    return this.elements;
  }

  public on(name: string, cb: EventEmitterCallback) {
    if (this._events[name]) {
      this._events[name].push(cb);
    } else {
      this._events[name] = [cb];
    }
  }

  public emit(name: string, data?: {}) {
    const events = this._events[name];
    if (events) {
      for (const callback of events) {
        callback(data);
      }
    }
  }
}
