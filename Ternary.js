// let score = 85;

// let grade = score >= 90 ? "A" :
//             score >= 75 ? "B" :
//             score >= 60 ? "C" :
//             "Fail";

// console.log(grade); 

// let a=5;

// for(i=0;i<a;i++){
//    if(i==3){
//     break;
//    }
//     console.log(i);
// }


// let v='Having fun?';
// console.log(v.substring(7,10));

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// for (const key in person) {
//   if(key==person.age){
//     break;
//   }
//   console.log(`${key}: ${person[key]}`);
// }


let x=[1,2,3,4,5,6];

// for(const i in x){
//   if(i==3){
//     break;
//   }
//   console.log(i);
// }

// for(const i of x){
//   if(i==3){
//     break;
//   }
//   console.log(i);
// }

// let name = "Ekta";

// for (let char of name) {
//   console.log(char);
// }

// let arr = [1, 2, 3];
// let iterator = arr[Symbol.iterator]();

// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); 

// const person={name:"ekta"};

// person.name="bhavika";

// console.log(person.name);
// console.log(person);

const a=["ekta"];
console.log(a);
s=a.toString();
console.log(s);

b=s.split("");
console.log(b);

class car {
    constructor(name,year) {
        this.name=name;
        this.year=year;        
    }
}

const mycar1=new car("ford",2014);
console.log(mycar1);


