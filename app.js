let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("pc-score");
const scoreBoard = document.querySelector("score_board");
const result = document.querySelector("result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
  
  function convertToWord(letter) {
    switch (letter) {
      case "r":
        return "Rock";
      case "p":
          return "Paper";
      case "s":
          return "Scissors";
    }
  }