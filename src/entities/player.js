/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function(require, exports, module)  {
    
	var Engine = require('marioEngine');

	function Player() {
        this._parent.constructor.call(this);
        this.pos = Engine.getPhysics().createVector2(200, 150);
        this.width = 200;
        this.height = 200;
        this.color = "#cf0";
	}

	Player.prototype = Engine.getEntityFactory().inheritFrom('Player');
	Player.prototype.constructor = Player;
	Player.prototype.render = function(ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.fillStyle = this.color;
        // ctx.fillRect(-this.getCenter().x, -this.getCenter().y, this.width, this.height);
        ctx.fillRect(0,0, this.width, this.height);
        ctx.restore();
	};

	module.exports = Player;
});
