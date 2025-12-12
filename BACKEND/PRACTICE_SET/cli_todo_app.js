import { log } from "console";
import readline  from "readline";

const rl = readline.createInterface({
       input:process.stdin,
       output:process.stdout
});

const todos = [];

const showMenu = ()=>{

    console.log("\n1: Add a Tasks");
    console.log("2: View Tasks");
    console.log("3: Exit");

    rl.question("Choose an option: ", handleInput);
}

const handleInput =(option)=>{

    if(option === "1"){
         rl.question("Enter the Task: ",(task)=>{
                todos.push(task);
                console.log("Task Added: ",task);
                showMenu();
         });
    }
    else if(option === "2"){
                console.log("\nYour Todo Lists")
                todos.forEach((ele , idx)=>{
                    console.log(`${idx+1}.${ele}`);
                })
                showMenu();
    }
    else if(option === "3"){
         console.log("Good Bye");
         rl.close();
    }
    else{
        console.log("Invalid option . Please try again!!");
        showMenu();
    }
}

showMenu();