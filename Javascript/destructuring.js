/*  ES6 provides a new feature called destructuring 
    assignment that allows us to destructure properties
    of an OBJECT or elements of an ARRAY into individual
    variables */

//-----Array destructuring example-----//

const myArray = ["Timi", "John", "Mathew", "Tony", "Brad", "Jenny", "Andreea"];

/*  from the above [myArray] if we need to store both of the first 
    two persons in they're own variable we could do it like this
    before ES6 destructuring syntax: */

let pers1 = myArray[0];
let pers2 = myArray[1];
console.log(pers1, pers2); // logs Timi John

//  but using destructuring gives us back cleanner code:

let [persTwo, persThree] = myArray;
console.log(persTwo, persThree); // also logs Timi John

// we can also skip over elements:

let [name1, , name3] = myArray;
console.log(name1, name3); // logs Timi, Mathew

/*  in the below example we single out the first two names of [myArray]
    while the rest of the names are stored in a new list [otherPersons]
    using javaScript spread operator*/

const [timi, john, ...otherPersons] = myArray;

console.log(timi, john);
console.log(otherPersons);

//----------Destructuring objects------------//

const user = {
  email: "john@gmail.com",
  pasword: "45.A6#319*74",
  firstName: "John",
  lastName: "Doe",
  born: 1945,
  died: 2009,
};

const { email, pasword, born: birthYear, died, age } = user;

console.log(email, pasword, birthYear, died, age); //logs john@gmail.com, 45.A6#319*74, 1945, 2009, undefined

/*  When destructuring an object the name of the variable we chose must
    be the same like key of the object's property. In the above exemple
    we store the user's email property in a variable with the same name
    const {email}=user , so what is between the curly brackets in our
    example email, is searched in the object properties and if the object
    has a email property than we can pull that property value in our va-
    riable, if there is no email property then our variable email will 
    be undefined. 
    If we need to store the user.email in a variable with a different 
    name, then we must in the curly brackets write the name of the obj
    property then our chosen name for the variable that will store the 
    obj property value separated by colon .
    const {born:birthYear} = user 
    In he above example we store user.born in the variable birtYear.*/

//----------Important-----------//

user.born = 1920; // here we change the user's object born property
console.log(birthYear); // but our birthYear variable does not change
console.log(user.born);
/* this happens because in JS variables are passed by value whilst objects
    are referenced */
