/*
 * Provides methods of utility in general JS usage
 */

const Utils = function() {
	
	// Loads json given by url after which calls callback function
	this.loadJSON = ( callback, url ) => {
		const req = new XMLHttpRequest()
		req.overrideMimeType( "application/json" );
		req.open( "GET", url, true );
		req.onreadystatechange = function() {
			console.log( "[loadJSON] Loading done with status " + req.status );
			if( req.readyState == 4 && req.status == "200" ) {
				callback( req.responseText );
			}
		};
		req.send( null );
	}
}

var u = new Utils();

