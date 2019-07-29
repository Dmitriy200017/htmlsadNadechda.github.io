window.onload = function() {
	var slides=document.getElementsByClassName('im');
	var ButPrev=document.getElementById('prev');
	var ButNext=document.getElementById('next');
	var btns = document.querySelectorAll('.click');
	var txts = document.querySelectorAll('.block'); 
	var SlideIndex=0;
	var mobm= document.getElementById('mobmenu');
	var menclick=document.querySelector('.menuclick');
	var chicks = document.querySelectorAll('.slesh');
	var thicks = document.querySelectorAll('.submenu');
	var plus = document.querySelector('.plus');
	var minus = document.querySelector('.minus');

	var photocart = document.querySelectorAll('.cartphoto > img');
	console.log(photocart);
	for (photo of photocart){
		photo.onclick = function(event){
			event.stopPropagation();
			document.querySelector('.photomain').style.top = event.pageY-event.clientY -350 + 'px';
			document.querySelector('.photomain > img').src = event.target.src;	

			document.querySelector('.photomain').classList.add('openimg');
			console.log('openimg');
		}

	}
	/*document.querySelector('.photomain').onclick = function(){
		this.classList.remove('openimg');
		console.log(this);
		console.log(event);
	}*/
	if (document.querySelector('.photosubs') != null){
	document.querySelector('.photosubs').onclick = function(){
		document.querySelector('.photomain').classList.remove('openimg');
		console.log('remove');
		console.log(event);
		}
	}	
	plus.onclick = addfontsize;
	minus.onclick = addfontsize;
	var sizeshrift = parseInt(window.getComputedStyle(document.documentElement).fontSize);
	function addfontsize(event){
		console.log(document.body.style);
		console.log(parseInt(window.getComputedStyle(document.documentElement).fontSize));
		if ( event.target == plus){
			sizeshrift += 1;
		}
		if(event.target == minus){
			sizeshrift -= 1;
		}
		console.log(sizeshrift);
		document.documentElement.style.fontSize = sizeshrift + 'px';
		console.log(window.getComputedStyle(document.documentElement).fontSize);
	}
	mobm.onclick=function(){
	menclick.classList.toggle("menuclick");
	}
	if ( ButPrev != null) {
		ButPrev.onclick = function(){
			ChangeSlide('p');
		}
	}
	if ( ButNext != null){
	ButNext.onclick = function(){
		ChangeSlide('n');
	}
}
	function ChangeSlide(n){
		console.log(slides);
		slides[SlideIndex].className = slides[SlideIndex].className.replace('shown','');

		switch (n){
			case 'p':
				SlideIndex += -1;
				if(SlideIndex  < 0){
					SlideIndex = slides.length - 1;
				}
				break;
			case 'n':
				SlideIndex += 1;
				if (SlideIndex > (slides.length - 1)){
					SlideIndex = 0;
				}
				break;
				default:
			if (typeof(n) == 'number') {
				SlideIndex = n;
			}
		}
		slides[SlideIndex].className += ' shown';
		//document.querySelector('.textimg').innerHTML = slides[SlideIndex].getAttribute('txt');
	}
	for (chick of chicks){
		chick.onclick = function(event){
			for (thick of thicks){
				console.log(this.lastElementChild);
				if ( thick != this.lastElementChild){
					console.log(thick)
					thick.className = thick.className.replace(' height', '');
				}
				else{
					this.lastElementChild.classList.toggle('height');
				}
			}
		}
	}
	for ( btn of btns) {
			console.log(btn);
		btn.onclick = function (event) {
			console.log(btns);
			console.log(event.target.tagName);
			console.log(this);

			for (txt of txts ) {
				if ( txt != this.nextElementSibling) {
					txt.className = txt.className.replace(' open', '');
				}
				else {
					console.log(txt);
					this.nextElementSibling.classList.toggle('open');
				}
			}

			for (b of btns) {
				if (b!= this) {
					console.log(b);
					b.querySelector('i').className += ' fa-chevron-down';
					b.querySelector('i').className =  b.querySelector('i').className.replace(' fa-chevron-up', '');
				}
			}

			this.querySelector('i').classList.toggle('fa-chevron-down');
			this.querySelector('i').classList.toggle('fa-chevron-up');
		}
	}

	for (txt of txts ) {
			txt.onclick = blockSwitch;
		}
	function blockSwitch() {
		console.log('this: ');
		console.log(this);
		this.classList.toggle('open');
		console.log(this.previousElementSibling.querySelector('i'));
		this.previousElementSibling.querySelector('i').classList.toggle('fa-chevron-down');
		this.previousElementSibling.querySelector('i').classList.toggle('fa-chevron-up');
	}

	
	/*
	ymaps.ready(init);
    function init(){ 
        var myMap = new ymaps.Map("map", {
            center: [54.61394001794403,39.72809907473137],
            zoom: 17,
            controls: ['smallMapDefaultSet','geolocationControl'],
        });
        myMap.behaviors.disable([
		 	"scrollZoom"
		 	]);
        //myMap.controls.add(' routeEditor');
        var myPlacemark1 = new ymaps. Placemark([54.614312570039914,39.72855949999996], {
        	hintContent: 'Детский сад №65 "Надежда',
        	ballonContent:'Детский сад №65 Надежда'},
        	{preset: 'islands#redIcon'}
        	);

        myMap.geoObjects.add(myPlacemark1);//метка
         control = myMap.controls.get('routeButtonControl');
         control.routePanel.state.set('from', 'улица Семашко,50');
         myMap.controls.add('routePanelControl', {
		    maxWidth: 200,
		});
		var routePanel = myMap.controls.get('routePanelControl')
		    .routePanel;
		routePanel.options.set('adjustMapMargin', true);
		routePanel.state.set({
		    fromEnabled: true,
		    from: "",
		    to: "улица Семашко,50",
		    type: "auto"
		});
		 }*/
}
