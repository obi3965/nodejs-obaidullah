
//it is a global variable
// 

//anothe arrow function which take two argument or parameters or inputs, ar all arrow function but different syntax
// let add = (a,b)=>{
//     return a + b;
// }
// console.log(add(2,4));

// we can omit now the return key, are all arrow function but different syntax

// let sum = (c, d) => c * d;
// console.log(sum(3,4));


//if i have a random function, ar all arrow function but different syntax
// let multi = () => 1 * 4;
// console.log(multi());


//let s create an object with the properties or called key value pair
let info = {
    name: 'obi',
    age: 28,
    // we can not create a variable inside the object,
    // but we can create a function

    greet(){
     console.log('hi, i am ' + this.name)
    }
}
//now we can spread our object with three dots
let copiedPerson = {...info};
console.log(copiedPerson)


//log it without creating function inside the object
// console.log(info)

// info.greet();



//arrays and arrays methods
let hobbies = ['sports', 'cooking'];
//we can use the forloop
// for(let hobby of hobbies){
//     console.log(hobby)
// }

//it will create a new array and will also edit every single data into our array
// console.log(hobbies.map(hobby=>{
//     return 'hobby: ' + hobby;
// }))
// console.log(hobbies)

// hobbies.push('programming','language');
// console.log(hobbies)

//slice will copy the array
// let copiedArray = hobbies.slice();
// console.log(copiedArray)

// let copiedArray = [hobbies];
// copiedArray.push('time')
// console.log(copiedArray)


//now we can spread our array with three dots
let copiedArray = [...hobbies];

console.log(copiedArray)



//rest operator in array
let toArray = (...args)=>{
return args;
}
console.log(toArray(1,2,3,4));

