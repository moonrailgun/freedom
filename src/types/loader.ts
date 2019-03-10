import { BaseLoader } from 'lib/loader/BaseLoader';

export type ILoaderClass<
  T extends IBaseElement = IBaseElement
> = new () => BaseLoader<T>;

export interface IBaseElement {
  name: string;
  onLoad?(): void; // 全部注册完毕之后执行onLoad
}

export type UIElement = IBaseElement & {};

export type StageElement = IBaseElement & {
  order: number;
  getNextStage(): string | null;
  getView(): JSX.Element | null;
};
