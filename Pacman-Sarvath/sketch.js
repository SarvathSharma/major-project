// Pacman //
// Justyn Pollard and Sarvath //
// May 24, 2018 //


// Arrays //

// 0 = blackspace, 1 = border, 2 = point, 3 = pacman, 4 = greenGhost
let grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, ],
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
<<<<<<< HEAD
let backgroundImage, pacman, pointImage;
let openMouth, closedMouth, pacmanEating;
let cellSize = 25;
let downFree, rightFree, upFree, leftFree;
let xSpeed = 0;
let ySpeed = 0;
let directionList = [];
let direction;
let previousDirection = "none";
=======
let backgroundImage, pacman, pointImage, score;
let pacmanUp, pacmanLeft, pacmanRight, pacmanDown, currentPacman;
let cellSize = 25;
>>>>>>> c31dd2cc629e1d51125d7caba0dc04c63344136c

function preload() {
  backgroundImage = loadImage("images/pacman-grid.png");
  pacmanUp = loadImage("images/pacman-up.png");
  pacmanDown = loadImage("images/pacman-down.png");
  pacmanRight = loadImage("images/pacman-right.png");
  pacmanLeft = loadImage("images/pacman-left.png");
  pointImage = loadImage("images/point.png");
  greenGhost = loadImage("images/greenGhost.png");
  pacmanEating = createImg("images/pacman-eating.gif")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pacman = new Pacman();
  score = new Score();
  currentPacman = pacmanRight;
}

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
}

function draw() {
  // pacman.showPacman();
  pacman.movePac();
  makeGrid();
<<<<<<< HEAD
  moveGhost();
=======
  score.showOnScreen();
>>>>>>> c31dd2cc629e1d51125d7caba0dc04c63344136c
}

function makeGrid() {
  noStroke();
  image(backgroundImage, 0, 0);
  for (let x = 0; x < 27; x++) {
    for (let y = 0; y < 21; y++) {
      if (grid[y][x] === 2) {
        image(pointImage, cellSize * x, cellSize * y);
      }
<<<<<<< HEAD
      if (grid[y][x] === 3) {
        // if (frameCount % 10 === 0) {
        //   image(openMouth, cellSize * x, cellSize * y, 25, 25);
        // }
        // if (frameCount % 20 === 0) {
        //   image(closedMouth, cellSize * x, cellSize * y, 25, 25);
        // }
        pacmanEating.position(cellSize * x, cellSize * y)
      }
      if (grid[y][x] === 4) {
        image(greenGhost, cellSize * x, cellSize * y);
      }
    }
  }
}

function moveGhost() {
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
          if (directionList.indexOf(previousDirection) === -1) {
            direction = directionList.sample();
          } else {
            direciton = previousDirection;
          }
          if (direction === "upFree") {
            grid[y][x] = grid[y - 1][x];
            grid[y - 1][x] = 4;
          } else if (direction === "downFree") {
            grid[y][x] = grid[y + 1][x];
            grid[y + 1][x] = 4;
          } else if (direction === "rightFree") {
            grid[y][x] = grid[y][x + 1];
            grid[y][x + 1] = 4;
          } else if (direction === "leftFree") {
            grid[y][x] = grid[y][x - 1];
            grid[y][x - 1] = 4;
          }
          previousDirection = direction;
          break ghostLoop;
        }
=======
      if (startingGrid[y][x] === 3) {
        image(currentPacman, cellSize * x, cellSize * y, 25, 25);
>>>>>>> c31dd2cc629e1d51125d7caba0dc04c63344136c
      }
    }
  }
}

<<<<<<< HEAD
function movePac() {
  xYLoop: for (let x = 0; x < 27; x++) {
    for (let y = 0; y < 21; y++) {
      if (frameCount % 20 === 0) {
        if (grid[y][x] === 3) {
          if (xSpeed === 10) {
            if (grid[y][x + 1] === 1) {
              xSpeed = 0;
            } else {
              grid[y][x] = 0;
              grid[y][x + 1] = 3
            }
            break xYLoop;
          }
          if (xSpeed === -10) {
            if (grid[y][x - 1] === 1) {
              xSpeed = 0;
            } else {
              grid[y][x] = 0;
              grid[y][x - 1] = 3
              break xYLoop;
            }
          }
          if (ySpeed === 10) {
            if (grid[y + 1][x] === 1) {
              ySpeed = 0;
            } else {
              grid[y][x] = 0;
              grid[y + 1][x] = 3
              break xYLoop;
            }
          }
          if (ySpeed === -10) {
            if (grid[y - 1][x] === 1) {
              ySpeed = 0;
            } else {
              grid[y][x] = 0;
              grid[y - 1][x] = 3
              break xYLoop;
            }
          }
        }
      }
    }
  }
}


