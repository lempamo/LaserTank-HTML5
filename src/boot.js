var boot = function(game){
	console.log("%cStarting LaserTank...", "color:lime; background:darkgray");
};
  
boot.prototype = {
	preload: function(){
          this.game.load.image("loading_bg","assets/loading_bg.png"); 
          this.game.load.image("loading_bar","assets/loading_bar.png"); 
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.updateLayout();
		this.game.state.start("Preload");
	}
}