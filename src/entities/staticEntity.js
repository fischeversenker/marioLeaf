/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function(require, exports, module)  {

	var Engine = require('marioEngine');

	function StaticEntity() {
        this._parent.constructor.call(this);
        this.pos = Engine.getPhysics().createVector2(300, 50);
        this.width = 400;
        this.height = 100;
        this.color = "#cfa";
	}

	StaticEntity.prototype = Engine.getEntityFactory().inheritFrom('StaticShape');
	StaticEntity.prototype.constructor = StaticEntity;
	StaticEntity.prototype.render = function(ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.fillStyle = this.color;
        console.log(this);
        // ctx.fillRect(-this.getCenter().x, -this.getCenter().y, this.width, this.height);
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.restore();
	};

	module.exports = StaticEntity;
});
