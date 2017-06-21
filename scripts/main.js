"use strict";

var sayHello = 'hello o/';
console.log(sayHello);

function openSlideMenu() {
	// set width and margin
	document.getElementById('slide-menu').style.width = '250px';
	document.getElementById('main').style.marginLeft = '250px';

}
			
function closeSlideMenu() {
	// set width and margin
	document.getElementById('slide-menu').style.width = '0';
	document.getElementById('main').style.marginLeft = '0';
	
}