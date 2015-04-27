'use strict';
app.factory('Devices', ['$window', function($window) {
	function _connect() {
        if($window.navigator && 'function' === typeof $window.navigator.requestMIDIAccess) {
            console.log("Your brower provides MIDI support.");
            return $window.navigator.requestMIDIAccess();
        } else {
            throw 'Your brower doesn\'t provide Web MIDI support';
        }
    }

    return {
        connect: _connect
    };
}]);