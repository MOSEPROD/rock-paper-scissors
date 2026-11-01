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