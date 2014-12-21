/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function(require, exports, module)  {

	var Engine = require('marioEngine');

	function StaticEntity() {
        this._parent.constructor.call(this);
        this.pos = Engine.getPhysics().createVector2(300, 150);
        this.shape = Engine.getEntityManager().createShape('SimpleShape');
        this.shape.color = '#4c9';
	}

	StaticEntity.prototype = Engine.getEntityManager().getEntityFactory().inheritFrom('Entity');
	StaticEntity.prototype.constructor = StaticEntity;
	StaticEntity.prototype.render = function(ctx) {
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.fillStyle = this.shape.color;
        ctx.fillRect(-this.getCenter().x, -this.getCenter().y, this.shape.width, this.shape.height);
        ctx.restore();
	};

    StaticEntity.prototype.getCenter = function (){
        return Engine.getPhysics().createVector2(this.shape.width / 2, this.shape.height / 2);

    };

	module.exports = StaticEntity;
});
