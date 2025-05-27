// ORGANIZING FILES & FOLDERS
// ------------------------------

// namespace is a Typescript feature
// "export" allows to export a feature from a namespace. That means that the feature can be used outside of the namespace and this file.
//  <reference path="state/project-state.ts" /> is the way to import a namespace in another file.
// "App" is the namespace name. The name has to be "App" because you have to put the things that want to use something from that import namespace into the same namespace. In the main file, namespace is "App" as well.

// in tsconfig.json uncomment "outFile" to tell Typescript that it should concatenate namespaces into a single file. Choose a name for the output file, e.g. ""outFile": "./dist/bundle.js"".
// Also, you have to set "module" to "amd" or "system" to make it work. If you set it to "commonjs", the namespaces will not be concatenated into a single file.
// "moduleResolution": "node" is not needed for namespaces, but it is needed for modules. It tells Typescript how to resolve modules. If you use namespaces, you can set it to "classic" or "node". If you use modules, you have to set it to "node". You need it with Babel, because Babel uses the Node.js module resolution algorithm to resolve modules.



// PROJECT STATE MANAGEMENT
namespace App {
  // This type doesn't need to be exported because it is only used internally in the ProjectState class.
  type Listener<T> = (items: T[]) => void; // This type defines a function that takes an array of Project objects as an argument and returns void. It is used to define the type of the listener functions that will be added to the state management.

  // This class doesn't need to be exported because it is only used internally in the ProjectState class.
  class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFunction: Listener<T>) {
      this.listeners.push(listenerFunction);
    }
  }

  export class ProjectState extends State<Project> {
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
      this.updateListeners(); // Notify all listeners that a new project has been added
    }

    moveProject(projectId: string, newStatus: ProjectStatus) {
      const project = this.projects.find(project => project.id === projectId);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListeners(); // Notify all listeners that a project has been moved
      }
    }

    private updateListeners() {
      for (const listener of this.listeners) {
        listener(this.projects.slice()); // slice() creates a shallow copy of the array, so that the original array is not modified
      }
    }
  }

  export const projectState = ProjectState.getInstance(); // Get the singleton instance of ProjectState
}