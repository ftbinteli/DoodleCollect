# DoodleCollect

## Introduction

"Doodle Collect" is a fun and interactive browser-based game developed using Phaser 3, a popular framework for building HTML5 games. This game challenges players to navigate a character, referred to as 'Doodle,' evading enemies, and collecting items (in this case, cakes) to score points.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Installation

To run "Doodle Collect" locally, you will need to serve the game using a web server. Here is a simple way to do it:

1. Ensure you have Node.js installed on your machine.
2. Install `http-server` by running `npm install -g http-server`.
3. Navigate to the directory containing your game files in the terminal.
4. Run `http-server` in the terminal.
5. Open your browser and go to `http://localhost:8080`.

## Usage

To play the game, simply use the arrow keys to move Doodle around the screen. Collect cakes to increase your score. Avoid enemies to continue playing. Press the SPACE bar to start the game or to restart after game over.

## Features

- **Welcome and Game Scenes**: Two distinct scenes (WelcomeScene and GameScene) for an engaging gameplay experience.
- **Character Movement**: Players can move Doodle using keyboard arrow keys.
- **Enemy Animation**: Enemies have a flying animation, enhancing the visual appeal.
- **Dynamic Obstacles**: Enemies move across the screen, creating a challenging environment.
- **Score Tracking**: Points are awarded for collecting cakes, with the score displayed on-screen.

## Dependencies

This game relies on Phaser 3.55.2. Ensure you have included the Phaser library in your HTML file, as shown:

```html
<script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>
```

## Configuration
The game's configuration is set in the config object. You can adjust the game's width, height, and physics settings here.

## Documentation
For more detailed information on Phaser 3 and its capabilities, visit the [Phaser 3 documentation](https://newdocs.phaser.io/docs/3.80.0).

## Examples
The core gameplay mechanics are demonstrated within the provided code. For additional examples and tutorials, refer to the [Phaser 3 examples](https://labs.phaser.io/).

## Troubleshooting
If you encounter issues with running the game, ensure that:

- Your web server is correctly set up and running.
- Phaser library is correctly included and accessible.
- Your browser supports HTML5 and JavaScript.

## Contributors

[Fernando Bertholdo](https://www.linkedin.com/in/fernando-tavares-bertholdo/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
