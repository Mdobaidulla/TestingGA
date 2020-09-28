console.log("script is linked");
const person = {
    name: "Md Obaidulla",
    age: 30,
    isStudent: true,
    favMovies:["Forrest Gump", "Avengers", "The number 23"],
    pets:[{
        name: "Tinko",
        age: 7,
        type: "Dog",
        toys:["tennis ball","tedy bears"]
    },
    {
        name: "Apollo",
        age: 9,
        type: "Dog",
        toys:["tennis ball","tedy bears"]
    },
    {
        name: "Nicco",
        age: 4,
        type: "Cat",
        toys:["laser","ball"]
    }]
}

//write code that will list your pets name
   
for(let i=0; i<person.pets.length;i++){
   // console.log(person.pets[i].name);
}

//write code that will list your favorite movies name

for(let i=0; i<person.favMovies.length;i++){
    //console.log(person.favMovies[i]);
}


// function hello(){
//     console.log("hello");

// }
// hello();

// function world(){
//     console.log("world");

// }
// world();

// function name(name){
//     console.log(name);

// }
// name("Md Obaidulla");


// function name1(name){
//     console.log("hello "+name);

// }
// name1("Md Obaidulla");

// function multi(number){
//     console.log(number*number);

// }
// multi(5);


// ///Part second

// function multi1(number){
//     return number*number;
// }
// console.log(multi1(5));



// function adding(num1=10, num2=0, num3=0){
//     return num1+num2+num3;
// }
// console.log(adding(2,3,4));

// //NEED TO UNDERSTAND
// function addNumber(num1){
//     return num1+0;
// }
// console.log(addNumber(10));

// function helloWorld(){
//     return console.log("hello world");;
// }
// helloWorld();


// //Part 3;

// let email="my@email.com";
// function editing(){
//     email="this " +email;
//     return email;
// }
// editing();
// console.log(email);

// const myArray=[2,3,4,6,5];
// function remove(){
//     myArray.shift();

// }
// remove();
// console.log(myArray);


// //Part 4:
// /*Write two functions that do the same thing, but one 
// returns the value and the other modifies a variable with side effects.
// The functions should both add 
// the string "flabbergasted" on to the end of an array
// */
// let st="Md Obaidulla";
// function doSomething(){
//    st = st+" is my name";
//    return st;
// }

// function doSomething1(){
// return st+" is my name";
//  }

//  //annormas function 
//  const add= function(num1, num2){
//      return num1+num2;
//  }
//  console.log(add(4,5));


//  //hoisting: when we call a funtion before making the 
//  //function, then it is called hoisting.
// console.log("Testing");
// console.log( add1(6,5));;
//  function add1(nu,nu1){
//      return nu+nu1;
//  }

 //Arrow Function:
//   const addWithArrow =(n,n1) =>{
//       return n+n1;
//   }

  //same this we can do for sigle line code;
//   const add2 = (nu1, nu2) => nu1+nu2;
//   console.log("This is my: "+ add2(4,5));


//   const a = number => console.log(number);
//   a(3);

//v1;
// const getColor = () => {
//     const color ='red';
// }
// //v2:
// const getColor = () =>{
//      color ='red';
// }
// //v3: we should be able to get the console.log(getColor()); to see red
// function getColor(){
//      color ='red';
// }

// //v4: we should not be able to get the console.log(getColor()); to see red
// function getColor(){
//     const color ='red';
// }


const calculateBill = (meal, taxRate = 0.15) => {
    const totat = meal * (1 + taxRate);
    return totat;
};

const b=calculateBill(30);
console.log(b);

