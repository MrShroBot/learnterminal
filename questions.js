import inquirer from "inquirer"

const requireLetterAndNumber = (value) => {
    if (/\w/.test(value) && /\d/.test(value)) {
      return true;
    }
    return 'Password need to have at least a letter and a number';
  };

inquirer
    .prompt([
        {type:"input", name:"word", message:"Can u write 'Bruh'"},
        {type:"number", name:"age", message:"How old are u"},
        {type:"confirm", name:"readT", message:"Can u read this"},
        {type:"list", name:"witchIs", message:"Wich is the bruh", choices:["asd", "Bruh", "bruh", "sool"]},
        {type:"rawlist", name:"listB", message:"Can u find sus", choices:["soorm", "sus", "bruh", "sool"]},
        {type:"expand", name:"ex", message:"Can u expand this. if yes then pick 'no'", choices:[{key:"N", name:"No", value:false},{key:"Y", name:"yes", value:true}]},
        {type:"checkbox", name:"boxes", message:"Select all you want from my pocet", choices:["Poolik komm", "Bruh sticer", "seen", "sool"]},
        {type:"confirm", name:"conf", message:"Are you here?"},
        {type:"password", name:"pswrd", message:"Pleas enter a password", mask:"*", validate: requireLetterAndNumber},
        {type:"editor", name:"edit", message:"edit the message please"}
    ]) 
    .then((answer) =>{
        if(answer.word === 'Bruh'||'bruh'){
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

        if(answer.ex == false){
            console.log(`Good you know how to expand a list`)
        } else {
            console.log(`ok... you dont know how to expand a list`)
        };

        console.log(`You chose "${answer.boxes}" from the list`);

        if(answer.conf == true){
            console.log(`Good to know`)
        } else {
            console.log(`ok... where are you then...`)
        };

        if(answer.pawrd == true){
            console.log(`YES`)
        } else {
            console.log(`ok... i understand`)
        };
    });

