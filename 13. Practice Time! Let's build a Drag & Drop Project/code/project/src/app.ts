class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true); // importNode(template, deep) creates a copy of the template content
    this.element = importedNode.firstElementChild as HTMLFormElement; // firstElementChild returns the first child element of the specified element
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element) // insertAdjacentElement(where, element) inserts the element at the specified position relative to the target element
  }
}

const projectInput = new ProjectInput();