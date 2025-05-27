// WORKING WITH NAMESPACES
// ------------------------------

// namespace is a Typescript feature
// "export" allows to export a feature from a namespace. That means that the feature can be used outside of the namespace and this file.
//  <reference path="project-model.ts" /> is the way to import a namespace in another file.
// "App" is the namespace name. The name has to be "App" because you have to put the things that want to use something from that import namespace into the same namespace. In the main file, namespace is "App" as well.

// in tsconfig.json uncomment "outFile" to tell Typescript that it should concatenate namespaces into a single file. Choose a name for the output file, e.g. ""outFile": "./dist/bundle.js"".
// Also, you have to set "module" to "amd" or "system" to make it work. If you set it to "commonjs", the namespaces will not be concatenated into a single file.
// "moduleResolution": "node" is not needed for namespaces, but it is needed for modules. It tells Typescript how to resolve modules. If you use namespaces, you can set it to "classic" or "node". If you use modules, you have to set it to "node". You need it with Babel, because Babel uses the Node.js module resolution algorithm to resolve modules.

// in index.html, change the script tag to load the concatenated file instead of the individual files (<script src="dist/app.js" defer></script>)


// PROJECT TYPE
namespace App {
  export enum ProjectStatus { Active, Finished } // Enum is a special "class" that represents a group of constants (unchangeable variables). It is used to define a set of named constants. Here, we define two constants: active and finished.

  export class Project { // here a class and not an interface or type is used because we want to create instances of this class
    constructor(public id: string, public title: string, public description: string, public people: number, public status: ProjectStatus) { }
  }
}