// Pacman //
// Justyn Pollard and Sarvath //
// May 24, 2018 //

// Arrays //

// 0 = blackspace, 1 = border, 2 = point, 3 = pacman, 4 = greenGhost, 5 = redGhost
let grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 4, 2, 2, 2, 2, 2, 2, 2, 5, 1, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 0, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, ],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, ],
  [1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, ],
  [1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
];

// global variables //
let backgroundImage, menuPic, pacman, pointImage, myScore;
let state, myMenu, backgroundMusic, boop, user;
let typeHere, button;
let openMouth, closedMouth, pacmanEating;
let cellSize = 25;
let pacmanUp, pacmanDown, pacmanRight, pacmanLeft, currentPacman;
let greenGhost, inky;
let redGhost, blinky;

function preload() {
  backgroundImage = loadImage("images/pacman-grid.png");
  backgroundMusic = loadSound("assets/pacman-song.mp3");
  boop = loadSound("assets/boop.mp3");
  menuPic = loadImage("images/pacman-menu.jpg");
  pacmanUp = loadImage("images/pacman-up.png");
  pacmanDown = loadImage("images/pacman-down.png");
  pacmanRight = loadImage("images/pacman-right.png");
  pacmanLeft = loadImage("images/pacman-left.png");
  pointImage = loadImage("images/point.png");
  greenGhost = loadImage("images/greenGhost.png");
  redGhost = loadImage("images/redGhost.png");
  // pacmanEating = createImg("images/pacman-eating.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  myMenu = new Menu();
  // user = new Username();
  pacman = new Pacman();
  myScore = new Score();
  inky = new Bashful();
  blinky = new Shadow();
  currentPacman = pacmanRight;
  state = 0;
  // typeHere = createInput();
  // button = createButton("Create User");
  // button.mousePressed(user.storeUsers());
  backgroundMusic.setVolume(0.6);
  backgroundMusic.loop();
}

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
};

function draw() {
  background(0);

  if (state === 0) {
    myMenu.displayButton();
    myMenu.checkIfMouseIsOverButton();
  }

  // if (state === 1) {
  //   myMenu.addUser();
  //   myMenu.checkIfMouseIsOverButton();
  // }

  // if (state === 2) {
  //   if (localStorage["saved"]) {
  //     text(localStorage["saved"]);
  //   }

  // }

  if (state === 1) {
    backgroundMusic.stop();
    noStroke();
    pacman.movePac();
    makeGrid();
    myScore.showOnScreen();
    inky.moveBashful();
    blinky.moveShadow();
  }

}

// function makeGrid() {
//   noStroke();
//   image(backgroundImage, 0, 0);
//   for (let x = 0; x < 27; x++) {
//     for (let y = 0; y < 21; y++) {
//       if (grid[y][x] === 2) {
//         image(pointImage, cellSize * x, cellSize * y);
//       }
//       if (grid[y][x] === 3) {
//         // if (frameCount % 10 === 0) {
//         //   image(openMouth, cellSize * x, cellSize * y, 25, 25);
//         // }
//         // if (frameCount % 20 === 0) {
//         //   image(closedMouth, cellSize * x, cellSize * y, 25, 25);
//         // }
//         pacmanEating.position(cellSize * x, cellSize * y);
//       }
//       if (grid[y][x] === 4) {
//         image(greenGhost, cellSize * x, cellSize * y);
//       }
//     }
//   }
// }

function makeGrid() {
  image(backgroundImage, 0, 0);
  for (let x = 0; x < 27; x++) {
    for (let y = 0; y < 21; y++) {
      if (grid[y][x] === 2) {
        image(pointImage, cellSize * x, cellSize * y);
      }
      if (grid[y][x] === 3) {
        image(currentPacman, cellSize * x, cellSize * y, 25, 25);
      }
      if (grid[y][x] === 4) {
        image(greenGhost, cellSize * x, cellSize * y);
      }
      if (grid[y][x] === 5) {
        image(redGhost, cellSize * x, cellSize * y);
      }
    }
  }
}

function keyPressed() {
  if (keyCode === 68) { //D key going right
    pacman.xSpeed = 10;
    pacman.ySpeed = 0;
    currentPacman = pacmanRight;
  }
  if (keyCode === 65) { //A key going left
    pacman.xSpeed = -10;
    pacman.ySpeed = 0;
    currentPacman = pacmanLeft;
  }
  if (keyCode === 87) { //W key going up
    pacman.xSpeed = 0;
    pacman.ySpeed = -10;
    currentPacman = pacmanUp;
  }
  if (keyCode === 83) { //S key going down
    pacman.xSpeed = 0;
    pacman.ySpeed = 10;
    currentPacman = pacmanDown;
  }
}

