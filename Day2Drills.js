/* eslint-disable no-console */
'use strict';
function max(numbers){
  let i = 0;
  let result = Number.MIN_VALUE;
  while(i < numbers.length){
    if(numbers[i] > result){
      result = numbers[i];
    }
    i++;
  }
  return result;
}

function min(numbers){
  let i = 0;
  let result = Number.MAX_VALUE;
  while(i < numbers.length){
    if(numbers[i] < result){
      result = numbers[i];
    }
    i++;
  }
  return result;
}

function average(numbers){
  let total = 0;
  numbers.forEach(function(element) {
    total += element;
  });
  return total/numbers.length;
}

console.log(min([1,2,3]));
console.log(max([1,2,3]));
console.log(average([1,2,3]));

//Angel Max-Min Drill Redone
function maxNumber(numbers) {
  let currentMax = numbers[0];
  let i = 0;
  while ( i < numbers.length) {
    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
    }
    i++
  }
  return currentMax;
}
  
function minNumber(numbers) {
  let currentMin = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] < currentMin) {
      currentMin = numbers[i];
    }
    i++
  }
  return currentMin;
}



function repeat(fn, n){
  for(let i = 0; i < n; i++){
    fn();
  }
}
  
function hello(){
  console.log('Hello World');
}
  
function goodbye(){
  console.log('Goodbye World');
}
  
repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn) {
  let newArray = [];
  arr.forEach(function (element){
    if(fn (element)){
      newArray.push(element);
    }

  });
  return newArray;
}
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames);