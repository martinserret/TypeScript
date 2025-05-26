// DRAG AND DROP INTERFACES
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

// PROJECT TYPE
enum ProjectStatus { Active, Finished } // Enum is a special "class" that represents a group of constants (unchangeable variables). It is used to define a set of named constants. Here, we define two constants: active and finished.

class Project { // here a class and not an interface or type is used because we want to create instances of this class
  constructor(public id: string, public title: string, public description: string, public people: number, public status: ProjectStatus) { }
}

// PROJECT STATE MANAGEMENT
type Listener<T> = (items: T[]) => void; // This type defines a function that takes an array of Project objects as an argument and returns void. It is used to define the type of the listener functions that will be added to the state management.

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFunction: Listener<T>) {
    this.listeners.push(listenerFunction);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    // This is a singleton class, so the constructor is private to prevent instantiation from outside the class.
    super();
  }

  static getInstance() { // This method returns the singleton instance of the ProjectState class.
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(title + Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);

    this.projects.push(newProject);

    for (const listener of this.listeners) {
      listener(this.projects.slice()); // slice() creates a shallow copy of the array, so that the original array is not modified
    }
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

// COMPONENT BASE CLASS
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
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

// PROJECTITEM CLASS
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
  private project: Project;

  get persons() {
    return this.project.people === 1 ? '1 person' : `${this.project.people} persons`;
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler); // dragstart event is fired when the user starts dragging an element.
    this.element.addEventListener('dragend', this.dragEndHandler); // dragend event is fired when the user stops dragging an element.
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
    this.element.querySelector('p')!.textContent = this.project.description;
  }

  @AutoBind
  dragStartHandler(event: DragEvent): void {
    console.log(event);
  }

  @AutoBind
  dragEndHandler(_event: DragEvent): void {
    console.log('DRAG END');
  }
}


// PROJECTLIST CLASS
class ProjectList extends Component<HTMLDivElement, HTMLElement> {
  assignedProjects: Project[]; // This will hold the projects assigned to this list

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);
    this.assignedProjects = []; // Initialize the assignedProjects array

    this.configure(); // Call the configure method to set up the listener for project updates
    this.renderContent(); // Call the renderContent method to set up the initial content of the project list
  }

  configure() {
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter(project => {
        if (this.type === 'active') {
          return project.status === ProjectStatus.Active;
        }
        return project.status === ProjectStatus.Finished;
      });

      this.assignedProjects = relevantProjects;
      this.renderProjects();
    })
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId; // querySelector(selector) returns the first element that matches the specified selector. The "!" asserts that the value is not null or undefined.
    this.element.querySelector("h2")!.textContent = this.type.toUpperCase() + " PROJECTS";
  }

  private renderProjects() {
    const listElement = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
    listElement.innerHTML = ''; // Clear the list before rendering new projects
    for (const project of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, project); // Create a new ProjectItem for each project and pass the host element id and project object
    }
  }
}



// PROJECTINPUT CLASS
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');

    // GET THE INPUT ELEMENTS
    this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;

    this.configure();
  }

  configure() {
    this.element.addEventListener('submit', this.submitHandler); // bind(this) binds the context of the function to the current instance of the class. So that 'this' inside the function refers to the class instance
  }

  renderContent() { }

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
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');