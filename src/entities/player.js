define(function(require, exports, module)  {
    
	var Engine = require('marioEngine');

	function Player() {
        this.pos = Engine.getPhysics().createVector2(200, 150);
        this.width = 200;
        this.height = 200;
        this.color = "#cf0";

	}

	Player.prototype = Engine.getEntityFactory().createEntity('Player').prototype;
	Player.prototype.constructor = Player;
	Player.prototype.render = function(ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.getCenter().x, -this.getCenter().y, this.width, this.height);
        ctx.restore();
	};

	module.exports = Player;
});
