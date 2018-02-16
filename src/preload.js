var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        var loadingBG = this.add.sprite(0, 0, "loading_bg")
        var loadingBar = this.add.sprite(57,165,"loading_bar");
        loadingBar.anchor.setTo(0,0);
        this.load.setPreloadSprite(loadingBar);

        this.game.load.audio("snd-break-anti", "/assets/sounds/break-anti.wav");
        this.game.load.audio("snd-break-bricks", "/assets/sounds/break-bricks.wav");
        this.game.load.audio("snd-die", "/assets/sounds/die.wav");
        this.game.load.audio("snd-reflect", "/assets/sounds/reflect.wav");
        this.game.load.audio("snd-shoot-anti", "/assets/sounds/shoot-anti.wav");

        this.game.load.binary("levels-regular", "/assets/LaserTank.lvl");
    }
}