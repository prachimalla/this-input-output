// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


const person ={
  age:90,
  growth: ()=>{
    this.age++;
  }
}
person.growth()
console.log(person.age);
const person1 ={
  age:90,
  growth: function(){
    this.age++;
  }
}
person1.growth()
console.log(person1.age);
// https://github.com/lydiahallie/javascript-questions
//this in arrow function get element of parent 

  const person3 = {
    age:60,
    growth: function(){
     const person = {
age:20,
name: ()=>{
  return this.age;
}
     }
return person;
    }
  }
  console.log(person3.growth().name());

  console.log(typeof [1,2,3]);

  console.log([[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  ));

  const firstPromise = new Promise((res, rej) => {
    setTimeout(rej, 500, 'one');
  });
  
  const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 400, 'two');
  });
    
  const threadPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'three');
  });
  Promise.all([firstPromise, secondPromise,threadPromise]).then(res => console.log(res)).catch(ele => console.log('ele',ele));


  function reversWord(){
    let newString = "i am a good man"
    console.log(newString.split(' '))
 let data =   newString.split(' ').map(ele =>{
      return ele.split('').reverse().join('')
      console.log(ele.split('').reverse().join(''))
    })
    console.log(data.join(' '))
  }
 console.log(reversWord())

 function data(func){
   console.log(typeof({}))
   return func;
 }

 console.log(data({}))


 class myClass{
    constructor(myName){
      this.myName = myName
    }
    fullName(){
      return 'prachi'
    }
     myObj = {
      data:'name',
      myName:(ele=>{
        console.log(ele)
      })
    }



    
 }
 function data(){
   return Promise.resolve('abc')   
}

console.log(data().then(req=>{
  console.log(req);
}))


// object

let myobj = {name:'prachi'}


let arr =[myobj];
myobj = null;
console.log('myobj',myobj,arr)




// Q: Design a custom json. stringify function !

// Difficulty level : hard

// Task :
// :- Design a custom json .stringify function which takes a json input and return a string of that json.
// :- Should take care of nested objects and arrays as well
// :- empty objects also to be accepted


// Example :
// customJSONString({t1:["t1"],t2:{t3:{t4:"t5"}}})
// should return
// '{"t1":["t1"],"t2":{"t3":{"t4":"t5"}}}'
