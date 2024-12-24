import { generateSound } from '../components/sound.js';
import Character from '../components/character.js';
import Story from '../components/story.js';
import Game from '../components/game.js';

document.addEventListener('DOMContentLoaded', async () => {
    const startButton = document.getElementById('start-game');
    const userNameInput = document.getElementById('user-name');
    const characterSection = document.getElementById('character-section');
    const storySection = document.getElementById('story-section');
    const gameSection = document.getElementById('game-section');
    const userInfoSection = document.getElementById('user-info-section');
    const backgroundMusic = document.getElementById('background-music');
    const storyTextElement = document.createElement('p');
    const choicesElement = document.createElement('div');
    const combatLogElement = document.createElement('div');
    const inventoryLogElement = document.createElement('div');

    storySection.appendChild(storyTextElement);
    storySection.appendChild(choicesElement);
    gameSection.appendChild(combatLogElement);
    gameSection.appendChild(inventoryLogElement);

    let story;
    let character;
    let game;

    startButton.addEventListener('click', async () => {
        const userName = userNameInput.value.trim();
        if (userName) {
            userInfoSection.style.display = 'none';
            characterSection.style.display = 'block';
            storySection.style.display = 'block';
            gameSection.style.display = 'block';
            document.querySelector('header h1').textContent = `Welcome, ${userName}!`;

            character = new Character(userName, 'warrior'); // Example character type
            story = new Story(userName);
            game = new Game();

            story.addStoryLine("Welcome to the adventure, {userName}. Your journey begins now.", [
                { text: "Go to the forest", nextIndex: 1 },
                { text: "Visit the village", nextIndex: 2 }
            ]);
            story.addStoryLine("You enter the forest and hear strange noises.", [
                { text: "Investigate the noise", nextIndex: 3 },
                { text: "Run away", nextIndex: 4 }
            ]);
            story.addStoryLine("You arrive at the village and see a market.", [
                { text: "Explore the market", nextIndex: 5 },
                { text: "Talk to the villagers", nextIndex: 6 }
            ]);
            story.addStoryLine("You find a hidden treasure in the forest.", []);
            story.addStoryLine("You safely return home.", []);
            story.addStoryLine("You find interesting items at the market.", []);
            story.addStoryLine("You learn valuable information from the villagers.", []);

            game.startGame(character, story);

            try {
                const soundData = await generateSound();
                if (soundData && soundData.url) {
                    backgroundMusic.src = soundData.url;
                    backgroundMusic.play();
                }
            } catch (error) {
                console.error('Error generating sound:', error);
            }
        } else {
            alert('Please enter your name to start the game.');
        }
    });

    function updateStory() {
        storyTextElement.textContent = story.displayCurrentLine();
        choicesElement.innerHTML = '';
        const choices = story.displayChoices();
        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                game.handleChoice(index);
                updateStory();
            });
            choicesElement.appendChild(button);
        });
    }
});
