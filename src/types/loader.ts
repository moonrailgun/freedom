import { BaseLoader } from 'lib/loader/BaseLoader';

export type ILoaderClass<
  T extends IBaseElement = IBaseElement
> = new () => BaseLoader<T>;

export interface IBaseElement {
  name: string;
}

export type UIElement = IBaseElement & {};

export type StageElement = IBaseElement & {
  order: number;
  getNextStage(): string | null;
  getView(): JSX.Element | null;
};