=======
// // <<<<<<< HEAD
// function movePac() {
//   xYLoop: for (let x = 0; x < 27; x++) {
//     for (let y = 0; y < 21; y++) {
//       if (frameCount % 20 === 0) {
//         if (startingGrid[y][x] === 3) {
//           if (xSpeed === 10) {
//             if (startingGrid[y][x + 1] === 1) {
//               xSpeed = 0;
//             }
//             else {
//               startingGrid[y][x] = 0;
//               startingGrid[y][x + 1] = 3;
//             }
//             break xYLoop;
//           }
//           if (xSpeed === -10) {
//             if (startingGrid[y][x - 1] === 1) {
//               xSpeed = 0;
//             }
//             else {
//               startingGrid[y][x] = 0;
//               startingGrid[y][x - 1] = 3;
//               break xYLoop;
//             }
//           }
//           if (ySpeed === 10) {
//             if (startingGrid[y + 1][x] === 1) {
//               ySpeed = 0;
//             }
//             else {
//               startingGrid[y][x] = 0;
//               startingGrid[y + 1][x] = 3;
//               break xYLoop;
//             }
//           }
//           if (ySpeed === -10) {
//             if (startingGrid[y - 1][x] === 1) {
//               ySpeed = 0;
//             }
//             else {
//               startingGrid[y][x] = 0;
//               startingGrid[y - 1][x] = 3;
//               break xYLoop;
//             }
//           }
//         }
//       }
//     }
//   }
// }


// =======
// >>>>>>> c5b94bfc9c8030fc564b6c1e69872adb3ac03a89
>>>>>>> c31dd2cc629e1d51125d7caba0dc04c63344136c
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

<<<<<<< HEAD
  keyPressed() {
    // for (let x = 0; x < 27; x++) {
    //   for (let y = 0; y < 21; y++) {
    //     if (grid[y][x] === 0) {
    //       if (keyCode === 38) {
    //         this.moveUp = true;
    //       }
    //       if (keyCode === 37) {
    //         this.moveLeft = true;
    //       }
    //       if (keyCode === 39) {
    //         this.moveRight = true;
    //       }
    //       if (keyCode === 40) {
    //         this.moveDown = true;
    //       }
    //     }
    //   }
    // }
    if (keyCode === 38) {
      this.moveUp = true;
    }
    if (keyCode === 37) {
      this.moveLeft = true;
    }
    if (keyCode === 39) {
      this.moveRight = true;
    }
    if (keyCode === 40) {
      this.moveDown = true;
=======
  movePac() {
    xYLoop: for (let x = 0; x < 27; x++) {
      for (let y = 0; y < 21; y++) {
        if (frameCount % 20 === 0) {
          if (startingGrid[y][x] === 3) {
            if (this.xSpeed === 10) {
              if (startingGrid[y][x + 1] === 1) {
                this.xSpeed = 0;
              }
              else {
                startingGrid[y][x] = 0;
                startingGrid[y][x + 1] = 3;
              }
              break xYLoop;
            }
            if (this.xSpeed === -10) {
              if (startingGrid[y][x - 1] === 1) {
                this.xSpeed = 0;
              }
              else {
                startingGrid[y][x] = 0;
                startingGrid[y][x - 1] = 3;
                break xYLoop;
              }
            }
            if (this.ySpeed === 10) {
              if (startingGrid[y + 1][x] === 1) {
                this.ySpeed = 0;
              }
              else {
                startingGrid[y][x] = 0;
                startingGrid[y + 1][x] = 3;
                break xYLoop;
              }
            }
            if (this.ySpeed === -10) {
              if (startingGrid[y - 1][x] === 1) {
                this.ySpeed = 0;
              }
              else {
                startingGrid[y][x] = 0;
                startingGrid[y - 1][x] = 3;
                break xYLoop;
              }
            }
          }
        }
      }
>>>>>>> c31dd2cc629e1d51125d7caba0dc04c63344136c
    }
  }
}

<<<<<<< HEAD
  keyReleased() {
    // for (let x = 0; x < 27; x++) {
    //   for (let y = 0; y < 21; y++) {
    //     if (grid[y][x] === 0) {
    //       if (keyCode === 38) {
    //         this.moveUp = false;
    //       }
    //       if (keyCode === 37) {
    //         this.moveLeft = false;
    //       }
    //       if (keyCode === 39) {
    //         this.moveRight = false;
    //       }
    //       if (keyCode === 40) {
    //         this.moveDown = false;
    //       }
    //     }
    //   }
    // }
    if (keyCode === 38) {
      this.moveUp = false;
    }
    if (keyCode === 37) {
      this.moveLeft = false;
    }
    if (keyCode === 39) {
      this.moveRight = false;
    }
    if (keyCode === 40) {
      this.moveDown = false;
    }
=======
class Score {
  constructor() {
    this.amount = 0;
>>>>>>> c31dd2cc629e1d51125d7caba0dc04c63344136c
  }

  showOnScreen() {
    textAlign(LEFT,BOTTOM);
    text("Score: " + this.amount, width-175, height-5);
  }
}
