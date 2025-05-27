// ORGANIZING FILES & FOLDERS
// ------------------------------

// namespace is a Typescript feature
// "export" allows to export a feature from a namespace. That means that the feature can be used outside of the namespace and this file.
//  <reference path="components/project-input.ts" /> is the way to import a namespace in another file.
// "App" is the namespace name. The name has to be "App" because you have to put the things that want to use something from that import namespace into the same namespace. In the main file, namespace is "App" as well.

// in tsconfig.json uncomment "outFile" to tell Typescript that it should concatenate namespaces into a single file. Choose a name for the output file, e.g. ""outFile": "./dist/bundle.js"".
// Also, you have to set "module" to "amd" or "system" to make it work. If you set it to "commonjs", the namespaces will not be concatenated into a single file.
// "moduleResolution": "node" is not needed for namespaces, but it is needed for modules. It tells Typescript how to resolve modules. If you use namespaces, you can set it to "classic" or "node". If you use modules, you have to set it to "node". You need it with Babel, because Babel uses the Node.js module resolution algorithm to resolve modules.

/// <reference path="base-component.ts" />

// PROJECTINPUT CLASS
namespace App {
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
}