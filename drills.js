function createGreeting(name, age){
    if(name === undefined || age === undefined){
        throw new Error("Name or Age not valid");
    }
    if(typeof(age) != Number){
        throw new Error("age has to be a number");
    }
    if(typeof(name) != String){
        throw new Error("name has to be a string");
    }
    if(age < 0){
        throw new Error("Age cant be negative");
    }
        const yob = getYearOfBirth(age);
    return `My name is ${name} and I am ${age} years old. I was born in ${yob}`;
}
function getYearOfBirth(age){
    
    return 2019 - age;
}

try {
const greeting1 = createGreeting("Jack", 734);
console.log(greeting1);
} catch(e){
    console.error(e.message);
}