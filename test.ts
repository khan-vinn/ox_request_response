// import fs from 'fs'

// const header = ["Name","Gender"]

// const data = [
//     ["Hasanboy", 1],
//     ["Javlon", 1],
//     ["Nargiza", 2]
// ]
// fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
//     if (err) return console.log(err);
//     console.log('Hello World > helloworld.txt');
//   });

// function convertToTitle(columnNumber: number): string {
//     let res = '',t=0;
//     while(columnNumber>0){
//        let q =  columnNumber%26;
//        if(q==0) q=26;
//        columnNumber = (columnNumber-q)/26
//        res = String.fromCharCode(q+64)+res;
//     }
// return res;
// }
// console.log(String.fromCharCode(89));

//      Date format test
/*
let month = dateObj.getMonth()+1; //months from 1-12
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

let newdate = `${day} ${month} ${year}`
let creationHour =  new Date().getHours();
let creationMinute =  new Date().getMinutes();
let creationSec =  new Date().getSeconds();
let creationDay =  new Date();
console.log(creationHour);
console.log(creationMinute);
console.log(creationSec);
console.log(newdate);
*/

/**                               Interface in TS                          */

type Person = {
    name: string;
    age: number;
};

function greet(person: Person) {
    return "Hello " + person.name;
}

console.log(greet({ name: "john", age: 24 }));

/**                                Class                             */

class Man {
    private name: string;
    private age: number;

    public myMethod(): any {
        console.log("this is inside methods and welcome ", this.name);
    }
    public myMethodOut() {}

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const student = new Man("khan", 25);

student.myMethod();

let dateObj = new Date("2021-07-30T04:05:19.104+00:00")
    .toISOString()
    .replace(/T/, " ") // replace T with a space
    .replace(/\..+/, "");
console.log(dateObj);
