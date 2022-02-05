/*  ES6 provides a new feature called destructuring 
    assignment that allows us to destructure properties
    of an OBJECT or elements of an ARRAY into individual
    variables */

//-----Array destructuring example-----//

const myArray = ["Timi", "John", "Mathew", "Tony"];

/*  from the above [myArray] if we need to store both of the first 
    two persons in they're own variable we could do it like this
    before ES6 destructuring syntax: */

const pers1 = myArray[0];
const pers2 = myArray[1];
console.log(pers1, pers2); // logs Timi John

//  but with destructuring is much better

const [persTwo, persThree] = myArray;

console.log(persTwo, persThree); // also logs Timi John
