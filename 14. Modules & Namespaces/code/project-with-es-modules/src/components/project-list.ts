// USING ES MODULES
// ------------------------------

// Importing a module with es modules: import { something } from './some-module.js'; 

// in index.html, change the script tag to use type="module" to enable ES modules and delete defer (<script type="module" src="dist/app.js"></script>)

// You can annotate the TypeScript feature you import before the curly brackets if you only import the same type of feature or inside the curly brackets if you import multiple features from the same module
// It's not necessary and not recommended but depending on the build tool you use, this annotation can help the build tool understand what's a type and what's an actual thing that should be converted to JavaScript.
// That can be the calculation more efficient or it may even be required to make the project compilation or running the project work.
// eg. import { type DragTarget } from '../models/drag-drop.js';
// eg. import type { DragTarget } from '../models/drag-drop.js';


import Component from "./base-component.js"; // because export default
import { Project, ProjectStatus } from '../models/project.js';
import { AutoBind } from '../decorators/autobind.js';
import { projectState } from '../state/project-state.js';
import type { DragTarget } from '../models/drag-drop.js';
import { ProjectItem } from './project-item.js';

// PROJECTLIST CLASS
export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
  assignedProjects: Project[]; // This will hold the projects assigned to this list

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);
    this.assignedProjects = []; // Initialize the assignedProjects array

    this.configure(); // Call the configure method to set up the listener for project updates
    this.renderContent(); // Call the renderContent method to set up the initial content of the project list
  }

  @AutoBind
  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault(); // by default drag and drop events is to not allow dropping => so prevent default
      const listElement = this.element.querySelector('ul')!;
      listElement.classList.add('droppable'); // Add a class to the list element to indicate that it is a droppable area (background color changes to white to indicate that it is a droppable area)
    }
  }

  @AutoBind
  dropHandler(event: DragEvent): void {
    const projectId = event.dataTransfer!.getData('text/plain'); // getData(format) retrieves the data that was set in the dragStartHandler. The format is 'text/plain' and the data is the project id.
    projectState.moveProject(projectId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished); // Move the project to the new status based on the type of the project list
  }

  @AutoBind
  dragLeaveHandler(_event: DragEvent): void {
    const listElement = this.element.querySelector('ul')!;
    listElement.classList.remove('droppable');
  }

  configure() {
    this.element.addEventListener('dragover', this.dragOverHandler); // dragover event is fired when an element is being dragged over a valid drop target.
    this.element.addEventListener('drop', this.dropHandler); // drop event is fired when an element is dropped on a valid drop target.
    this.element.addEventListener('dragleave', this.dragLeaveHandler); // dragleave event is fired when an element is dragged out of a valid drop target.

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