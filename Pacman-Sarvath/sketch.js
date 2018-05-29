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
let backgroundImage, pacmanGif1, pacmanGif2, pacman;

function preload() {
  backgroundImage = loadImage("images/pacman-grid.png");
  pacmanGif1 = loadImage("images/pacman-eating.gif");
  // pacmanGif2 = createImage("pacman-eating.gif");
  pacman = new Pacman();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  pacman.showPacman();
  // pacman.movePacman();
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
    image(pacmanGif1, this.x, this.y);
    // pacmanGif2.position(50, 350);
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
    // This function helps the rectangle move accross the screen
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
