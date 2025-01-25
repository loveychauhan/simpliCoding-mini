// new = "add a Todo"
// list = "list all Todo"
// delete = "remove a specific todo"
// quit  = "quit the App"

let input = prompt("What you want to do?").toLowerCase()
const list = []

while(input !== "quit"){

    if (input === "new"){
            let todo = prompt("Enter a Todo.");
            list.push(todo);
            input = prompt("What you want to do?")
           
           
    }

    else if(input === "list"){

        if(list.length === 0){
            input = prompt("list is empty: first enter some todo's")
        }
        else{
    
        for(let i = 0; i<list.length;i++){
            console.log(`${i} ${list[i]}`)
        }
        console.log("--------***--------")
        input = prompt("What you want to do?")
        }
    }

    else if(input == "delete"){
        if(list.length === 0){
            input = prompt("list is empty: first enter some todo's")
        }
    
        else{
        let index = prompt("Which todo you want to delete!")
        let delMsg = list.splice(index,1)
        console.log(`${delMsg} is deleted`)
        console.log("--------***--------")
        input = prompt("what You want to do?")
        }

    }

    else{
        input = prompt("Enter a valid entry 'new', 'list', 'delete', 'quit' ")
    }
}

console.log("Ok You Quit!.");



