var EventEmitter = ( function () {
	'use strict';
	var p = EventEmitter.prototype;
	
	function EventEmitter () {
	    this._lstnrs = {};
	}
	
	p.on = function ( e, lstnr ) {
	    this._lstnrs[ e ] || ( this._lstnrs[ e ] = [] );
	    this._lstnrs[ e ].push( lstnr );
	};
	
	p.off = function ( e, lstnr ) {
	    var i = this._lstnrs[ e ].indexOf( lstnr );
	    i > -1 && this._lstnrs[ e ].splice( i, 1 );
	};
	
	p.emit = function ( e, arg ) {
	    var i = 0, lstnr, lstnrs = this._lstnrs[ e ];
	    if ( ! lstnrs ) return;
	    while ( lstnr = lstnrs[ i++ ] ) lstnr( arg );
	};
	
	return EventEmitter;
} )();