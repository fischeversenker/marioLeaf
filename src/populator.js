/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function(require, exports)  {

    var Engine = require('marioEngine');
    var Player= require('entities/player');
    var StaticEntity = require('entities/staticEntity');

    exports.populate = function(world) {

        var LayerList = world.createAndAddLayerList();
        var Layer = LayerList.createAndAddLayer();
        var Layer2 = LayerList.createAndAddLayer();
        var EntityList = Layer.createAndSetEntityList();
        var EntityList2 = Layer2.createAndSetEntityList();

        var player = new Player();
        var static1 = new StaticEntity();

        EntityList.add(player); // Player auf Layer 0
        EntityList2.add(static1); // Static1 auf Layer 1

    };
});
