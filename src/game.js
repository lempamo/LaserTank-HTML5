var ltgame = function(game){
    ingame = false;

    // Global Sprites
    s_splash = null;
}

ltgame.prototype = {
    create: function(){
        var bg = this.game.add.sprite(0, 0, "bg");
        s_splash = this.game.add.sprite(17, 17, "startscreen");
    },
    update: function(){

    }
}