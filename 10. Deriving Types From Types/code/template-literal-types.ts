// TEMPLATE LITERAL TYPES
// ----------------------------

// template literal: Javascript feature that allows to inject in a string a value store in a variable using backticks `${value}`, `{1 + 1}`

// template literal type : Typescript feature that force Typescript to create a new string literal type and injecting union types to create multiple new string literal types
//  - the syntax is the same as template literal in JS : `${type}`

const mainUserName = "Dwight";
const greeting = `Hi there, ${mainUserName}!`; // template literal in JS


type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

type FilePermissions = `${ReadPermissions}-${WritePermissions}`; // template literal type in TS => 4 string literal types 'no-read-no-write', 'no-read-write', 'read-no-write', 'read-write'


type DataFile = {
  data: string,
  permissions: FilePermissions
};

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
  [Key in DataFileEventNames]: () => void
};