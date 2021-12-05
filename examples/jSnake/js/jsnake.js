let size = 18;
let x = size/2;
let y = size/2;
const startingPos = x+","+y;
let direction = "";
let speed = 75; //higher is slower
let game = "on";
let score = 0;
let visited = []; //all coordinates visited ever
let currentFood;
let doubleClickCatcher = false;

document.addEventListener("load", makeGame());

function makeGame() {
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size; j++) {
      document.getElementById("snakeDiv").innerHTML += `<input type='checkbox' id='${i},${j}' onclick='return false;'>\n`;
    }
    document.getElementById("snakeDiv").innerHTML += "<br>"
  }
  placeFood();
}

document.onkeydown = checkKey;
function checkKey(e) { //set direction on keypress
  e = e || window.event;
  if (doubleClickCatcher === false) {
    if (e.keyCode == "38" && direction != "down") { 
      direction = "up"; 
      doubleClickCatcher = true;
    }
    else if (e.keyCode == "40" && direction != "up") { 
      direction = "down"; 
      doubleClickCatcher = true;
    }
    else if (e.keyCode == "37" && direction != "right") { 
      direction = "left"; 
      doubleClickCatcher = true;
    }
    else if (e.keyCode == "39" && direction != "left") { 
      direction = "right"; 
      doubleClickCatcher = true;
    }
  }
}

document.addEventListener("touchmove", checkJoystick);
function checkJoystick() {
  if (document.getElementById("joystickXvalue").value > 0.5) { direction = "right"; doubleClickCatcher = true; }
  if (document.getElementById("joystickXvalue").value < -0.4) { direction = "left"; doubleClickCatcher = true; }
  if (document.getElementById("joystickYvalue").value < -0.4) { direction = "up"; doubleClickCatcher = true; }
  if (document.getElementById("joystickYvalue").value > 0.5) { direction = "down"; doubleClickCatcher = true; }

  document.getElementById("currentDirection").value = direction;
}

function placeFood() {
    let i = Math.floor((Math.random() * size) + 1);
    let j = Math.floor((Math.random() * size) + 1);
    let foodLocation = i+","+j;
    document.getElementById(foodLocation).checked = true; //place food
    console.log("placing food at coordinate "+foodLocation);
    currentFood = foodLocation;
}

function checkFood() {
  if (document.getElementById(currentFood).checked === false) { //make sure a food square is available
    document.getElementById(currentFood).checked = true;
  }
}

function moveSnake() {
  if (game != "over")
  {
  doubleClickCatcher = false; //lets you input again
  let arr = visited.slice(0, score); //all coordinates limited to current length of snake

    if (visited.length > score) { //turns off last checkbox in array
      let rem = visited[score];
      document.getElementById(rem).checked = false;
    }

    if (x<=size && x>=0 && y<=size && y>=0) // if within boundary
    {
      if (arr.indexOf(x+","+y) > 0) {// if collision
        game = "over";
      }else if (document.getElementById(x+","+y).checked === true && visited.length > 1) {// eats a pixel
        score += 1;
        document.getElementById("scoreboard").innerHTML = "SCORE: "+score;
        placeFood();
      }

      document.getElementById(x+","+y).checked = true;

      if (visited.at(-1) != x+","+y || visited.at(0) != startingPos) {
          visited.unshift(x+","+y);
      }
    }
    else { game = "over"; }

    //Move snake
    if (direction === "right") { y++; }
    else if (direction === "left") { y--; }
    else if (direction === "up") { x--;}
    else if (direction === "down") { x++; }

    //check food square is ticked
    checkFood();

    //check end conditions
    if (game === "over" && document.getElementById("scoreboard").innerHTML.startsWith("SCORE")){
      document.getElementById("scoreboard").innerHTML = 
      "FINAL SCORE: "+score+"<br><br><a href='javascript:location.reload();'>NEW GAME</a>";
      console.log("Game over");
    }
  }
}

let ready = function ( fn ) {

  // Sanity check
  if ( typeof fn !== 'function' ) return;

  // If document is already loaded, run method
  if ( document.readyState === 'complete'  ) {
      return fn();
  }

  // Otherwise, wait until document is loaded
  document.addEventListener( 'DOMContentLoaded', fn, false );

};

ready(function() {
    moveSnake();
    setInterval(moveSnake, speed);
});

// window.onload = function() {
//   moveSnake();
//   setInterval(moveSnake, speed);
// }