import inquirer from "inquirer"
inquirer
    .prompt([
        {type:"input", name:"age", message:"How old are you?"},
    ])
    .then((answer) =>{
        console.log(`I am ${answer.age} years old`);
    })