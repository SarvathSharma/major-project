// Pacman //
// Justyn Pollard and Sarvath //
// May 24, 2018 //


// Arrays //

// 2 = blackspace, 1 = border, 2 = point, 3 = pacman, 4 = ghost
let startingGrid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, ],
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
let openMouth, closedMouth;
let cellSize = 25;
let xSpeed = 0;
let ySpeed = 0;

function preload() {
  backgroundImage = loadImage("images/pacman-grid.png");
  openMouth = loadImage("images/open-mouth.png");
  closedMouth = loadImage("images/close-mouth.png");
  pointImage = loadImage("images/point.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pacman = new Pacman();
}

function draw() {
  // pacman.showPacman();
  pacman.movePacman();
  movePac();
  makeGrid();
}

function makeGrid() {
  noStroke();
  image(backgroundImage, 0, 0);
  for (let x = 0; x < 27; x++) {
    for (let y = 0; y < 21; y++) {
      if (startingGrid[y][x] === 2) {
        image(pointImage, cellSize * x, cellSize * y);
      }
      if (startingGrid[y][x] === 3) {
        image(openMouth, cellSize * x, cellSize * y, 25, 25);
      }
    }
  }
}

function movePac() {
  xYLoop: for (let x = 0; x < 27; x++) {
    for (let y = 0; y < 21; y++) {
      if (frameCount % 20 === 0) {
        if (startingGrid[y][x] === 3) {
          if (xSpeed === 10) {
            if (startingGrid[y][x + 1] === 1) {
              xSpeed = 0;
            } else {
              startingGrid[y][x] = 0;
              startingGrid[y][x + 1] = 3
            }
            break xYLoop;
          }
          if (xSpeed === -10) {
            if (startingGrid[y][x - 1] === 1) {
              xSpeed = 0;
            } else {
              startingGrid[y][x] = 0;
              startingGrid[y][x - 1] = 3
              break xYLoop;
            }
          }
          if (ySpeed === 10) {
            if (startingGrid[y + 1][x] === 1) {
              ySpeed = 0;
            } else {
              startingGrid[y][x] = 0;
              startingGrid[y + 1][x] = 3
              break xYLoop;
            }
          }
          if (ySpeed === -10) {
            if (startingGrid[y - 1][x] === 1) {
              ySpeed = 0;
            } else {
              startingGrid[y][x] = 0;
              startingGrid[y - 1][x] = 3
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
    //     if (startingGrid[y][x] === 0) {
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
    //     if (startingGrid[y][x] === 0) {
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
