console.log("Rock, Paper, Scissors Game.");

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


function getHumanChoice(){
    let user_choice = parseInt(prompt("Your choices:\n 1. Rock \n 2. Paper \n 3. Scissors"));

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

let human_score = 0;
let computer_score = 0;

function playRound(human_choice, computer_choice){
    if(human_choice == computer_choice){
        console.log("Tie Game. " + human_choice +" is same to "+ computer_choice);
    }
    else if(human_choice == "Rock" && computer_choice == "Paper"){
        computer_score++;
        console.log("You lost. "+computer_choice+" wraps "+human_choice);
    }
    else if(human_choice == "Rock" && computer_choice == "Scissors"){
        human_score++;
        console.log("You won. "+human_choice+" crushes "+computer_choice);
    }
    else if (human_choice == "Paper" && computer_choice == "Rock"){
        human_score++;
        console.log("You won. "+human_choice+" wraps "+computer_choice);
    }
    else if (human_choice == "Paper" && computer_choice == "Scissors"){
        computer_score++;
        console.log("You lost. "+computer_choice+" cuts "+human_choice);
    }
    else if (human_choice == "Scissors" && computer_choice == "Rock"){
        computer_score++;
        console.log("You lost. "+computer_choice+" crushes "+human_choice);
    }
    else if (human_choice == "Scissors" && computer_choice == "Paper"){
        human_score++;
        console.log("You won. "+human_choice+" cuts "+computer_choice);
    }
    else{
        console.log("Invalid options");
    }
}


function playGame(){
    for (let i = 0; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());    
    }
    console.log("\n Computer Score: "+computer_score+" \n Your Score: "+human_score);
}

playGame();