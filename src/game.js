var ltgame = function(game){
    inGame = false;
    soundEnabled = true;

    // Sprite Groups
    g_splash = null;

    // Global Sprites
    btn_mute = null;
}

ltgame.prototype = {
    create: function(){
        var bg = this.add.sprite(0, 0, "bg");
        g_splash = this.add.group();
        var s_splash = g_splash.add.sprite(17, 17, "startscreen");
        var g01 = g_splash.add.sprite(20, 209, "tiles24", 0);
    },
    update: function(){

    }
}