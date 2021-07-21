const level1 = new Level(
    

    [
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -720),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720),
        
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720 * 3),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720 * 3),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720 * 3),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720 * 3),
        
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720 * 4),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 4),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 4),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720 * 4),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720 * 5),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720 * 5),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720 * 5),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720 * 5),
        
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720 * 6),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 6),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 6),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720 * 6),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720 * 7),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720 * 7),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720 * 7),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720 * 7)
    ],

    [
        new PufferFish(1000, 230),
        new PufferFish(1500, 50),
        new PufferFish(2500, 280)
    ],

    [
        new JellyFish(1150, 250),
        new JellyFish(2300, 250),
        new JellyFish(3000, 200)
    ],

    [
        new Coin(550, 250),
        new Coin(850, 250),
        new Coin(1250, 250),
        new Coin(2850, 100),

        new Coin(1400, 270),
        new Coin(1435, 230),
        new Coin(1480, 205),
        new Coin(1530, 200),
        new Coin(1580, 210),
        new Coin(1625, 235),
        new Coin(1660, 270),

        new Coin(2200, 270),
        new Coin(2235, 230),
        new Coin(2280, 205),
        new Coin(2330, 200),
        new Coin(2380, 210),
        new Coin(2425, 235),
        new Coin(2460, 270),

        new Coin(3000, 270),
        new Coin(3035, 230),
        new Coin(3080, 205),
        new Coin(3130, 200),
        new Coin(3180, 210),
        new Coin(3225, 235),
        new Coin(3260, 270),
    ],

    [
        new Poison(430, 300),
        new Poison(1380, 310),
        new Poison(2600, 310),
        new Poison(2200, 310),
        new Poison(3200, 310),
    ],

    [
        new Floor('img/3. Background/Layers/2. Floor/L2.png', -720),
        new Floor('img/3. Background/Layers/2. Floor/L1.png', 0),
        new Floor('img/3. Background/Layers/2. Floor/L2.png', 720),
        new Floor('img/3. Background/Layers/2. Floor/L1.png', 720 * 2),
        new Floor('img/3. Background/Layers/2. Floor/L2.png', 720 * 3),
        new Floor('img/3. Background/Layers/2. Floor/L1.png', 720 * 4),
        new Floor('img/3. Background/Layers/2. Floor/L2.png', 720 * 5),
        new Floor('img/3. Background/Layers/2. Floor/L1.png', 720 * 6),
        new Floor('img/3. Background/Layers/2. Floor/L2.png', 720 * 7)
    ],

    [
        new Barrier(500, 480)
    ],

    [
        new SeparateBarrier('img/3. Background/Barrier/2.png', 1700, 200, 450, 250),
        new SeparateBarrier('img/3. Background/Barrier/3.png', 2800, 180, 150, 300)
    ]
)