// ORGANIZING FILES & FOLDERS
// ------------------------------

// namespace is a Typescript feature
// "export" allows to export a feature from a namespace. That means that the feature can be used outside of the namespace and this file.
//  <reference path="decorators/autobind.ts" /> is the way to import a namespace in another file.
// "App" is the namespace name. The name has to be "App" because you have to put the things that want to use something from that import namespace into the same namespace. In the main file, namespace is "App" as well.

// in tsconfig.json uncomment "outFile" to tell Typescript that it should concatenate namespaces into a single file. Choose a name for the output file, e.g. ""outFile": "./dist/bundle.js"".
// Also, you have to set "module" to "amd" or "system" to make it work. If you set it to "commonjs", the namespaces will not be concatenated into a single file.
// "moduleResolution": "node" is not needed for namespaces, but it is needed for modules. It tells Typescript how to resolve modules. If you use namespaces, you can set it to "classic" or "node". If you use modules, you have to set it to "node". You need it with Babel, because Babel uses the Node.js module resolution algorithm to resolve modules.

// in index.html, change the script tag to load the concatenated file instead of the individual files (<script src="dist/app.js" defer></script>)


// AUTOBIND DECORATOR
namespace App {
  export function AutoBind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
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
}