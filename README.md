# Flappy Bird Built with Kaboom.js

https://github.com/user-attachments/assets/7508c397-0db0-4049-9bfc-6682dc1c8f2c

A faithful Flappy Bird-style game built using [Kaboom.js](https://kaboomjs.com/), featuring day/night cycles, animated sprites, and responsive controls.

## Demo

Play Live Game [here](https://smartguess.netlify.app/)

## Features

- 🐦 **Animated Bird**: 3-frame wing flap animation
- 🌞 **Day/Night Cycle**: Automatic background switching every 30 seconds
- 🎯 **Score System**: Visual digit-based display with high score tracking
- 🎮 **Multiple Controls**:
  - Keyboard (Spacebar to jump)
  - Touchscreen support
- 🔊 **Sound Effects**:
  - Jump sound
  - Score point sound
  - Collision sounds
- 🎨 **Visual Variety**:
  - Random pipe colors (green/red)
  - Scrolling ground
  - Game over screen with score summary

## How to Play

- Press SPACE or tap to make the bird flap
- Navigate through pipe gaps
- Avoid collisions with pipes and ground
- Try to beat your high score!

## Project Structure

```plaintext
kaboom-flappy-bird/
├── public/
│   ├── sprites/
│   │   ├── bird.png
│   │   ├── bg.png
│   │   └── pipe.png
│   └── sounds/
│       ├── jump.mp3
│       ├── bruh.mp3
│       └── pass.mp3
├── src/
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/mzohaib-dev/flappy-bird.git
```

Go to the project directory

```bash
  cd flappy-bird
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Contributing

Contributions are always welcome!

- Fork the repository.
- Create a feature branch (git checkout -b feature/new-feature).
- Commit changes (git commit -m "Add new feature").
- Push to the branch (git push origin feature/new-feature).
- Open a Pull Request.
