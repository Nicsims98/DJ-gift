# Mini RPG Web App

## Overview
The Mini RPG Web App is a single-page application that allows users to immerse themselves in a custom mini RPG experience. The app features calming background music, modern RPG aesthetics, and interactive storytelling elements, all designed to enhance user engagement.

## Features
- **Custom Character Creation**: Users can create and customize their own characters with unique attributes.
- **Interactive Storyline**: Engage with a narrative that adapts based on user choices.
- **Calming Music**: Enjoy a soothing soundtrack that plays in the background to enhance the gaming experience.
- **Pixel Art Style**: The app incorporates a pixel art aesthetic reminiscent of classic RPG games.
- **Dynamic Sound Generation**: Uses an API to generate calming background sounds dynamically.

## Project Structure
```
mini-rpg-web-app
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── js
│   │   │   └── scripts.js
│   ├── components
│   │   ├── character.js
│   │   ├── game.js
│   │   └── story.js
│   ├── index.html
│   └── styles
│       └── main.css
├── package.json
├── README.md
└── webpack.config.js
```

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd mini-rpg-web-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage Instructions
1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:8080` to view the app.

## API Integration
The app uses the ElevenLabs Sound Effects API to generate calming background sounds dynamically. Ensure you have a valid API key and update the `sound.js` file with your key:
```javascript
const headers = {
    "x-rapidapi-key": "YOUR_API_KEY",
    "x-rapidapi-host": "elevenlabs-sound-effects.p.rapidapi.com",
    "Content-Type": "application/json"
};
```

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License.
