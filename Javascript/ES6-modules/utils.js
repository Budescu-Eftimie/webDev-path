/*Named exports are distinguished by their names. There can be
  several named exports in a module. A module can export selected 
  components using the syntax given below −

  Syntax 1 */

//export const name = "timi";
//export const add = (a, b) => a + b;

// Syntax 2

const name = "Timi";
const add = (a, b) => a + b;

export { name, add };

// We can export variables,function,classes
