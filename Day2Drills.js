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
  
/*repeat(hello, 5);
repeat(goodbye, 5);*/

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

//console.log(filteredNames);

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Tornado in the Area');
const thunderWarning = hazardWarningCreator('Thunder in the Sky');

/*rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
tornadoWarning('Main St and Pacific Ave');
tornadoWarning('Centinela Ave and Olympic Blvd');
thunderWarning('Main St and Pacific Ave');
thunderWarning('Centinela Ave and Olympic Blvd');*/

function turtleSteps(arr){
  let newArray = arr.filter(element => (element[0] >= 0 && element[1] >= 0));
  let i = 0;
  newArray.forEach(function(element){
    console.log(`movement #${i} ${element[0]} steps`);
    console.log(`movement #${i+1} ${element[1]} steps`);
    i += 2;
  });
}

turtleSteps([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);