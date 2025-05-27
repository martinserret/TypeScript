// USING ES MODULES
// ------------------------------

// Importing a module with es modules: import { something } from './some-module.js';  (.js is not mandatory)

// In tsconfig.json, module need to be set to "es2015" or "esnext" to use ES modules and comment the line "outFile"

// in index.html, change the script tag to use type="module" to enable ES modules and delete defer (<script type="module" src="dist/app.js"></script>)

import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');