
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


function getHumanChoice(user_choice){

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
        result_section.textContent = "Tie Game. " + human_choice +" is same to "+ computer_choice + "";
    }
    else if(human_choice == "Rock" && computer_choice == "Paper"){
        computer_score++;
        result_section.textContent = "You lost. "+computer_choice+" wraps "+human_choice + "";
    }
    else if(human_choice == "Rock" && computer_choice == "Scissors"){
        human_score++;
        result_section.textContent = "You won. "+human_choice+" crushes "+computer_choice + "";
    }
    else if (human_choice == "Paper" && computer_choice == "Rock"){
        human_score++;
        result_section.textContent = "You won. "+human_choice+" wraps "+computer_choice + "";
    }
    else if (human_choice == "Paper" && computer_choice == "Scissors"){
        computer_score++;
        result_section.textContent = "You lost. "+computer_choice+" cuts "+human_choice + "";
    }
    else if (human_choice == "Scissors" && computer_choice == "Rock"){
        computer_score++;
        result_section.textContent = "You lost. "+computer_choice+" crushes "+human_choice + "";
    }
    else if (human_choice == "Scissors" && computer_choice == "Paper"){
        human_score++;
        result_section.textContent = "You won. "+human_choice+" cuts "+computer_choice+"";
    }
    else{
        result_section.textContent = "Invalid options";
    }
}

function checkWinner(computer_score, human_score){
    if(computer_score >= 5){
        score_section.textContent = "The computer won";
        human_score = 0;
        computer_score = 0;
    }
    else if(human_score >= 5){
        score_section.textContent = "You won";
        human_score = 0;
        computer_score = 0;
    }
    else{
        score_section.textContent = "| Computer Score is "+computer_score+" and  Your Score: "+human_score+"";
    }
}

let rock_btn = document.querySelector(".rock");
let paper_btn = document.querySelector(".paper");
let scissors_btn = document.querySelector(".scissors");
let result_section = document.querySelector(".result");
let score_section = document.querySelector(".score");

rock_btn.addEventListener("click", () => {
    //console.log("Rock");
    playRound(getHumanChoice(1), getComputerChoice());
    checkWinner(computer_score, human_score);

});

paper_btn.addEventListener("click", () => {
    //console.log("Paper");
    playRound(getHumanChoice(2), getComputerChoice());
    checkWinner(computer_score, human_score);
    
});

scissors_btn.addEventListener("click", () => {
    //console.log("Scissors");
    playRound(getHumanChoice(3), getComputerChoice());
    checkWinner(computer_score, human_score);
    
});

/*
function playGame(){
    for (let i = 0; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());    
    }
    console.log("\n Computer Score: "+computer_score+" \n Your Score: "+human_score);
}

playGame();

*/