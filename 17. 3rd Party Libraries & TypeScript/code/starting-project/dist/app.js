// LODASH EXAMPLE
// --------------------
import _ from 'lodash';
const numbers = [1, 2, 3, 4, 5];
// split that into multiple arrays
const chunkedArray = _.chunk(numbers, 2);
// ZOD EXAMPLE
// --------------------
import fs from 'node:fs';
import { z } from 'zod';
// With simple string
const stringSchema = z.string();
function outputSting(data) {
    console.log(data);
}
const parsedString = stringSchema.parse('Hello World'); // If there is no error, parsedString will be a string without defining a type explicitly. Huge thing !
outputSting(parsedString); // You can use the parsedString as a DataString type without defining it explicitly
// const dataSchemaNumber = z.number();
// const parsedDataNumber = dataSchemaNumber.parse(content) //! This will throw an error if content is not a string during the runtime
// With a complex object
const dataSchema = z.object({
    title: z.string(),
    id: z.number(),
    value: z.array(z.union([z.string(), z.number()]))
});
function output(data) {
    console.log(data);
}
const content = JSON.parse(fs.readFileSync('data.json').toString());
const parsedData = dataSchema.parse(content); // If there is no error, parsedData will be an object without defining a type explicitly. Huge thing !
output(parsedData); // You can use the parsedData as a Data type without defining it explicitly
//# sourceMappingURL=app.js.map