// COMPONENT BASE CLASS
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string) {
    // GET THE TEMPLATE AND HOST ELEMENTS
    this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    // CREATE THE ELEMENT
    const importedNode = document.importNode(this.templateElement.content, true); // importNode(template, deep) creates a copy of the template content
    this.element = importedNode.firstElementChild as U; // firstElementChild returns the first child element of the specified element

    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
  }

  abstract configure(): void; // This method must be implemented by the subclasses
  abstract renderContent(): void; // This method must be implemented by the subclasses
}
