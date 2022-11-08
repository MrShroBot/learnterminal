import inquirer from "inquirer"

inquirer
    .prompt([
        {type:"input", name:"word", message:"Can u write 'Bruh'"},
        {type:"number", name:"age", message:"How old are u"},
        {type:"confirm", name:"readT", message:"Can u read this"},
        {type:"list", name:"witchIs", message:"Wich is the bruh", choices:["asd", "Bruh", "bruh", "sool"]},
    ])
    .then((answer) =>{
        if(answer.word == 'Bruh','bruh'){
            console.log(`Yes, you can write Bruh`);
        } else {
            console.log(`No, you cant write Bruh`);
        };

        console.log(`You are ${answer.age} years old`);

        if(answer.readT == true){
            console.log(`Good`)
        } else {
            console.log(`How did u anwser then?`)
        };

        console.log(`You chose "${answer.witchIs}" from the list`);
    });

