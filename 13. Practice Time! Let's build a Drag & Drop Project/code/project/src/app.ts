// PROJECT TYPE
enum ProjectStatus { active, Finished } // Enum is a special "class" that represents a group of constants (unchangeable variables). It is used to define a set of named constants. Here, we define two constants: active and finished.

class Project { // here a class and not an interface or type is used because we want to create instances of this class
  constructor(public id: string, public title: string, public description: string, public people: number, public status: ProjectStatus) { }
}

// PROJECT STATE MANAGEMENT
type Listener = (items: Project[]) => void; // This type defines a function that takes an array of Project objects as an argument and returns void. It is used to define the type of the listener functions that will be added to the state management.

class ProjectState {
  private listeners: Listener[] = [];
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    // This is a singleton class, so the constructor is private to prevent instantiation from outside the class.
  }

  static getInstance() { // This method returns the singleton instance of the ProjectState class.
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(title + Math.random().toString(), title, description, numOfPeople, ProjectStatus.active);

    this.projects.push(newProject);

    for (const listener of this.listeners) {
      listener(this.projects.slice()); // slice() creates a shallow copy of the array, so that the original array is not modified
    }
  }

  addListener(listenerFunction: Listener) {
    this.listeners.push(listenerFunction);
  }
}

const projectState = ProjectState.getInstance(); // Get the singleton instance of ProjectState


// VALIDATION
interface Validatable {
  value: string | number,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  min?: number,
  max?: number
}

function validate(validatableInput: Validatable) {
  let isValid = true;

  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }

  if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
  }

  if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
  }

  if (validatableInput.min != null && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }

  if (validatableInput.max != null && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }

  return isValid;
}


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

// PROJECTLIST CLASS
class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  assignedProjects: Project[]; // This will hold the projects assigned to this list

  constructor(private type: 'active' | 'finished') {
    // GET THE TEMPLATE AND HOST ELEMENTS
    this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;
    this.assignedProjects = []; // Initialize the assignedProjects array

    // CREATE THE ELEMENT
    const importedNode = document.importNode(this.templateElement.content, true); // importNode(template, deep) creates a copy of the template content
    this.element = importedNode.firstElementChild as HTMLElement; // firstElementChild returns the first child element of the specified element
    this.element.id = `${this.type}-projects`;

    projectState.addListener((projects: Project[]) => {
      this.assignedProjects = projects;
      this.renderProjects();
    })

    this.attach();
    this.renderContent();
  }

  private renderProjects() {
    const listElement = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
    for (const project of this.assignedProjects) {
      const listItem = document.createElement('li');
      listItem.textContent = project.title;
      listElement.appendChild(listItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId; // querySelector(selector) returns the first element that matches the specified selector. The "!" asserts that the value is not null or undefined.
    this.element.querySelector("h2")!.textContent = this.type.toUpperCase() + " PROJECTS";
  }


  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element); // insertAdjacentElement(where, element) inserts the element at the specified position relative to the target element
  }
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

  private gatherUserInputs(): [string, string, number] | void { // [string, string, number] is the way to define a tuple type in TypeScript. Here, exactly three values are expected: a string, a string, and a number respectively.
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true
    }

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
      maxLength: 100
    }

    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5
    }

    if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
      alert('Invalid input, please try again!');
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople]; // the "+"" converts the string to a number. We can also use parseInt() or parseFloat() to convert the string to a number
    }
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    // console.log(this.titleInputElement.value);
    // console.log(this.descriptionInputElement.value);
    // console.log(this.peopleInputElement.value);

    const userInputs = this.gatherUserInputs();
    if (Array.isArray(userInputs)) { // Array.isArray() checks if the value is an array
      const [title, description, people] = userInputs;
      projectState.addProject(title, description, people); // Add the project to the state management
      this.clearInputs();
    }
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler); // bind(this) binds the context of the function to the current instance of the class. So that 'this' inside the function refers to the class instance
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element); // insertAdjacentElement(where, element) inserts the element at the specified position relative to the target element
  }
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');