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
let backgroundImage, pacman, pointImage, score;
let pacmanUp, pacmanLeft, pacmanRight, pacmanDown, currentPacman;
let cellSize = 25;

function preload() {
  backgroundImage = loadImage("images/pacman-grid.png");
  pacmanUp = loadImage("images/pacman-up.png");
  pacmanDown = loadImage("images/pacman-down.png");
  pacmanRight = loadImage("images/pacman-right.png");
  pacmanLeft = loadImage("images/pacman-left.png");
  pointImage = loadImage("images/point.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pacman = new Pacman();
  score = new Score();
  currentPacman = pacmanRight;
}

function draw() {
  pacman.movePac();
  makeGrid();
  score.showOnScreen();
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
        image(currentPacman, cellSize * x, cellSize * y, 25, 25);
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
          if (startingGrid[y][x] === 3) {
            if (this.xSpeed === 10) {
              if (startingGrid[y][x + 1] === 1) {
                this.xSpeed = 0;
              }
              else {
                startingGrid[y][x] = 0;
                score.amount += 10;
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
                score.amount += 5;
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
                score.amount += 5;
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
                score.amount += 5;
                startingGrid[y - 1][x] = 3;
                break xYLoop;
              }
            }
          }
        }
      }
    }
  }
}

class Score {
  constructor() {
    this.amount = 0;
    this.currentScore = 0;
    this.highScore = 0;
  }

  showOnScreen() {
    textAlign(LEFT,BOTTOM);
    textSize(80);
    text("Score: " + this.amount, width-800, height-5);
  }
}
