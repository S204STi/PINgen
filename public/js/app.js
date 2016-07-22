'use strict';

var PINtext = document.getElementByID('PIN').innerHTML

function copyToClipboard(text) {
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}
