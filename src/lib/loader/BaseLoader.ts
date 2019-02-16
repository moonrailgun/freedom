export class BaseLoader<ElementType> {
  elements: ElementType[];

  register(element: ElementType): void {
    this.elements.push(element);
  }
}
