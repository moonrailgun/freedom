export class BaseLoader<ElementType> {
  elements: ElementType[];

  register(from: string, element: ElementType): void {
    this.elements.push(element);
  }
}
