function greetUser({ firstName: name, lastName, age }) {
    return `Hello ${name} ${lastName}, age ${age}`;
}

console.log(greetUser(user)); // 'Hello Sara Khan, age 25'