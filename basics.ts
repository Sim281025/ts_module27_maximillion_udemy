//Primitives

//Numbers
let age: number;
age = 12.1;

let pay: number = 24;
//side note if you used a capital N for number it would point to the Number object not the primitive!


//string
let userName: string;
userName = 'Max';

//boolean
let isInstructor: boolean = true;

//null and undefined are types



//COMPLEX  TYPES
//ARRAY
let hobbies: string[];
hobbies = ['gym class', 'reading'];


//typescript automatically assigns any if you do not assign a type to a variable by default
let person;
person = {
    name: 'Max',
    age: 32
}

//OBJ
//define the type for an object
let user: {};

//defines the object type and the obj properties
let student: {
    name: string;
    age: number;
};

//this is the actual object instance it uses an =
student = {
    name: 'May',
    age: 22
};

//ARRAY OF OBJ
let cohort: {
    name: string;
    age: number
}[];

//the array would look like

cohort = [{name: 'Jay', age: 22}, {name: 'Matt', "age": 33}]

// TYPE INFERENCES

// ts infers that course is of type string because you have given it a string value.
let course = 'React - the complete guide';


//TYPE UNION
//allows variable to have 2 or more types
let training: string | number = 'Basketball';
training = 12341;

let firstName: string | string[]; // can be one string or an array of strings










