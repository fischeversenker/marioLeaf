/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define */
define(function(require, exports, module)  {

    var Engine = require('marioEngine');
    var Populator = require('populator');

    exports.init = function() {

        var Core = Engine.getCore();
        Core.setDOM($('#myCanvas'));

        var world = Core.createWorld();
        Core.setActiveWorld(world);

        Populator.populate(world);

        Core.start();
    };
});
