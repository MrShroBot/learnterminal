import inquirer from "inquirer"

inquirer
    .prompt([
        {type:"input", name:"word", message:"Can u write 'Bruh'"},
        {type:"number", name:"age", message:"How old are u"},
        {type:"confirm", name:"readT", message:"Can u read this"},
        {type:"list", name:"witchIs", message:"Wich is the bruh", choices:["asd", "Bruh", "bruh", "sool"]},
        {type:"rawlist", name:"listB", message:"Can u find sus", choices:["soorm", "sus", "bruh", "sool"]},
        {type:"Expand ", name:"ex", message:"Can u expand this. if yes then type 'y'", choices:["U", "balls", "eat"]},
        {type:"Checkbox", name:"boxes", message:"Select all you want", choices:["Poolik komm", "Bruh", "seen", "'sool'"]},
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

        console.log(`You chose "${answer.listB}" from the list`);

        if(answer.ex == "y"){
            console.log(`Good`)
        } else {
            console.log(`ok...`)
        };

        console.log(`You chose "${answer.boxes}" from the list`);
    });

