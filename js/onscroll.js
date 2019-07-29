window.onscroll = function() {
	/*console.log(document.body.scrollTop);
	console.log(document.documentElement.scrollTop);
	console.log(window.pageYOffset);
	console.log('------');*/
	if (window.pageYOffset > 550) {
		document.querySelector('#inform').classList.add('fixed');
	}
	else {
		document.querySelector('#inform').classList.remove('fixed');
	}
}
