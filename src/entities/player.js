/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function(require, exports, module)  {
    
	var Engine = require('marioEngine');

	function Player() {
        this._parent.constructor.call(this);
        this.pos = Engine.getPhysics().createVector2(170, 180);
        this.shape = Engine.getEntityManager().createShape('SimpleShape');
        this.shape.width = 80;
	}

	Player.prototype = Engine.getEntityManager().getEntityFactory().inheritFrom('Player');
	Player.prototype.constructor = Player;
	Player.prototype.render = function(ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.fillStyle = this.shape.color;
        ctx.fillRect(-this.getCenter().x, -this.getCenter().y, this.shape.width, this.shape.height);
        ctx.restore();
	};

    Player.prototype.getCenter = function (){
        return Engine.getPhysics().createVector2(this.shape.width / 2, this.shape.height / 2);

    };

	module.exports = Player;
});
