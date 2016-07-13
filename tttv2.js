
var player = "player_x";
var box_1 = 0;
var box_2 = 0;
var box_3 = 0;
var box_4 = 0;
var box_5 = 0;
var box_6 = 0;
var box_7 = 0;
var box_8 = 0;
var box_9 = 0;

var a = box_1 + box_2 + box_3;
var b = box_4 + box_5 + box_6;
var c = box_7 + box_8 + box_9;
var d = box_1 + box_4 + box_7;
var e = box_2 + box_5 + box_8;
var f = box_3 + box_6 + box_9;
var g = box_1 + box_5 + box_9;
var h = box_3 + box_5 + box_7;
var Counter =0;


// if (Counter===9) {
//   // if (((a||b||c||d||e||f||g||h)!==3)&&((a||b||c||d||e||f||g||h)!==-3))
//    { alert("No Winner.");
//      reset();
//   }
// }
function CheckNoWinner (){
if ((Counter===9)&&(a!==3||b!==3||c!==3||d!==3||e!==3||f!==3||g!==3||h!==3)&&(a!==-3||b!==-3||c!==-3||d!==-3||e!==-3||f!==-3||g!==-3||h!==-3)) {
  alert("No Winner");
  reset();
}
}

document.getElementsByClassName('Player')[0].innerHTML = "Welcome!<br>Player X please start first!";


//display player turn
function display(){
if (player==="player_x") {
document.getElementsByClassName('Player')[0].innerHTML = "Player X turn";
} else {
  document.getElementsByClassName('Player')[0].innerHTML = "Player O turn";
}
}

//Switch player
function switch_player(){
  if (player==="player_x") {
    player = "player_o";
  } else {
    player = "player_x";
  }
Check_winner();
display();
Counter++;
CheckNoWinner();
}
//Check win condition
function Check_winner(){
   a = box_1 + box_2 + box_3;
   b = box_4 + box_5 + box_6;
   c = (box_7 + box_8 + box_9);
   d = (box_1 + box_4 + box_7);
   e = (box_2 + box_5 + box_8);
   f = (box_3 + box_6 + box_9);
   g = (box_1 + box_5 + box_9);
   h = (box_3 + box_5 + box_7);

if (a===3||b===3||c===3||d===3||e===3||f===3||g===3||h===3) {
  alert("Player X Wins!");
  reset();
} else if (a===-3||b===-3||c===-3||d===-3||e===-3||f===-3||g===-3||h===-3) {
  alert("Player O Wins!");
  reset();
}}

//Reset game
document.getElementById('reset').addEventListener("click", function(){
  reset();
});

  function reset(){
  location.reload(true);
  }


//Mark box1 with 'x' or 'o'

document.getElementById('box1').addEventListener("click",function(){
  mark_1();
});

function mark_1(){
  if (check_marked_1()) {

  if (player==="player_x") {
    document.getElementById('box1').innerHTML = "x";
    box_1 = 1;
    document.getElementById('box1').style.background = "red";
  } else {
    document.getElementById('box1').innerHTML = "o";
    document.getElementById('box1').style.background = "lightblue";
    box_1 = -1;
  }
}
switch_player();
}



function check_marked_1(){
  if (box_1===0) {
    return true;
  } else {
    return false;
  }
}

//Mark box2 with 'x' or 'o'

document.getElementById('box2').addEventListener("click",function(){
  mark_2();
});

function mark_2(){
  if (check_marked_2()) {

  if (player==="player_x") {
    document.getElementById('box2').innerHTML = "x";
    document.getElementById('box2').style.background = "red";
    box_2 = 1;
  } else {
    document.getElementById('box2').innerHTML = "o";
    document.getElementById('box2').style.background = "lightblue";
    box_2 = -1;
  }
}
switch_player();
}



function check_marked_2(){
  if (box_2===0) {
    return true;
  } else {
    return false;
  }
}

//Mark box3 with 'x' or 'o'

document.getElementById('box3').addEventListener("click",function(){
  mark_3();
});

