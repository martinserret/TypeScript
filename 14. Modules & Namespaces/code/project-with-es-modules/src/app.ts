// USING ES MODULES
// ------------------------------

// Importing a module with es modules: import { something } from './some-module.js';  (.js is not mandatory)

// In tsconfig.json, module need to be set to "es2015" or "esnext" to use ES modules and comment the line "outFile"

// in index.html, change the script tag to use type="module" to enable ES modules and delete defer (<script type="module" src="dist/app.js"></script>)

// You can annotate the TypeScript feature you import before the curly brackets if you only import the same type of feature or inside the curly brackets if you import multiple features from the same module
// It's not necessary and not recommended but depending on the build tool you use, this annotation can help the build tool understand what's a type and what's an actual thing that should be converted to JavaScript.
// That can be the calculation more efficient or it may even be required to make the project compilation or running the project work.
// eg. import { type DragTarget } from '../models/drag-drop.js';
// eg. import type { DragTarget } from '../models/drag-drop.js';

import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');