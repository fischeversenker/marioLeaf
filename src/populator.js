/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function(require, exports)  {

    var Engine = require('marioEngine');
    var Player= require('entities/player');
    var StaticEntity = require('entities/staticEntity');

    exports.populate = function(world) {

        var player = new Player();
        var static1 = new StaticEntity();

        world.setPlayer(player);
        world.addEntity(static1);

    };
});