function mousePressed() {
  if (state === 0 && myMenu.isMouseOverButton) {
    state = 1;
  }

  if (state === 1 && myMenu.guestButton) {
    state = 3;
  }

  if (state === 1 && myMenu.userButton) {
    state = 2;
  }
}

class Menu {
  constructor() {
    this.buttonx = width / 2;
    this.buttony = height / 2 + 80;
    this.guestButtonY = height/2 + 40;
    this.userButtonY = height/2 + 120;
    this.buttonWidth = 100;
    this.buttonHeight = 50;
    this.isMouseOverButton = false;
    this.userButton = false;
    this.guestButton = false;
  }

  displayButton() {
    image(menuPic, width/2 -395, height/2 - 300);

    rectMode(CENTER);

    fill(0);
    // Changes the color of the button if the mouse is over it
    if (this.isMouseOverButton) {
      fill(37,38,38);
    }
    // Draws the button in the middle of the screen
    strokeWeight(4);
    stroke(0,0,255);
    rect(this.buttonx, this.buttony, this.buttonWidth, this.buttonHeight);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(16);
    text("Play", this.buttonx, this.buttony);
    text("By Justyn and Sarvath", this.buttonx, height - 250);
  }

  addUser() {
    image(menuPic, width/2 -395, height/2 - 300);

    rectMode(CENTER);

    fill(0);
    // Changes the color of the button if the mouse is over it
    if (this.guestButton) {
      fill(37,38,40);
    }

    // Draws the buttons
    strokeWeight(4);
    stroke(0,0,255);
    rect(this.buttonx, this.guestButtonY, this.buttonWidth, this.buttonHeight);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(16);
    text("Guest", this.buttonx, this.buttony - 40);

    fill(0);
    if (this.userButton) {
      fill(37,38,38);
    }
    rect(this.buttonx, this.userButtonY, this.buttonWidth, this.buttonHeight);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(16);
    text("User", this.buttonx, this.buttony + 40);
  }

  checkIfMouseIsOverButton() {
    // Checks to see if the mouse x and y are within the play button
    if (mouseX <= this.buttonx + this.buttonWidth / 2 && mouseX >= this.buttonx - this.buttonWidth / 2 &&
      mouseY <= this.buttony + this.buttonHeight / 2 && mouseY >= this.buttony - this.buttonHeight / 2) {
      this.isMouseOverButton = true;
    }
    else {
      this.isMouseOverButton = false;
    }

    // Checks to see if the mouse x and y are within the guest button
    if (mouseX <= this.buttonx + this.buttonWidth / 2 && mouseX >= this.buttonx - this.buttonWidth / 2 &&
      mouseY <= this.guestButtonY + this.buttonHeight / 2 && mouseY >= this.guestButtonY - this.buttonHeight / 2) {
      this.guestButton = true;
    }
    else {
      this.guestButton = false;
    }

    // Checks to see if the mouse x and y are within the user button
    if (mouseX <= this.buttonx + this.buttonWidth / 2 && mouseX >= this.buttonx - this.buttonWidth / 2 &&
      mouseY <= this.userButtonY + this.buttonHeight / 2 && mouseY >= this.userButtonY - this.buttonHeight / 2) {
      this.userButton = true;
    }
    else {
      this.userButton = false;
    }
  }

  displayGameOver() {
    // Writes game over and your score when you lose
    fill(0, 255, 0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("Your Score: " + myScore.amount, this.buttonx, this.buttony);

    textSize(72);
    text("Game Over", this.buttonx, this.buttony - 75);
  }
}

// class Username {
//   constructor() {
//
//   }
//
//   storeUsers() {
//     // console.log("in storestuff");
//     // localStorage["saved"] = typeHere.value();
//   }
// }

class Pacman {
  constructor() {
    this.xSpeed = 0;
    this.ySpeed = 0;
  }

  movePac() {
    xYLoop: for (let x = 0; x < 27; x++) {
      for (let y = 0; y < 21; y++) {
        if (frameCount % 20 === 0) {
          if (grid[y][x] === 3) {
            if (this.xSpeed === 10) {
              if (grid[y][x + 1] === 1) {
                this.xSpeed = 0;
              }
              else {
                boop.play();
                grid[y][x] = 0;
                grid[y][x + 1] = 3;
              }
              break xYLoop;
            }
            if (this.xSpeed === -10) {
              if (grid[y][x - 1] === 1) {
                this.xSpeed = 0;
              }
              else {
                boop.play();
                grid[y][x] = 0;
                grid[y][x - 1] = 3;
                break xYLoop;
              }
            }
            if (this.ySpeed === 10) {
              if (grid[y + 1][x] === 1) {
                this.ySpeed = 0;
              }
              else {
                boop.play();
                grid[y][x] = 0;
                grid[y + 1][x] = 3;
                break xYLoop;
              }
            }
            if (this.ySpeed === -10) {
              if (grid[y - 1][x] === 1) {
                this.ySpeed = 0;
              }
              else {
                boop.play();
                grid[y][x] = 0;
                grid[y - 1][x] = 3;
                break xYLoop;
              }
            }
          }
        }
      }
    }
  }
}

class Bashful {
  constructor() {
    this.direction;
    this.previousDirection = "none";
  }

