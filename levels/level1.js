const level1 = new Level(
    

    [
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', -720),
        // new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -720),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 0),
        // new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720),
        // new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720),
        
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 2),
        // new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720 * 3),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720 * 3),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720 * 3),
        // new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 720 * 3),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720 * 3),
        
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720 * 4),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 4),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 4),
        // new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 720 * 4),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720 * 4),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720 * 5),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720 * 5),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720 * 5),
        // new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 720 * 5),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720 * 5),
        
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720 * 6),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 6),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 6),
        // new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 720 * 6),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 720 * 6),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720 * 7),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720 * 7),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720 * 7),
        // new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 720 * 7),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 720 * 7)
    ],

    [
        new PufferFish(1000, 230),
        new PufferFish(1500, 50),
        new PufferFish(2500, 280)
    ],

    [
        new JellyFish(2000, 250),
        new JellyFish(500, 200),
        new JellyFish(3000, 200)
    ],

    [
        new Coin(400, 200)
    ],

    [
        new Poison(400, 300)
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
    ]
)