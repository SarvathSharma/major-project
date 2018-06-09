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
let backgroundImage, pacman, pointImage, score;
let openMouth, closedMouth, pacmanEating;
let cellSize = 25;
let pacmanUp, pacmanDown, pacmanRight, pacmanLeft, currentPacman;
let greenGhost, inky;
let redGhost, blinky;

function preload() {
  backgroundImage = loadImage("images/pacman-grid.png");
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
  pacman = new Pacman();
  score = new Score();
  inky = new Bashful();
  blinky = new Shadow();
  currentPacman = pacmanRight;
}

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
};

function draw() {
  pacman.movePac();
  makeGrid();
  score.showOnScreen();
  inky.moveBashful();
  blinky.moveShadow();
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
  noStroke();
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
                grid[y][x] = 0;
                score.amount += 10;
                grid[y][x + 1] = 3;
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
