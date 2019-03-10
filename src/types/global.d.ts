import { GameManager } from '../lib/GameManager';

declare global {
  interface Window {
    gameManager: GameManager;
  }
}

type EventEmitterMap = {
  [name: string]: EventEmitterCallback[];
};
type EventEmitterCallback = (data?: {}) => void;

interface IEventEmitter {
  _events: EventEmitterMap;
  on: (name: string, cb: EventEmitterCallback) => void;
  once?: (name: string, cb: EventEmitterCallback) => void;
  emit: (name: string, data?: {}) => void;
}
