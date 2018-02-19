var ltgame = function(game){
    curLevel = 0;
    inGame = false;
    soundEnabled = true;

    // Sprite Groups
    g_splash = null;
    g_lvlselect = null;
    g_hscores = null;
    g_quitlvldialog = null;

    // Global Sprites
    btn_mute = null;
    btn_undo = null;
};

ltgame.prototype = {
    // Main Functions
    create: function(){
        // Splash Screen
        var bg = this.add.sprite(0, 0, "bg");
        g_splash = this.add.group();
        var s_splash = this.add.sprite(17, 17, "startscreen", 0, g_splash);
        this.add.sprite(20, 209, "tiles24", 0, g_splash);
        this.add.sprite(20, 209, "tiles24", 3, g_splash);
        this.add.sprite(116, 209, "tiles24", 5, g_splash);
        this.add.sprite(212, 209, "tiles24", 0, g_splash);
        this.add.sprite(308, 209, "tiles24", 8, g_splash);
        this.add.sprite(20, 257, "tiles24", 55, g_splash);
        this.add.sprite(116, 257, "tiles24", 56, g_splash);
        this.add.sprite(212, 257, "tiles24", 32, g_splash);
        this.add.sprite(308, 257, "tiles24", 18, g_splash);
        this.add.sprite(20, 305, "tiles24", 0, g_splash);
        this.add.sprite(20, 305, "tiles24", 15, g_splash);
        this.add.sprite(116, 305, "tiles24", 12, g_splash);
        this.add.sprite(212, 305, "tiles24", 0, g_splash);
        this.add.sprite(212, 305, "tiles24", 13, g_splash);
        this.add.sprite(308, 305, "tiles24", 44, g_splash);
        this.add.sprite(20, 353, "tiles24", 14, g_splash);
        this.add.sprite(116, 353, "tiles24", 68, g_splash);
        this.add.sprite(212, 353, "tiles24", 0, g_splash);
        this.add.sprite(212, 353, "tiles24", 20, g_splash);
        this.add.sprite(308, 353, "tiles24", 46, g_splash);

        // Main Buttons
        btn_mute = this.add.button(434, 255, "btn-mute", this.mute, this, 0, 0, 1, 0);

        // Level Selector
        g_lvlselect = this.add.group();
    },
    update: function(){

    },

    // Main Button Functions
    mute: function(){
        if (soundEnabled) {
            btn_mute.loadTexture("btn-unmute", 0);
            soundEnabled = false;
        } else {
            btn_mute.loadTexture("btn-mute", 0);
            soundEnabled = true;
        }
    }
};