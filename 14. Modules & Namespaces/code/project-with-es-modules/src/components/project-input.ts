// USING ES MODULES
// ------------------------------

// Importing a module with es modules: import { something } from './some-module.js'; 

// in index.html, change the script tag to use type="module" to enable ES modules and delete defer (<script type="module" src="dist/app.js"></script>)

// you can also use import * as Validation from "../util/validation.js"; and then use Validation.validate() to call the validate function or Validation.Validate. This is useful if you want to import multiple functions from the same module and keep the code clean.

// you can assign alias with "as" key word: import { AutoBind as autobind } from "../decorators/autobind.js"; 

import Component from "./base-component.js"; // because export default
import { Validatable, validate } from "../util/validation.js";
import { AutoBind } from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";


// PROJECTINPUT CLASS
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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