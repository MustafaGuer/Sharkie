class Level {
    level_end_x = 4000;
    enemies;
    backgroundObjects;
    coins;
    poisons;

    constructor(backgroundObjects, enemies, coins, poisons) {
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
        this.coins = coins;
        this.poisons = poisons;
    }
}