  moveBashful() {
    let directionList = [];
    ghostLoop: for (let x = 0; x < 27; x++) {
      for (let y = 0; y < 21; y++) {
        if (frameCount % 20 === 0) {
          if (grid[y][x] === 4) {
            if ((grid[y][x + 1] === 0 || grid[y][x + 1] === 2) && grid[y][x + 1] !== 1) {
              directionList.push("rightFree");
            }
            if ((grid[y][x - 1] === 0 || grid[y][x - 1] === 2) && grid[y][x - 1] !== 1) {
              directionList.push("leftFree");
            }
            if ((grid[y + 1][x] === 0 || grid[y + 1][x] === 2) && grid[y + 1][x] !== 1) {
              directionList.push("downFree");
            }
            if ((grid[y - 1][x] === 0 || grid[y - 1][x] === 2) && grid[y - 1][x] !== 1) {
              directionList.push("upFree");
            }
            if (directionList.indexOf(this.previousDirection) === -1) {
              this.direction = directionList.sample();
            }
            else {
              this.direction = this.previousDirection;
            }
            if (this.direction === "upFree") {
              grid[y][x] = grid[y - 1][x];
              grid[y - 1][x] = 4;
            }
            else if (this.direction === "downFree") {
              grid[y][x] = grid[y + 1][x];
              grid[y + 1][x] = 4;
            }
            else if (this.direction === "rightFree") {
              grid[y][x] = grid[y][x + 1];
              grid[y][x + 1] = 4;
            }
            else if (this.direction === "leftFree") {
              grid[y][x] = grid[y][x - 1];
              grid[y][x - 1] = 4;
            }
            this.previousDirection = this.direction;
            break ghostLoop;
          }
        }
      }
    }
  }
}

class Shadow {
  constructor() {
    this.direction;
    this.previousDirection = "none";
  }

  moveShadow() {
    let directionList = [];
    ghostLoop: for (let x = 0; x < 27; x++) {
      for (let y = 0; y < 21; y++) {
        if (frameCount % 20 === 0) {
          if (grid[y][x] === 5) {
            if ((grid[y][x + 1] === 0 || grid[y][x + 1] === 2) && grid[y][x + 1] !== 1) {
              directionList.push("rightFree");
            }
            if ((grid[y][x - 1] === 0 || grid[y][x - 1] === 2) && grid[y][x - 1] !== 1) {
              directionList.push("leftFree");
            }
            if ((grid[y + 1][x] === 0 || grid[y + 1][x] === 2) && grid[y + 1][x] !== 1) {
              directionList.push("downFree");
            }
            if ((grid[y - 1][x] === 0 || grid[y - 1][x] === 2) && grid[y - 1][x] !== 1) {
              directionList.push("upFree");
            }
            if (directionList.indexOf(this.previousDirection) === -1) {
              this.direction = directionList.sample();
            }
            else {
              this.direction = this.previousDirection;
            }
            if (this.direction === "upFree") {
              grid[y][x] = grid[y - 1][x];
              grid[y - 1][x] = 5;
            }
            else if (this.direction === "downFree") {
              grid[y][x] = grid[y + 1][x];
              grid[y + 1][x] = 5;
            }
            else if (this.direction === "rightFree") {
              grid[y][x] = grid[y][x + 1];
              grid[y][x + 1] = 5;
            }
            else if (this.direction === "leftFree") {
              grid[y][x] = grid[y][x - 1];
              grid[y][x - 1] = 5;
            }
            this.previousDirection = this.direction;
            break ghostLoop;
          }
        }
      }
    }
  }

  chasePacman() {
    for (let x = 0; x < 27; x++) {
      for (let y = 0; y < 21; y++) {
        //add code
      }
    }
  }
}

class Score {
  constructor() {
    this.amount = 0;
  }

  showOnScreen() {
    textAlign(LEFT,BOTTOM);
    text("Score: " + this.amount, width-175, height-5);
  }
}
