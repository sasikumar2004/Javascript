let rockbtn = document.getElementById("btn1");
let paperbtn = document.getElementById("btn2");
let scissorsbtn = document.getElementById("btn3");

function rock() {
  let inputOfUser = document.getElementById("useroption");
  inputOfUser.value = "rock";
  let computerChoiceValue = computerChoice();
  result.value = computerChoiceValue;
  playGame(inputOfUser.value, computerChoiceValue);
}

function paper() {
  let inputOfUser = document.getElementById("useroption");
  inputOfUser.value = "paper";
  let computerChoiceValue = computerChoice();
  result.value = computerChoiceValue;
  playGame(inputOfUser.value, computerChoiceValue);
}

function scissors() {
  let inputOfUser = document.getElementById("useroption");
  inputOfUser.value = "scissors";
  let computerChoiceValue = computerChoice();
  result.value = computerChoiceValue;
  playGame(inputOfUser.value, computerChoiceValue);
}

let result = document.getElementById("result");
function computerChoice() {
  let randomLetter = Math.floor(Math.random() * 3);

  if (randomLetter == 0) {
    return "rock";
  }
  if (randomLetter == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame(userChoice, computerChoice) {
  let scorce = document.getElementById("totalresult");

  if (userChoice === computerChoice) {
    scorce.textContent = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    scorce.textContent = "User wins!";
  } else {
    scorce.textContent = "Computer wins!";
  }
}
