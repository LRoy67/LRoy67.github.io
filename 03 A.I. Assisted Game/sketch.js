let bullets = [];
let enemies = [];
let player;
let lastSpawnTime = 0;
let spawnInterval = 750;
let maxEnemies = 10;
let gameOver = false;
let killCount = 0;
let backgroundGraphics;
let showingUpgrades = false;
let availableUpgrades = [];
let chosenUpgrades = [];
let freezeBullets = false;
let canvas;

let nextUpgradeAt = 15; // first upgrade at 15 kills
let bulletLimit = 30;
let bulletsLeft = bulletLimit;
let reloading = false;
let reloadTime = 1500; // ms

let upgradesPool = [
  { name: "Faster Bullets", effect: () => (Bullet.speed += 2) },
  { name: "Move Faster", effect: () => (player.speed += 1.5) },
  { name: "Bigger Bullets", effect: () => (Bullet.sizeMultiplier *= 1.5) },
  { name: "Double Shot", effect: () => (player.doubleShot = true) },
  {
    name: "Freeze Bullets",
    effect: () => {
      freezeBullets = true;
    },
  },
];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  player = new Player(width / 2, height / 2);
  backgroundGraphics = createGraphics(width, height);
  drawStaticFlowerField(backgroundGraphics);
}

function draw() {
  image(backgroundGraphics, 0, 0);

  if (gameOver) {
    displayGameOver();
    return;
  }

  if (showingUpgrades) {
    displayUpgradeChoices();
    return;
  }

  player.update();
  player.display();

  // Bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    let b = bullets[i];
    b.update();
    b.display();

    if (b.isOffScreen()) {
      bullets.splice(i, 1);
    } else {
      for (let j = enemies.length - 1; j >= 0; j--) {
        let enemy = enemies[j];
        if (b.hits(enemy)) {
          if (freezeBullets) enemy.freeze();
          if (enemy.takeDamage()) {
            enemies.splice(j, 1);
            killCount++;
            if (killCount >= nextUpgradeAt) {
              triggerUpgradeChoice();
              nextUpgradeAt += 5; // increase requirement each time
            }
          }
          bullets.splice(i, 1);
          break;
        }
      }
    }
  }

  // Spawn enemies
  if (millis() - lastSpawnTime > spawnInterval && enemies.length < maxEnemies) {
    spawnEnemy();
    lastSpawnTime = millis();
    spawnInterval = random(750, 1750);
  }

  // Enemies
  for (let enemy of enemies) {
    enemy.update();
    enemy.display();
    if (enemy.hits(player)) {
      gameOver = true;
    }
  }

  drawKillCount();
  drawMagazineUI();
}

class Player {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.speed = 3;
    this.size = 30;
    this.isFlashing = false;
    this.doubleShot = false;
  }

  update() {
    if (keyIsDown(87)) this.position.y -= this.speed;
    if (keyIsDown(83)) this.position.y += this.speed;
    if (keyIsDown(65)) this.position.x -= this.speed;
    if (keyIsDown(68)) this.position.x += this.speed;

    this.position.x = constrain(this.position.x, this.size / 2, width - this.size / 2);
    this.position.y = constrain(this.position.y, this.size / 2, height - this.size / 2);
  }

  display() {
    push();
    translate(this.position.x, this.position.y);
    let angle = atan2(mouseY - this.position.y, mouseX - this.position.x);
    rotate(angle);

    fill(0, 0, 255);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, this.size, this.size);

    fill(50);
    rect(this.size / 2, 0, 20, 5);

    if (this.isFlashing) {
      fill(255, 255, 100);
      ellipse(this.size / 2 + 15, 0, 15, 10);
    }
    pop();
  }

  getPistolPosition() {
    let angle = atan2(mouseY - this.position.y, mouseX - this.position.x);
    return createVector(
      this.position.x + cos(angle) * (this.size / 2 + 10),
      this.position.y + sin(angle) * (this.size / 2 + 10)
    );
  }

  flashMuzzle() {
    this.isFlashing = true;
    setTimeout(() => (this.isFlashing = false), 100);
  }
}

class Bullet {
  static speed = 8;
  static sizeMultiplier = 1;

  constructor(x, y, targetX, targetY) {
    this.position = createVector(x, y);
    this.velocity = createVector(targetX - x, targetY - y);
    this.velocity.setMag(Bullet.speed);
    this.length = 15 * Bullet.sizeMultiplier;
    this.width = 4 * Bullet.sizeMultiplier;
  }

  update() {
    this.position.add(this.velocity);
  }

  display() {
    push();
    translate(this.position.x, this.position.y);
    rotate(this.velocity.heading());
    fill(255, 255, 0);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, this.length, this.width, 2);
    pop();
  }

  isOffScreen() {
    return (
      this.position.x < 0 ||
      this.position.x > width ||
      this.position.y < 0 ||
      this.position.y > height
    );
  }

  hits(enemy) {
    let d = dist(this.position.x, this.position.y, enemy.position.x, enemy.position.y);
    return d < enemy.radius + this.width;
  }
}

