'use strict';

var PINtext = document.getElementById('PIN');
	PINtext.addEventListener('click', copyToClipboard);

function copyToClipboard(e) {
	window.prompt("Copy to clipboard: Ctrl+C, Enter", e.target.innerHTML);
}


module.exports = copyToClipboard;
