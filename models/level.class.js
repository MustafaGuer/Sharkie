class Level {
    level_end_x = 4000;
    backgroundObjects;
    coins;
    poisons;
    pufferfishes;
    jellyfishes;
    floor;

    constructor(backgroundObjects, pufferfishes, jellyfishes, coins, poisons, floor) {
        this.backgroundObjects = backgroundObjects;
        this.pufferfishes = pufferfishes;
        this.jellyfishes = jellyfishes;
        this.coins = coins;
        this.poisons = poisons;
        this.floor = floor;
    }
}