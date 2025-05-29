// USING ES MODULES
// ------------------------------

// Importing a module with es modules: import { something } from './some-module.js'; 

// in index.html, change the script tag to use type="module" to enable ES modules and delete defer (<script type="module" src="dist/app.js"></script>)

// You can annotate the TypeScript feature you import before the curly brackets if you only import the same type of feature or inside the curly brackets if you import multiple features from the same module
// It's not necessary and not recommended but depending on the build tool you use, this annotation can help the build tool understand what's a type and what's an actual thing that should be converted to JavaScript.
// That can be the calculation more efficient or it may even be required to make the project compilation or running the project work.
// eg. import { type DragTarget } from '../models/drag-drop.js';
// eg. import type { DragTarget } from '../models/drag-drop.js';

import { Draggable } from '../models/drag-drop.js';
import { Project } from '../models/project.js';
import Component from "./base-component.js"; // because export default
import { AutoBind } from '../decorators/autobind.js';

// PROJECTITEM CLASS
export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
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

  @AutoBind
  dragStartHandler(event: DragEvent): void {
    // setData(format, data) sets the data to be dragged. The format is 'text/plain' and the data is the project id.
    // attach the ID is all we need to do here to fetch the project later when it is dropped in the ProjectList. We wanna transfer only a small amount of data to save memory and performance.
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move'; // controls the cursor look, tells the browser our intention to move the item (alternative is 'copy' which would indicate that we want to copy the item instead of moving it => remove it from the original location)
  }

  @AutoBind
  dragEndHandler(_event: DragEvent): void { }

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler); // dragstart event is fired when t he user starts dragging an element.
    this.element.addEventListener('dragend', this.dragEndHandler); // dragend event is fired when the user stops dragging an element.
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}