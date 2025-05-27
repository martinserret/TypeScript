// ORGANIZING FILES & FOLDERS
// ------------------------------

// namespace is a Typescript feature
// "export" allows to export a feature from a namespace. That means that the feature can be used outside of the namespace and this file.
//  <reference path="components/base-component.ts" /> is the way to import a namespace in another file.
// "App" is the namespace name. The name has to be "App" because you have to put the things that want to use something from that import namespace into the same namespace. In the main file, namespace is "App" as well.

// in tsconfig.json uncomment "outFile" to tell Typescript that it should concatenate namespaces into a single file. Choose a name for the output file, e.g. ""outFile": "./dist/bundle.js"".
// Also, you have to set "module" to "amd" or "system" to make it work. If you set it to "commonjs", the namespaces will not be concatenated into a single file.
// "moduleResolution": "node" is not needed for namespaces, but it is needed for modules. It tells Typescript how to resolve modules. If you use namespaces, you can set it to "classic" or "node". If you use modules, you have to set it to "node". You need it with Babel, because Babel uses the Node.js module resolution algorithm to resolve modules.


// COMPONENT BASE CLASS
namespace App {
  export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
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
}