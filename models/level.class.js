class Level {
    level_end_x = 4000;
    backgroundObjects;
    coins;
    poisons;
    pufferfishes;
    jellyfishes;
    floor;
    barrier;
    separateBarrier;

    constructor(backgroundObjects, pufferfishes, jellyfishes, coins, poisons, floor, barrier, separateBarrier) {
        this.backgroundObjects = backgroundObjects;
        this.pufferfishes = pufferfishes;
        this.jellyfishes = jellyfishes;
        this.coins = coins;
        this.poisons = poisons;
        this.floor = floor;
        this.barrier = barrier;
        this.separateBarrier = separateBarrier;
    }
}