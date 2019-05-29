var user_choice_p = document.querySelector(".user-choice > p"); 
var comp_choice_p = document.querySelector(".comp-choice > p"); 
var results_p = document.querySelector(".results > p"); 
var choices = document.getElementsByClassName("choice"); 
var userScore_span = document.getElementById("user-score"); 
var compScore_span = document.getElementById("comp-score"); 
var user_label_div = document.getElementById("user"); 
var comp_label_div = document.getElementById("comp");
// var reset_button = document.getElementsByClassName("reset");  



var options = ["hobbit", "nazgul", "sauron"]
var userChoice; 
var compChoice; 
var userScore = 0; 
var compScore = 0; 

for(var i = 0; i < choices.length; i++ ) {
  choices[i].addEventListener("click", function(){
    userChoice = this.id; //grabbed only the id of the div 
    compChoice = options[Math.floor(Math.random() * options.length)];
    user_choice_p.innerHTML = `You picked ${convertToString(userChoice)}.`
    comp_choice_p.innerHTML = `The enemy picked ${convertToString(compChoice)}.`
    // Game choices
    if(userChoice === "hobbit") {
      hobbit(); 
    }
    if(userChoice === "nazgul") {
      nazgul(); 
    }
    if(userChoice === "sauron") {
      sauron(); 
    }

  }); 
};

// add additional words and caps to userchoice
function convertToString(word) {
  if (word == "hobbit") return "a Hobbit";
  if (word == "nazgul") return "a Nazgûl"; 
  if (word == "sauron") return "Sauron"; 
}

// If userchoice is 'hobbit' 
function hobbit() { 
  if (compChoice === "nazgul") {
    results_p.innerHTML = "You've been pierced with Morgul-knife. You Lose!"
    compScore++; 
    compScore_span.innerHTML = compScore; 
    lose(); 

  } else if (compChoice === "sauron") {
    results_p.innerHTML = "You have delivered the One Ring to Mt. Doom. You Win!"
    userScore++; 
    userScore_span.innerHTML = userScore; 
    win(); 
  } else {
    results_p.innerHTML = "The fellowship do not fight amongst each other!"
    tie(); 
  }
}

//if the userchoice is 'nazgul' 
function nazgul() {
  if (compChoice === "hobbit") {
    results_p.innerHTML = "You have retrieved the One Ring. You Win!"
    userScore++; 
    userScore_span.innerHTML = userScore; 
    win(); //colors 
  } else if (compChoice === "sauron") {
    results_p.innerHTML = "You cannot defeat your Dark Lord. You Lose!"
    compScore++; 
    compScore_span.innerHTML = compScore;
    lose(); 
  } else {
    results_p.innerHTML = "The Nine do not fight each other!"
    tie(); 
  }
}

//if the userchoice is sauron 
function sauron() {
  if (compChoice === "nazgul") {
    results_p.innerHTML = "You have killed one of The Nine. You Win!"
    userScore++; 
    userScore_span.innerHTML = userScore; 
    win(); 
  } else if (compChoice === "hobbit") {
    results_p.innerHTML = "The hobbit has destroyed the One Ring. You Lose!"
    compScore++; 
    compScore_span.innerHTML = compScore;
    lose(); 
  } else {
    results_p.innerHTML = "You cannot defeat yourself!"
    tie(); 
  }
}

// add win, lose, tie colors to class: label 
// remove with a timer
function win() {
  comp_label_div.classList.add('lose-label'); 
  setTimeout(() => comp_label_div.classList.remove('lose-label'), 1000); 
  user_label_div.classList.add('win-label'); 
  setTimeout(() => user_label_div.classList.remove('win-label'), 1000); 
}

function lose() {
  user_label_div.classList.add('lose-label'); 
    setTimeout(() => user_label_div.classList.remove('lose-label'), 1000); 
    comp_label_div.classList.add('win-label'); 
    setTimeout(() => comp_label_div.classList.remove('win-label'), 1000); 
}

function tie(){ 
  comp_label_div.classList.add('tie-label'); 
  setTimeout(() => comp_label_div.classList.remove('tie-label'), 1000); 
  user_label_div.classList.add('tie-label'); 
  setTimeout(() => user_label_div.classList.remove('tie-label'), 1000);
}

// function resetButton() {
//   reset_button.addEventListener("click", resetGame()); 
// }

// function resetGame() {
//   userScore = 0; 
//   compScore = 0; 
//   userScore_span.innerHTML = userScore; 
//   compScore_span.innerHTML = compScore; 
// }



