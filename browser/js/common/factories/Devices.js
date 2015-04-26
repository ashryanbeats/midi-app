'use strict';
app.factory('Devices', ['$window', function($window) {
	function _connect() {
        if($window.navigator && 'function' === typeof $window.navigator.requestMIDIAccess) {
            $window.navigator.requestMIDIAccess();
        } else {
            throw 'No Web MIDI support';
        }
    }

    return {
        connect: _connect
    };
}]);