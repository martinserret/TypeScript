// AUTOBIND DECORATOR
function AutoBind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  const bindDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const bindFunction = originalMethod.bind(this);
      return bindFunction;
    }
  }

  return bindDescriptor;
}

// PROJECTINPUT CLASS
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    // GET THE TEMPLATE AND HOST ELEMENTS
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    // CREATE THE ELEMENT
    const importedNode = document.importNode(this.templateElement.content, true); // importNode(template, deep) creates a copy of the template content
    this.element = importedNode.firstElementChild as HTMLFormElement; // firstElementChild returns the first child element of the specified element
    this.element.id = 'user-input';

    // GET THE INPUT ELEMENTS
    this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;

    this.configure();

    this.attach();
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
    console.log(this.descriptionInputElement.value);
    console.log(this.peopleInputElement.value);

  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler); // bind(this) binds the context of the function to the current instance of the class. So that 'this' inside the function refers to the class instance
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element); // insertAdjacentElement(where, element) inserts the element at the specified position relative to the target element
  }
}

const projectInput = new ProjectInput();