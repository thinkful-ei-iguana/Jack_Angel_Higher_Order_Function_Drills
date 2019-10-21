/* eslint-disable no-console */
/* eslint-disable strict */
function jediName(firstName, lastName){
  return lastName.slice(0,2) + firstName.slice(0,1);
}
function beyond (num) {
  if (num === Infinity) {
    console.log('And beyond');
  }
  if (num > 0) {
    console.log('To infinity');
  }
  if (num < 0) {
    console.log('To negative infinity');
  }
  if (num === 0) {
    console.log('Staying home');
  }
}

function decode (word) {
  if (word.startsWith('a')) {
    return word.charAt(1);
  }
  else if (word.startsWith('b')) {
    return word.charAt(2);
  }
  else if (word.startsWith('c')) {
    return word.charAt(3);
  }
  else if (word.startsWith('d')) {
    return word.charAt(4);   
  }
  else {
    return ' ';
  }
} 
decode('craft block argon meter bells brown croon droop')

