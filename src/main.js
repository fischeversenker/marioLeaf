define(function(require, exports, module) {
	var req = requirejs.config({
		context: 'test',
		baseUrl: 'src',
		packages: [
			{
				name: 'marioEngine',
				location: '../libs/mario'
			}
		]
	});
	req(['marioEngine'], function(Engine){
		Engine.onReady(function() {
			req(['entryPoint'], function(EntryPoint){
				EntryPoint.init();
			});
		});
	});

});