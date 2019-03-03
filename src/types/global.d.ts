import { GameManager } from '../lib/GameManager';

declare global {
  interface Window {
    gameManager: GameManager;
  }
}
