let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

//here we are checking which players turn is this, so first we keep a notice of
//player which play O first

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let numberOfButtons = document.querySelectorAll(".box").length;
for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".box")[i].addEventListener("click", function () {
    console.log("The button is clicked");

    document.querySelectorAll(".box")[i].classList.remove("colorO");
    document.querySelectorAll(".box")[i].classList.remove("colorX");

    if (turnO) {
      document.querySelectorAll(".box")[i].classList.add("colorO");
      document.querySelectorAll(".box")[i].innerText = "O";
      turnO = false;
    } 
    else {
      document.querySelectorAll(".box")[i].classList.add("colorX");
      document.querySelectorAll(".box")[i].innerText = "X";
      turnO = true;
    }

    document.querySelectorAll(".box")[i].disabled = true;

    checkWinner();
  });
}

// const colourChange{
//   if (turnO)
//   {

//   }
// }

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

const diableBtn = () => {
  for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".box")[i].disabled = true;
  }
};

const enableBoxes = () => {
  for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".box")[i].disabled = false;
    document.querySelectorAll(".box")[i].innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerHTML = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  diableBtn();
};

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("Yeah man " + pos1Val + " you are the winner!");
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
