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
let backgroundImage, pacman, pointImage;
let openMouth, closedMouth, pacmanEating;
let cellSize = 25;
let downFree, rightFree, upFree, leftFree;
let xSpeed = 0;
let ySpeed = 0;
let directionList = [];
let direction;
let previousDirection = "none";

function preload() {
  backgroundImage = loadImage("images/pacman-grid.png");
  openMouth = loadImage("images/open-mouth.png");
  closedMouth = loadImage("images/close-mouth.png");
  pointImage = loadImage("images/point.png");
  greenGhost = loadImage("images/greenGhost.png");
  pacmanEating = createImg("images/pacman-eating.gif")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pacman = new Pacman();
}

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
}

function draw() {
  // pacman.showPacman();
  pacman.movePacman();
  movePac();
  makeGrid();
  moveGhost();
}

function makeGrid() {
  noStroke();
  image(backgroundImage, 0, 0);
  for (let x = 0; x < 27; x++) {
    for (let y = 0; y < 21; y++) {
      if (grid[y][x] === 2) {
        image(pointImage, cellSize * x, cellSize * y);
      }
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
      }
    }
  }
}

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


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    xSpeed = 10;
    ySpeed = 0;
  }
  if (keyCode === LEFT_ARROW) {
    xSpeed = -10;
    ySpeed = 0;
  }
  if (keyCode === UP_ARROW) {
    xSpeed = 0;
    ySpeed = -10;
  }
  if (keyCode === DOWN_ARROW) {
    xSpeed = 0;
    ySpeed = 10;
  }
}

class Pacman {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.speed = random(5, 30);
    this.moveUp = false;
    this.moveLeft = false;
    this.moveRight = false;
    this.moveDown = false;
  }

  showPacman() {

  }

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
    }
  }

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
  }

  movePacman() {
    // This function makes pacman move accross the grid
    if (this.moveUp) {
      this.y -= this.speed;
    }
    if (this.moveDown) {
      this.y += this.speed;
    }
    if (this.moveLeft) {
      this.x -= this.speed;
    }
    if (this.moveRight) {
      this.x += this.speed;
    }
  }
}
