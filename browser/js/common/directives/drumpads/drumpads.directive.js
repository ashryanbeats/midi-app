'use strict';
app.directive('drumpads', function(Devices) {
	function link(scope) {
    	scope.here = "hi";

    	scope.devices = [];

    	Devices
    		.connect()
    		.then(function(access) {
    			console.log("Web MIDI access received.");

    			if (access.inputs && access.inputs.size > 0) {
    				console.log("You have", access.inputs.size, "MIDI inputs connected.");
    				var inputs = access.inputs.values();
    				var input = null;

    				// iterate through connected devices
    				for (input = inputs.next(); input && !input.done; input = inputs.next()) {
    					scope.devices.push(input.value);
    				}
    				console.log(scope.devices);
    			}
    			else {
    				console.log('No devices detected.');
    			}
    		})
    		.catch(function(err) {
    			console.err(err);
    		});
    }

	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/drumpads/drumpads.html',
		link: link
	};
});