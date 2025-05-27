// ORGANIZING FILES & FOLDERS
// ------------------------------

// namespace is a Typescript feature
// "export" allows to export a feature from a namespace. That means that the feature can be used outside of the namespace and this file.
//  <reference path="components/project-item.ts" /> is the way to import a namespace in another file.
// "App" is the namespace name. The name has to be "App" because you have to put the things that want to use something from that import namespace into the same namespace. In the main file, namespace is "App" as well.

// in tsconfig.json uncomment "outFile" to tell Typescript that it should concatenate namespaces into a single file. Choose a name for the output file, e.g. ""outFile": "./dist/bundle.js"".
// Also, you have to set "module" to "amd" or "system" to make it work. If you set it to "commonjs", the namespaces will not be concatenated into a single file.
// "moduleResolution": "node" is not needed for namespaces, but it is needed for modules. It tells Typescript how to resolve modules. If you use namespaces, you can set it to "classic" or "node". If you use modules, you have to set it to "node". You need it with Babel, because Babel uses the Node.js module resolution algorithm to resolve modules.


/// <reference path="base-component.ts" />

// PROJECTITEM CLASS
namespace App {
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
}