class Enemy {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.radius = 20;
    this.speed = 1.2;
    this.baseSpeed = this.speed;
    this.color = color(255, 0, 0);
    this.health = 2;
    this.frozen = false;
  }

  update() {
    let dir = createVector(player.position.x - this.position.x, player.position.y - this.position.y);
    dir.setMag(this.speed);
    this.position.add(dir);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius * 2);
  }

  hits(player) {
    let d = dist(this.position.x, this.position.y, player.position.x, player.position.y);
    return d < this.radius + player.size / 2;
  }

  takeDamage() {
    this.health--;
    return this.health <= 0;
  }

  freeze() {
    if (!this.frozen) {
      this.frozen = true;
      this.speed *= 0.4;
      this.color = color(red(this.color), green(this.color), blue(this.color), 150);
      setTimeout(() => {
        this.speed = this.baseSpeed;
        this.frozen = false;
        this.color.setAlpha(255);
      }, 3000);
    }
  }
}

class ToughEnemy extends Enemy {
  constructor(x, y) {
    super(x, y);
    this.color = color(0, 200, 0);
    this.health = 3;
    this.radius = 24;
    this.speed = 1;
    this.baseSpeed = this.speed;
  }
}

class FastEnemy extends Enemy {
  constructor(x, y) {
    super(x, y);
    this.color = color(100, 200, 255);
    this.speed = 2.1;
    this.baseSpeed = this.speed;
    this.radius = 18;
    this.health = 2;
  }
}

function spawnEnemy() {
  let edge = floor(random(4));
  let x, y;
  if (edge === 0) {
    x = random(width);
    y = -20;
  } else if (edge === 1) {
    x = width + 20;
    y = random(height);
  } else if (edge === 2) {
    x = random(width);
    y = height + 20;
  } else {
    x = -20;
    y = random(height);
  }

  let r = random();
  if (r < 0.6) enemies.push(new Enemy(x, y));
  else if (r < 0.85) enemies.push(new ToughEnemy(x, y));
  else enemies.push(new FastEnemy(x, y));
}

function mousePressed() {
  if (gameOver) {
    restartGame();
  } else if (showingUpgrades) {
    for (let i = 0; i < availableUpgrades.length; i++) {
      let bx = width / 2 - 150;
      let by = height / 2 - 50 + i * 100;
      let bw = 300;
      let bh = 60;
      if (mouseX > bx && mouseX < bx + bw && mouseY > by && mouseY < by + bh) {
        availableUpgrades[i].effect();
        showingUpgrades = false;
        break;
      }
    }
  } else if (!reloading && bulletsLeft > 0) {
    shoot();
  }
}

function shoot() {
  let pistolPos = player.getPistolPosition();
  let bullet = new Bullet(pistolPos.x, pistolPos.y, mouseX, mouseY);
  bullets.push(bullet);
  bulletsLeft--;
  player.flashMuzzle();

  if (player.doubleShot) {
    setTimeout(() => {
      if (bulletsLeft > 0) {
        let bullet2 = new Bullet(pistolPos.x, pistolPos.y, mouseX, mouseY);
        bullets.push(bullet2);
        bulletsLeft--;
        player.flashMuzzle();
      }
    }, 100);
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    reload();
  }
}

function reload() {
  if (!reloading && bulletsLeft < bulletLimit) {
    reloading = true;
    setTimeout(() => {
      bulletsLeft = bulletLimit;
      reloading = false;
    }, reloadTime);
  }
}

function restartGame() {
  bullets = [];
  enemies = [];
  player = new Player(width / 2, height / 2);
  gameOver = false;
  killCount = 0;
  nextUpgradeAt = 15;
  Bullet.speed = 8;
  Bullet.sizeMultiplier = 1;
  player.doubleShot = false;
  freezeBullets = false;
  bulletsLeft = bulletLimit;
  reloading = false;
}

function triggerUpgradeChoice() {
  showingUpgrades = true;
  availableUpgrades = shuffle(upgradesPool).slice(0, 2);
}

function displayUpgradeChoices() {
  fill(0, 180);
  rect(0, 0, width, height);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(36);
  text("Choose an Upgrade!", width / 2, height / 3);

  for (let i = 0; i < availableUpgrades.length; i++) {
    let bx = width / 2 - 150;
    let by = height / 2 - 50 + i * 100;
    fill(255);
    rect(bx, by, 300, 60, 10);
    fill(0);
    textSize(24);
    text(availableUpgrades[i].name, width / 2, by + 30);
  }
}

function drawKillCount() {
  push();
  fill(50, 50, 50, 180);
  noStroke();
  rect(width - 140, 10, 130, 40, 10);
  fill(255);
  textSize(24);
  textAlign(LEFT, CENTER);
  text("Kills: " + killCount, width - 130, 30);
  pop();
}

function drawMagazineUI() {
  push();
  fill(50, 50, 50, 180);
  rect(width - 180, height - 70, 160, 50, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  if (reloading) {
    text("Reloading...", width - 100, height - 45);
  } else {
    text("Ammo: " + bulletsLeft + " / " + bulletLimit, width - 100, height - 45);
  }
  pop();
}

function drawStaticFlowerField(pg) {
  pg.background(120, 200, 120);
  pg.stroke(50, 150, 50);
  for (let i = 0; i < width; i += 5) {
    let h = random(10, 20);
    pg.strokeWeight(random(1, 2));
    pg.line(i, height, i, height - h);
  }

  pg.noStroke();
  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    pg.push();
    pg.translate(x, y);
    pg.fill(random([255, 200, 255, 255, 240]), random([100, 150, 200]));
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / 6) {
      let petalX = cos(angle) * 6;
      let petalY = sin(angle) * 6;
      pg.ellipse(petalX, petalY, 6, 8);
    }
    pg.fill(255, 204, 0);
    pg.ellipse(0, 0, 8, 8);
    pg.pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  backgroundGraphics = createGraphics(width, height);
  drawStaticFlowerField(backgroundGraphics);
}
