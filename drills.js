function createGreeting(name, age){
    const yob = getYearOfBirth(age);
    return `My name is ${name} and I am ${age} years old. I was born in ${yob}`;
}
function getYearOfBirth(age){
    return 2019 - age;
}


const greeting1 = createGreeting("Jack", 734);
console.log(greeting1);