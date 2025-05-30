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
const content = fs.readFileSync('data.json');
const dataSchema = z.number();
const parsedData = dataSchema.parse(content); // This will throw an error if content is not a string during the runtime
//# sourceMappingURL=app.js.map