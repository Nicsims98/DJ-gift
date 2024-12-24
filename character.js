class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.mana = 50;
        this.level = 1;
        this.experience = 0;
        this.inventory = [];
        this.abilities = this.getAbilitiesByType(type);
    }

    getAbilitiesByType(type) {
        const abilities = {
            warrior: {
                attack: 15,
                defend: 10,
                heal: 5,
                special: "Power Strike"
            },
            mage: {
                attack: 10,
                defend: 5,
                heal: 20,
                special: "Fireball"
            },
            rogue: {
                attack: 12,
                defend: 8,
                heal: 10,
                special: "Backstab"
            }
        };
        return abilities[type] || abilities.warrior;
    }

    attackEnemy(enemy) {
        enemy.health -= this.abilities.attack;
        return `${this.name} attacks ${enemy.name} for ${this.abilities.attack} damage!`;
    }

    defend() {
        return `${this.name} is defending!`;
    }

    heal() {
        this.health += this.abilities.heal;
        return `${this.name} heals for ${this.abilities.heal} health!`;
    }

    useSpecialAbility(enemy) {
        if (this.mana >= 20) {
            this.mana -= 20;
            enemy.health -= this.abilities.attack * 2;
            return `${this.name} uses ${this.abilities.special} on ${enemy.name} for ${this.abilities.attack * 2} damage!`;
        } else {
            return `${this.name} does not have enough mana to use ${this.abilities.special}!`;
        }
    }

    gainExperience(exp) {
        this.experience += exp;
        if (this.experience >= this.level * 100) {
            this.levelUp();
        }
    }

    levelUp() {
        this.level++;
        this.health += 20;
        this.mana += 10;
        this.abilities.attack += 5;
        this.abilities.defend += 2;
        this.abilities.heal += 3;
        return `${this.name} has leveled up to level ${this.level}!`;
    }

    addItemToInventory(item) {
        this.inventory.push(item);
        return `${this.name} has obtained ${item}!`;
    }

    getStatus() {
        return `${this.name} (Level ${this.level} ${this.type}) - Health: ${this.health}, Mana: ${this.mana}, Experience: ${this.experience}`;
    }
}

export default Character;
