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

repeat(hello(), 5);
repeat(goodbye(), 5);