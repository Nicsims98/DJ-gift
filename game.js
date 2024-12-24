class Game {
    constructor() {
        this.isRunning = false;
        this.player = null;
        this.story = null;
    }

    startGame(player, story) {
        this.player = player;
        this.story = story;
        this.isRunning = true;
        this.displayStory();
    }

    displayStory() {
        if (this.story) {
            const storyText = this.story.displayCurrentLine();
            document.getElementById('story-container').innerText = storyText;
            this.displayChoices();
        }
    }

    displayChoices() {
        const choicesContainer = document.getElementById('choices-container');
        choicesContainer.innerHTML = '';
        const choices = this.story.displayChoices();
        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                this.handleChoice(index);
            });
            choicesContainer.appendChild(button);
        });
    }

    handleChoice(choiceIndex) {
        this.story.makeChoice(choiceIndex);
        this.displayStory();
    }

    handleUserInput(input) {
        if (this.isRunning) {
            this.story.processInput(input);
            this.displayStory();
        }
    }

    endGame() {
        this.isRunning = false;
        document.getElementById('story-container').innerText = "Game Over!";
    }

    combat(enemy) {
        const combatLog = [];
        while (this.player.health > 0 && enemy.health > 0) {
            combatLog.push(this.player.attackEnemy(enemy));
            if (enemy.health > 0) {
                combatLog.push(enemy.attackEnemy(this.player));
            }
        }
        if (this.player.health > 0) {
            combatLog.push(`${this.player.name} has defeated ${enemy.name}!`);
            this.player.gainExperience(enemy.experienceValue);
        } else {
            combatLog.push(`${this.player.name} has been defeated by ${enemy.name}...`);
            this.endGame();
        }
        document.getElementById('combat-log').innerText = combatLog.join('\n');
    }

    addItemToInventory(item) {
        const log = this.player.addItemToInventory(item);
        document.getElementById('inventory-log').innerText = log;
    }
}

export default Game;
