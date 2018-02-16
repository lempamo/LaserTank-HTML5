var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        var loadingBG = this.add.sprite(0, 0, "loading_bg")
        var loadingBar = this.add.sprite(57,165,"loading_bar");
        loadingBar.anchor.setTo(0,0);
        this.load.setPreloadSprite(loadingBar);

        this.game.load.binary("regular-levels", "assets/LaserTank.lvl");
    }
}