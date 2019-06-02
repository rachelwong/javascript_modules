// enforce the schema on the person object
interface Person {
	name: string
	age: number
}

// isntead of person: Object
const greeting = (person: Person) => {
	console.log(`Good day ${person.name}, you are ${person.age} years`)
}

greeting({ name: "matt" })
// need to specify a type for the person argument
// const greeting = (person: string) => {
// 	console.log("good day" + person)
// }

let foo: number = 20
// greeting("Matt")

let isAwesome: boolean = true
let decimalNumber: number = 32
let binaryNumber: number = 0b1010101 // the b is base and necesssary
let octalNumber: number = 0o7554
let hexNumber: number = 0x2a

console.log(hexNumber)

// array has been heterogeneous. each element could be of different types
// this can enforece an homogenous array
let myPetFamily: string[] = ["rocket", "fluffy", "harry"]

// tuple = an array that contains a fixed number of elments and each of those elements are of a specific type
let tuple: [string, number, boolean] // this specifies the type in each element
tuple = ["chair", 20, true] // this provides the values

// ENUMERATION
// instead of using a numeric index, use a symbolic name enum
// numbers each element from 0
enum Sizes {
	Small,
	Medium,
	Large
}

console.log(`medium is ${Sizes.Medium}`)

// an array is faster inperformance
let stocklevel = []
stocklevel[Sizes.Medium] = 20
console.log(stocklevel)

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
