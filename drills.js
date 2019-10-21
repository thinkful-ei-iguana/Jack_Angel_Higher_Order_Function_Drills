function createGreeting(name, age){
    let yearOfBirth = 2019 - age;
    return `My name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}`;
}



const greeting1 = createGreeting("Jack", 734);
console.log(greeting1);