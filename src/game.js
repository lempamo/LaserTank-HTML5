var ltgame = function(game){
    pgame = game;

    curLevel = 0;
    curLevelPack = "default";
    inGame = false;
    levels = [];
    userLevelPack = null;
    usingBuiltInLevels = true;
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
    },

    // Level Functions
    parseLevels: function(){
        if (usingBuiltInLevels) {
            var lvldata = pgame.cache.getBinary("levels-"+curLevelPack);
            var lvls = lvldata.byteLength / 576;
            var lvlloader = new BinReader(lvldata);

            for (i = 0; i < lvls; i++) {
                var board = [];
                for (x = 0; x < 16; x++) {
                    board[x] = [];
                    for (y = 0; y < 16; y++) {
                        board[x][y] = lvlloader.getUInt8();
                    }
                }
                var lvltitle = lvlloader.getFixedNullTermString(31);
                var lvldesc = lvlloader.getFixedNullTermString(256);
                var lvlauthor = lvlloader.getFixedNullTermString(31);
                var diff = lvlloader.getUInt8();
                lvlloader.getUInt8();
                levels[i] = {
                    "board": board,
                    "title": lvltitle,
                    "desc": lvldesc,
                    "author": lvlauthor,
                    "diff": diff
                };
            }
            return levels;
        }
    }
};