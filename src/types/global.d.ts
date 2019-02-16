import { GameManager } from '../lib/GameManager';

declare global {
  interface Window {
    GameManager: GameManager;
  }
}
