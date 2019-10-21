function createGreeting(name, age){
    try{
        const yob = getYearOfBirth(age);
    } catch {
        console.log(Error.message);
    }
    return `My name is ${name} and I am ${age} years old. I was born in ${yob}`;
}
function getYearOfBirth(age){
    if(age < 0){
        throw new Error("Age cant be negative");
    }
    return 2019 - age;
}


const greeting1 = createGreeting("Jack", 734);
console.log(greeting1);