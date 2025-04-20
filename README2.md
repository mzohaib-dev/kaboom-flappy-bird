Flappy Bird Game
A simple Flappy Bird-style game built using Kaboom.js, a JavaScript library for creating 2D games. Navigate a bird through a series of pipes by jumping with the spacebar or tapping the screen. Avoid collisions and aim for a high score!
Features

Classic Flappy Bird gameplay with scrolling pipes.
Score tracking with a high score system.
Responsive controls for keyboard (spacebar) and touch input (mobile-friendly).
Background music and sound effects for jumps, pipe passes, and game over.
Game-over screen with a screenshot of the final moment.

Demo
[Insert link to live demo if hosted, e.g., on GitHub Pages or Replit]
Prerequisites

Node.js (v16 or higher) and npm for dependency management.
A modern web browser (Chrome, Firefox, etc.).
Basic knowledge of JavaScript and running a local server.

Installation

Clone the repository:
git clone https://github.com/your-username/flappy-bird-kaboom.git
cd flappy-bird-kaboom

Install dependencies:
npm install

This installs Kaboom.js and any other dependencies listed in package.json.

Ensure assets are in place:The game requires sprite and sound files in the public/ directory:
public/
├── sprites/
│ ├── bird.png
│ ├── bg.png
│ ├── pipe.png
├── sounds/
│ ├── jump.mp3
│ ├── bruh.mp3
│ ├── pass.mp3

Replace these with your own assets or download placeholders from OpenGameArt.

Usage

Run the development server:If using Vite (recommended for Kaboom.js):
npm run dev

This starts a local server (e.g., at http://127.0.0.1:57342).

Open the game:Navigate to http://127.0.0.1:57342 (or the port shown in the terminal) in your browser.

Play the game:

Press Spacebar or tap the screen to make the bird jump.
Avoid hitting the pipes or falling off the screen.
When the game ends, press Spacebar to restart.

Build for production (optional):
npm run build

This generates a dist/ folder with optimized files. Serve it using a static server:
npx serve dist

Project Structure
flappy-bird-kaboom/
├── public/ # Static assets (sprites, sounds)
│ ├── sprites/
│ │ ├── bird.png
│ │ ├── bg.png
│ │ ├── pipe.png
│ ├── sounds/
│ │ ├── jump.mp3
│ │ ├── bruh.mp3
│ │ ├── pass.mp3
├── src/ # Source code
│ ├── main.js # Main game logic (Kaboom.js code)
├── index.html # Entry HTML file
├── package.json # Node.js dependencies and scripts
├── vite.config.js # Vite configuration (if using Vite)
└── README.md # This file

Configuration
Game parameters (e.g., pipe gap, gravity) are defined in src/main.js. To tweak the difficulty:
const CONFIG = {
PIPE_GAP: 140, // Vertical gap between pipes
GRAVITY: 1600, // Falling speed
JUMP_STRENGTH: 400, // Jump height
PIPE_SPEED: 300, // Pipe scrolling speed
};

Troubleshooting

404 Error for main.js:
Ensure src/main.js exists and is referenced correctly in index.html (e.g., <script type="module" src="/src/main.js"></script>).
Verify the server is running (npm run dev) and serving the src/ directory.

Missing assets:
Check that sprite and sound files are in public/sprites/ and public/sounds/.
If using Vite, assets in public/ are served at the root (e.g., /sprites/bird.png).

Game not loading:
Open the browser’s DevTools (F12) and check the Console/Network tabs for errors.
Ensure Node.js and dependencies are installed (npm install).

Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/new-feature).
Commit changes (git commit -m "Add new feature").
Push to the branch (git push origin feature/new-feature).
Open a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

Kaboom.js for the game framework.
Inspired by the classic Flappy Bird game.
Assets (replace with your own or credit sources if using third-party assets).

Contact
For questions or feedback, open an issue or contact your-email@example.com.
