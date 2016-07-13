

function init() {

var currentPlayer = "Player1";
var currentSymbol = "X";
var b1 = 0;
var b2 = 0;
var b3 = 0;
var b4 = 0;
var b5 = 0;
var b6 = 0;
var b7 = 0;
var b8 = 0;
var b9 = 0;
//reset the game each time a player click on it
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
 location.reload();
});

//Add event listener to box1
//this function will execute everytime there is a click on box1 and box 2.
//*Figure out how to assign this event listner to all boxes using a loop.
document.getElementById("box1").addEventListener("click", executeWhenClick);
document.getElementById("box2").addEventListener("click", executeWhenClick);
document.getElementById("box3").addEventListener("click", executeWhenClick);
document.getElementById("box4").addEventListener("click", executeWhenClick);
document.getElementById("box5").addEventListener("click", executeWhenClick);
document.getElementById("box6").addEventListener("click", executeWhenClick);
document.getElementById("box7").addEventListener("click", executeWhenClick);
document.getElementById("box8").addEventListener("click", executeWhenClick);
document.getElementById("box9").addEventListener("click", executeWhenClick);



//Extract out the listener function
function executeWhenClick(event) {
 //Get the element you clicked on from the event
 event.target.innerHTML = "<h3>" + currentSymbol + "</h3>";
 //call all other functions you want to execute
 var y = event.target;
 console.log(y);
function markvar() {

if (currentPlayer === "Player1"){

 switch (y.id) {
   case "box1":
     b1 = 1;
     break;
   case "box2":
     b2 = 1;
     break;
   case "box3":
     b3 = 1;
     break;
   case "box4":
     b4 = 1;
     break;
   case "box5":
     b5 = 1;
     break;
   case "box6":
     b6 = 1;
     break;
   case "box7":
     b7 = 1;
     break;
   case "box8":
     b8 = 1;
     break;
   case "box9":
     b9 = 1;
     break;
   default:

 }
 console.log(y.id);
} else if (currentPlayer === "Player2") {
switch (y) {
 case "box1":
   b1 = -1;
   break;
 case "box2":
   b2 = -1;
   break;
 case "box3":
   b3 = -1;
   break;
 case "box4":
   b4 = -1;
   break;
 case "box5":
   b5 = -1;
   break;
 case "box6":
   b6 = -1;
   break;
 case "box7":
   b7 = -1;
   break;
 case "box8":
   b8 = -1;
   break;
 case "box9":
   b9 = -1;
   break;
 default:

}

}
}
markvar ();

 switchPlayer();
}

//Change the text in the element id status-message to which player's turn it is.
function switchPlayer() {
 //Switch currentPlayer and currentSymbol
 if (currentPlayer == "Player1") {
    currentPlayer = "Player2";
    currentSymbol = "O";
 }  else {
    currentPlayer = "Player1";
    currentSymbol = "X";
 }
}
//Mark box location with corresponding var
// ie box1 ---> var b1
      // box1 ---> var b1
      // box2 ---> var b2
      // box3 ---> var b3
      // box4 ---> var b4
      // box5 ---> var b5
      // box6 ---> var b6
      // box7 ---> var b7
      // box8 ---> var b8
      // box9 ---> var b9
//       var y;
//       y = event.target.id;
// function markvar() {
//
//   if (currentPlayer === Player1){
//
//       switch (y) {
//         case "box1":
//           b1 = 1;
//           break;
//         case "box2":
//           b2 = 1;
//           break;
//         case "box3":
//           b3 = 1;
//           break;
//         case "box4":
//           b4 = 1;
//           break;
//         case "box5":
//           b5 = 1;
//           break;
//         case "box6":
//           b6 = 1;
//           break;
//         case "box7":
//           b7 = 1;
//           break;
//         case "box8":
//           b8 = 1;
//           break;
//         case "box9":
//           b9 = 1;
//           break;
//         default:
//
//       }
//   } else if (currentPlayer === Player2) {
//     switch (y) {
//       case "box1":
//         b1 = -1;
//         break;
//       case "box2":
//         b2 = -1;
//         break;
//       case "box3":
//         b3 = -1;
//         break;
//       case "box4":
//         b4 = -1;
//         break;
//       case "box5":
//         b5 = -1;
//         break;
//       case "box6":
//         b6 = -1;
//         break;
//       case "box7":
//         b7 = -1;
//         break;
//       case "box8":
//         b8 = -1;
//         break;
//       case "box9":
//         b9 = -1;
//         break;
//       default:
//
//     }
//
//   }
// }
//

//Check if there are any winners
function checkForWinner() {
// Player 1(X) wins
//var b assigned 3 for a x and 5 for a o
if ((b1+b2+b3)%3==0||(b4+b5+b6)%3==0||(b7+b8+b9)%3==0||(b1+b4+b7)%3==0||(b2+b5+b8)%3==0||(b3+b6+b9)%3==0||(b1+b5+b9)%3==0||(b3+b5+b7)%3==0) {
  alert("Player1 WINS!")
} else
// Player 2(O) wins
if ((b1+b2+b3)%5==0||(b4+b5+b6)%5==0||(b7+b8+b9)%5==0||(b1+b4+b7)%5==0||(b2+b5+b8)%5==0||(b3+b6+b9)%5==0||(b1+b5+b9)%5==0||(b3+b5+b7)%5==0) {
  alert("Player2 WINS!")
}
}

}
window.addEventListener("load", init, false); //Start init function only after page has loaded.

init();
