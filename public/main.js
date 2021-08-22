"use strict";
// let greet : Function;
// greet = () => {
//   console.log('hello world')
// }
//End
// type StringOrNum = string | number;
// const add = (a: number, b: number, c?: StringOrNum) => {
//   console.log(a + b)
// }
//add(20, 2);
//End
// let logDetails: (obj: {name: string, age: number}) => void
// type person = { name: string, age: number }
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`)
// }
//End
// import {Invoice} from './classes/Invoices.js'
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// console.log(invOne.format(), invTwo.format())
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)
//End
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: 'shaun',
//   age: 30,
//   speak(text: string): void {
//     console.log(text)
//   },
//   spend(amount: number): number {
//     console.log('I spent', amount);
//     return amount;
//   }
// }
// const greetPerson = (person: IsPerson) => {
//   console.log('Hello', person.name)
// }
// greetPerson(me);
//End
// import {Invoice} from './classes/Invoices.js'
// import {Payment} from './classes/Payment.js'
// import {HasFormatter} from './interfaces/HasFormatter'
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)
// let docs: HasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)
//End
/*
Solution for this is generic:

const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100)
  return {...obj, uid}
}

let docOne = addUID({name: 'yoshi', age: 40})

console.log(docOne.name)

*/
// const addUID = <T extends {name: string}>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100)
//   return {...obj, uid}
// }
// let docOne = addUID({name: 'yoshi', age: 40})
// console.log(docOne.name)
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: 'person',
//   data: { name: 'shaun' }
// }
// const docFour: Resource<string[]> = {
//   uid: 1,
//   resourceName: 'person',
//   data: ['bread', 'milk', 'toilet roll']
// }
// console.log(docThree, docFour);
//END
// ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// interface Resource<T> {
//   uid: number;
//   resourceName: ResourceType;
//   data: T;
// }
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: ResourceType.BOOK,
//   data: { name: 'shaun' }
// }
// const docFour: Resource<string[]> = {
//   uid: 1,
//   resourceName: ResourceType.DIRECTOR,
//   data: ['bread', 'milk', 'toilet roll']
// }
// console.log(docThree, docFour);
//END
//tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
let student;
//student = [234234, 'ken'];
student = ['chun-li', 223423];
