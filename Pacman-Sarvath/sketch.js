// Pacman //
// Justyn Pollard and Sarvath //
// May 24, 2018 //


// Arrays //

let startingGrid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, ],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, ],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, ],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, ],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, ],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, ],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, ],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, ],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, ],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
];

// global variables //
let backgroundImage, pacman;
let openMouth, closedMouth;

function preload() {
  backgroundImage = loadImage("images/pacman-grid.png");
  openMouth = loadImage("images/open-mouth.png");
  closedMouth = loadImage("images/close-mouth.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pacman = new Pacman();
}

function draw() {
  pacman.showPacman();
  pacman.movePacman();
}

function makeGrid() {
  for (let x = 0; x < 27; x++) {
    for (let y = 0; y < 21; y++) {
      if (startingGrid[y][x] === 1) {
        fill("blue");
      }
      if (startingGrid[y][x] === 0) {
        fill(0);
      }
      rect(x * 25, y * 25, 25, 25);
    }
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
