import { IBaseElement } from 'types/loader';

export const registerElement = (loaderName: string) => (
  Constructor: IBaseElement
) => {
  window.gameManager.getLoader(loaderName).register(Constructor);
};
