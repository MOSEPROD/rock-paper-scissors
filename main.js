console.log("Hello, World");

function getComputerChoice(){
    let random_number = Math.floor(Math.random() * 3);

    switch (random_number) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break
    
        default:
            return "Invalid Choice";
            break;
    }
}

let computer_choice = getComputerChoice();
console.log(computer_choice);

function getHumanChoice(){
    let user_choice = parseInt(prompt("Your choices:\n 1. Rock \n 2. Paper \n 3. Rock"));

    if (user_choice == 1){
        return "Rock";
    }
    else if (user_choice == 2) {
        return "Paper";
    } 
    else if (user_choice == 3){
        return "Scissors";
    }
    else {
        return "Invalid Choice";
    }
}
let human_choice = getHumanChoice();
console.log(human_choice);

let human_score = 0;
let computer_score = 0;