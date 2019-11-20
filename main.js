var randomNumber = Math.floor((Math.random() * 6) + 1);
var randomNumberTwo = Math.floor((Math.random() * 6) + 1);

var diceGame = function () {
  var playerOne = randomNumber;
  var playerTwo = randomNumberTwo;
  var swapLeftImage = document.querySelector(".img1").setAttribute("src" , "images/dice" + playerOne + ".png");
  var swapRightImage = document.querySelector(".img2").setAttribute("src" , "images/dice" + playerTwo + ".png");

  if (playerOne > playerTwo) {
    document.querySelector("h1").textContent = ("Player 1 Wins");
  } else if (playerOne < playerTwo) {
    document.querySelector("h1").textContent = ("Player 2 Wins");
  } else {
    document.querySelector("h1").textContent = ("Draw");
  }
};

diceGame();
