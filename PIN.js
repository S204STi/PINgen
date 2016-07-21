'use strict';

function getPIN(min, max) {
	var PIN = "";
	var digit;
 for(var i=0; i<4; i++){
 	 digit = Math.trunc(Math.random() * (max - min) + min);
 	 PIN += digit;
 }
 return PIN;
}

// getPIN(0,9);

module.exports = getPIN;
