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
 