"use strict";
// isntead of person: Object
var greeting = function (person) {
    console.log("Good day " + person.name + ", you are " + person.age + " years");
};
greeting({ name: "matt" });
// need to specify a type for the person argument
// const greeting = (person: string) => {
// 	console.log("good day" + person)
// }
var foo = 20;
// greeting("Matt")
var isAwesome = true;
var decimalNumber = 32;
var binaryNumber = 85; // the b is base and necesssary
var octalNumber = 3948;
var hexNumber = 0x2a;
console.log(hexNumber);
// array has been heterogeneous. each element could be of different types
// this can enforece an homogenous array
var myPetFamily = ["rocket", "fluffy", "harry"];
// tuple = an array that contains a fixed number of elments and each of those elements are of a specific type
var tuple; // this specifies the type in each element
tuple = ["chair", 20, true]; // this provides the values
// ENUMERATION
// instead of using a numeric index, use a symbolic name enum
// numbers each element from 0
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Large"] = 2] = "Large";
})(Sizes || (Sizes = {}));
console.log("medium is " + Sizes.Medium);
// an array is faster inperformance
var stocklevel = [];
stocklevel[Sizes.Medium] = 20;
console.log(stocklevel);
// // void here specifies that there are no return values
// // specifes the return type in (): number
// const myfunc = (): number => {
// 	console.log("foo")
// 	if (x) {
// 		return 123
// 	}
// }
// // specifies more than one type for the return value
// const afunc = (x): number | undefined => {
// 	console.log("foo")
// 	if (x) {
// 		return 123
// 	}
// }
// let x = myfunc(false)
// console.log(x)
