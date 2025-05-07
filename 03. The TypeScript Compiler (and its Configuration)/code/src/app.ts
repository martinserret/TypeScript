//*****************************************************************************************************************************************
//* To create a Typescript configuration file (in terminal) : tsc --inits *
//*****************************************************************************************************************************************

//*****************************************************************************************************************************************
//* Language and Environment settings
//* - "target" : very important setting that tell to Typescript in which version to compile the code in Javascript
//* - "lib" : allow to include some standard type librairies
//* - "jsx" : control how the JSX code should be treated when Typescript code contains JSX 
//*****************************************************************************************************************************************

//*****************************************************************************************************************************************
//* Modules
//* - "module" : allow how imports and exports work (NodeNext is a good choice for Node.js projects)
//* - "rootDir" : control which folder wil contain the source files
//*****************************************************************************************************************************************

//*****************************************************************************************************************************************
//* JavaScript Support
//* - "allowJS" : allow combinaison of Javascript and Typescript in the project
//* - "checkJS" : basic type checking in JS files
//*****************************************************************************************************************************************

//*****************************************************************************************************************************************
//* Emit
//* - "sourceMap" : when Typescript compiles the code, it also generates source maps which can help with debugging the running application
//* - "outFile" : bundle multiple input files into one single output file
//* - "outDir" : allow to specify a directory in which the compiled files will be stored
//* - "noEmitOnError" : ensure that no new files are created and output if there is an error during compilation
//*****************************************************************************************************************************************

//*****************************************************************************************************************************************
//* Type Checking
//* - "allowJS" : allow combinaison of Javascript and Typescript in the project
//* - "checkJS" : basic type checking in JS files
//*****************************************************************************************************************************************


let userName: string;

userName = "Dwight";

console.log(userName);