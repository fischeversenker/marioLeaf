define(function(require, exports, module)  {

    var Engine = require('marioEngine');
    var Player= require('entities/player');

    exports.init = function() {

        var core = Engine.getCore();
        core.setDOM($('#myCanvas'));

        var world = core.createWorld();
        //fill world
        var player = new Player();
        world.setPlayer(player);
        world.addEntity(Engine.getEntityFactory().createEntity('SimpleShape', { x: 250,
                                                                                y: 100,
                                                                                width: 100,
                                                                                height: 200,
                                                                                color: '#b2f'}));
        core.setActiveWorld(world);
        core.registerTicker(1, function() {}, this);
        core.start();

    };
});