function mark_3(){
  if (check_marked_3()) {

  if (player==="player_x") {
    document.getElementById('box3').innerHTML = "x";
    document.getElementById('box3').style.background = "red";
    box_3 = 1;
  } else {
    document.getElementById('box3').innerHTML = "o";
    document.getElementById('box3').style.background = "lightblue";
    box_3 = -1;
  }
}
switch_player();
}



function check_marked_3(){
  if (box_3===0) {
    return true;
  } else {
    return false;
  }
}

//Mark box4 with 'x' or 'o'

document.getElementById('box4').addEventListener("click",function(){
  mark_4();
});

function mark_4(){
  if (check_marked_4()) {

  if (player==="player_x") {
    document.getElementById('box4').innerHTML = "x";
    document.getElementById('box4').style.background = "red";
    box_4 = 1;
  } else {
    document.getElementById('box4').innerHTML = "o";
    document.getElementById('box4').style.background = "lightblue";
    box_4 = -1;
  }
}
switch_player();
}



function check_marked_4(){
  if (box_4===0) {
    return true;
  } else {
    return false;
  }
}

//Mark box5 with 'x' or 'o'

document.getElementById('box5').addEventListener("click",function(){
  mark_5();
});

function mark_5(){
  if (check_marked_5()) {

  if (player==="player_x") {
    document.getElementById('box5').innerHTML = "x";
    document.getElementById('box5').style.background = "red";
    box_5 = 1;
  } else {
    document.getElementById('box5').innerHTML = "o";
    document.getElementById('box5').style.background = "lightblue";
    box_5 = -1;
  }
}
switch_player();
}



function check_marked_5(){
  if (box_5===0) {
    return true;
  } else {
    return false;
  }
}

//Mark box6 with 'x' or 'o'

document.getElementById('box6').addEventListener("click",function(){
  mark_6();
});

function mark_6(){
  if (check_marked_6()) {

  if (player==="player_x") {
    document.getElementById('box6').innerHTML = "x";
    document.getElementById('box6').style.background = "red";
    box_6 = 1;
  } else {
    document.getElementById('box6').innerHTML = "o";
    document.getElementById('box6').style.background = "lightblue";
    box_6 = -1;
  }
}
switch_player();
}



function check_marked_6(){
  if (box_6===0) {
    return true;
  } else {
    return false;
  }
}

//Mark box7 with 'x' or 'o'

document.getElementById('box7').addEventListener("click",function(){
  mark_7();
});

function mark_7(){
  if (check_marked_7()) {

  if (player==="player_x") {
    document.getElementById('box7').innerHTML = "x";
    document.getElementById('box7').style.background = "red";
    box_7 = 1;
  } else {
    document.getElementById('box7').innerHTML = "o";
    document.getElementById('box7').style.background = "lightblue";
    box_7 = -1;
  }
}
switch_player();
}



function check_marked_7(){
  if (box_7===0) {
    return true;
  } else {
    return false;
  }
}

//Mark box8 with 'x' or 'o'

document.getElementById('box8').addEventListener("click",function(){
  mark_8();
});

function mark_8(){
  if (check_marked_8()) {

  if (player==="player_x") {
    document.getElementById('box8').innerHTML = "x";
    document.getElementById('box8').style.background = "red";
    box_8 = 1;
  } else {
    document.getElementById('box8').innerHTML = "o";
    document.getElementById('box8').style.background = "lightblue";
    box_8 = -1;
  }
}
switch_player();
}



function check_marked_8(){
  if (box_8===0) {
    return true;
  } else {
    return false;
  }
}

//Mark box9 with 'x' or 'o'

document.getElementById('box9').addEventListener("click",function(){
  mark_9();
});

function mark_9(){
  if (check_marked_9()) {

  if (player==="player_x") {
    document.getElementById('box9').innerHTML = "x";
    document.getElementById('box9').style.background = "red";
    box_9 = 1;
  } else {
    document.getElementById('box9').innerHTML = "o";
    document.getElementById('box9').style.background = "lightblue";
    box_9 = -1;
  }
}
switch_player();
}



function check_marked_9(){
  if (box_9===0) {
    return true;
  } else {
    return false;
  }
}
