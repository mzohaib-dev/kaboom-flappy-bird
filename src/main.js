import kaboom from "kaboom";

// Initialize context
kaboom();

// Load visual assets
loadSprite("bluebird-downflap", "sprites/bluebird-downflap.png");
loadSprite("bluebird-midflap", "sprites/bluebird-midflap.png");
loadSprite("bluebird-upflap", "sprites/bluebird-upflap.png");
loadSprite("background-day", "sprites/background-day.png");
loadSprite("background-night", "sprites/background-night.png");
loadSprite("base", "sprites/base.png");
loadSprite("pipe-green", "sprites/pipe-green.png");
loadSprite("pipe-red", "sprites/pipe-red.png");
loadSprite("message", "sprites/message.png");
loadSprite("gameover", "sprites/gameover.png");

// Load digit sprites for score display
for (let i = 0; i <= 9; i++) {
  loadSprite(`digit-${i}`, `sprites/${i}.png`);
}

// Load sounds
loadSound("jump", "sounds/jump.mp3");
loadSound("bruh", "sounds/bruh.mp3");
loadSound("pass", "sounds/pass.mp3");
loadSound("hit", "sounds/hit.wav");
loadSound("point", "sounds/point.wav");

let highScore = 0;
let isDay = true;

// Start scene
scene("start", () => {
  add([
    sprite("background-day", { width: width(), height: height() }),
    pos(0, 0),
  ]);

  add([
    sprite("message"),
    pos(width() / 2, height() / 2),
    anchor("center"),
    scale(1),
  ]);

  add([
    sprite("base", { width: width(), height: 100 }),
    pos(0, height() - 100),
    "base so that user can see the score on the screen",
  ]);

  onKeyPress("space", () => {
    go("game");
  });

  onTouchStart(() => {
    go("game");
  });
});

// Game scene
scene("game", () => {
  const PIPE_GAP = 140;
  let score = 0;
  setGravity(1600);

  // Add background
  const bgSprite = isDay ? "background-day" : "background-night";
  add([
    sprite(bgSprite, { width: width(), height: height() }),
    pos(0, 0),
    "background",
  ]);

  // Add scrolling ground
  add([
    sprite("base", { width: width(), height: 100 }),
    pos(0, height() - 100),
    "base",
    { speed: 300 },
  ]);

  // Function to display score as digits
  function updateScoreDisplay() {
    // Remove existing digit sprites
    destroyAll("digit");

    // Convert score to array of digits
    const digits = score.toString().split("").map(Number);
    const digitWidth = 24; // Adjust based on sprite width
    let x = 12;

    digits.forEach((digit) => {
      add([sprite(`digit-${digit}`), pos(x, 12), scale(1), "digit"]);
      x += digitWidth;
    });
  }

  // Initial score display
  updateScoreDisplay();

  // Define bird with manual animation
  const player = add([
    sprite("bluebird-midflap"),
    scale(1.2),
    pos(100, 50),
    area(),
    body(),
    // Remove { frame: 0, frameTime: 0 }
  ]);

  // Animation frames
  const frames = ["bluebird-downflap", "bluebird-midflap", "bluebird-upflap"];
  let currentFrame = 0;
  let frameTime = 0;

  onUpdate(() => {
    frameTime += dt();
    if (frameTime >= 0.1) {
      // 10 FPS
      currentFrame = (currentFrame + 1) % frames.length;
      player.use(sprite(frames[currentFrame])); // Change sprite
      frameTime = 0;
    }
  });

  // Day/night cycle (every 30 seconds)
  loop(30, () => {
    isDay = !isDay; // Toggle day/night
    const newBg = isDay ? "background-day" : "background-night";

    // Update all background objects
    get("background").forEach((bg) => {
      bg.use(sprite(newBg, { width: width(), height: height() }));
    });
  });

  function createPipes() {
    const offset = rand(-50, 50);
    const pipeSprite = rand(0, 1) > 0.5 ? "pipe-green" : "pipe-red";

    // Bottom pipe
    add([
      sprite(pipeSprite),
      pos(width(), height() / 2 + offset + PIPE_GAP / 2),
      "pipe",
      scale(2),
      area(),
      { passed: false },
    ]);

    // Top pipe
    add([
      sprite(pipeSprite, { flipY: true }),
      pos(width(), height() / 2 + offset - PIPE_GAP / 2),
      "pipe",
      anchor("botleft"),
      scale(2),
      area(),
    ]);
  }

  loop(1.5, () => createPipes());

  // Move pipes and ground
  onUpdate("pipe", (pipe) => {
    pipe.move(-300, 0);

    if (pipe.passed === false && pipe.pos.x < player.pos.x) {
      pipe.passed = true;
      score += 1;
      updateScoreDisplay();
      play("point");
    }
  });

  onUpdate("base", (base) => {
    base.move(-base.speed, 0);
    if (base.pos.x <= -width()) {
      base.pos.x += width();
    }
  });

  // Collision and out-of-bounds handling
  player.onCollide("pipe", () => {
    play("hit");
    go("gameover", score);
  });

  player.onUpdate(() => {
    if (player.pos.y > height() || player.pos.y < 0) {
      play("hit");
      go("gameover", score);
    }
  });

  // Jump controls
  onKeyPress("space", () => {
    play("jump");
    player.jump(400);
  });

  onTouchStart(() => {
    play("jump");
    player.jump(400);
  });
});

// Game over scene
scene("gameover", (score) => {
  if (score > highScore) highScore = score;

  play("bruh");

  const bgSprite = isDay ? "background-day" : "background-night";
  add([
    sprite(bgSprite, { width: width(), height: height() }),
    pos(0, 0),
    "background",
  ]);

  add([
    sprite("gameover"),
    pos(width() / 2, height() / 3),
    anchor("center"),
    scale(1),
  ]);

  add([
    text(`Score: ${score}\nHigh Score: ${highScore}`, { size: 45 }),
    pos(width() / 2, height() / 2),
    anchor("center"),
    color(255, 255, 255),
  ]);

  add([
    text("Press Space to Restart", { size: 30 }),
    pos(width() / 2, height() * 0.75),
    anchor("center"),
    color(255, 255, 255),
  ]);

  onKeyPress("space", () => {
    go("start");
  });

  onTouchStart(() => {
    go("start");
  });
});

// Start the game
go("start");
