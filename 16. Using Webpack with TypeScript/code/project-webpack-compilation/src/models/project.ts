// PROJECT TYPE
export enum ProjectStatus { Active, Finished } // Enum is a special "class" that represents a group of constants (unchangeable variables). It is used to define a set of named constants. Here, we define two constants: active and finished.

export class Project { // here a class and not an interface or type is used because we want to create instances of this class
  constructor(public id: string, public title: string, public description: string, public people: number, public status: ProjectStatus) { }
}