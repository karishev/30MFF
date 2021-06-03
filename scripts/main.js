
// AOS.init({
// 	easing: 'ease-in-quad',
// });


window.addEventListener("scroll", function() {showFunction(document.getElementById("BTS"))});
window.addEventListener("scroll", function() {showFunction(document.getElementById("CAST"))});

function showFunction(element) {
    if (document.body.scrollTop > findPos(element) - 700 || document.documentElement.scrollTop > findPos(element) - 700) {
        element.style.animation = "fade 3s";
    } else {
        element.style.animation = "refade 3s";
    }
}

// TO SCROLLLLLLLLLLL
function findPos(obj) {
	var pos = 0;
	if (obj.offsetParent) {
		do {
			pos += obj.offsetTop;
		} while (obj = obj.offsetParent);
	return pos;
	}
}

let tovideo = document.getElementById('tovideo');
let tocast = document.getElementById('tocast');
let tobts = document.getElementById('tobts');

tovideo.onclick = function() {
	window.scroll(0,findPos(document.getElementById("finalvideo"))-125);
}
tocast.onclick = function() {
	window.scroll(0,findPos(document.getElementById("finalcast"))-70);
}
tobts.onclick = function() {
	window.scroll(0,findPos(document.getElementById("finalbts"))-70);
}


var prevScroll = window.pageYOffset;
window.onscroll = function() {
	var currentScroll = window.pageYOffset;
	if (prevScroll > currentScroll) {
		document.querySelector('.topscreen').style.top = "1.1%";
	} else {
		document.querySelector('.topscreen').style.top = "-100px";
	}
	prevScroll = currentScroll;
}
// let myNavBar = document.getElementById('navbar');
// let myNav = document.getElementById('navigation');

// myNavBar.onclick = function() {
// 	let hid = myNav.getAttribute('display');
// 	if (hid == 'hidden') {
// 		myNav.setAttribute('display', 'block');
// 	} else {
// 		myNav.setAttribute('display', 'hidden');
// 	}
// }


// function hide (elements) {
//   elements = elements.length ? elements : [elements];
//   for (var index = 0; index < elements.length; index++) {
//     elements[index].style.display = 'none';
//   }
// }

// function show (elements) {
//   elements = elements.length ? elements : [elements];
//   for (var index = 0; index < elements.length; index++) {
//     elements[index].style.display =  'block';
//   }
// }

// function change (elements, color) {
// 	elements = elements.length ? elements : [elements];
// 	for (var index = 0; index<elements.length; index++) {
// 		elements[index].style.background = color;
// 	}
// }

// function transit (element, xint, yint, degree) {
// 	element.style.transform = xint + yint + degree || 'none';
	
// }

// function transitAll(cond) {
// 	if (cond == true) {
// 		transit(document.querySelector('.one'), 'translateX(-12px)', 'translateY(5px)', 'rotate(90deg)');
// 		transit(document.querySelector('.two'), 'translateX(0px)', 'translateY(-7px)', 'rotate(90deg)');
// 		transit(document.querySelector('.three'), 'translateX(12px)' , 'translateY(-19px)', 'rotate(90deg)');
// 	}
// 	else {
// 		transit(document.querySelector('.one'));
// 		transit(document.querySelector('.two'));
// 		transit(document.querySelector('.three'));
// 	}
// }

// let myNav = document.getElementById('navigation');
// let myNavBar = document.getElementById('navbar');
// // let block = document.querySelectorAll('.block');
// myNavBar.onclick = function() {
// 	let hid = myNav.style.display;
// 	if (hid === 'none') {
// 		myNav.style.display = 'block';
// 		change(document.querySelectorAll('.block'), '#D4E7FF');
// 		transitAll(true);
// 	} else {
// 		myNav.style.display = 'none';
// 		change(document.querySelectorAll('.block'), 'white');
// 		transitAll(false);

// 	}
// }



// let thething = document.getElementById('lol');

// document.getElementById("lol").addEventListener("click", changeborder);

// function changeborder() {
// 	if (thething.style.background == "lightblue") {
// 		thething.style.background = "white"
// 	}
// 	else {
// 		thething.style.background = "lightblue"
// 	}
// }

// let myImage = document.querySelector('img');

// myImage.onclick = function() {
// 	let mySrc = myImage.getAttribute('src');
// 	if(mySrc === 'images/firefox-icon.png') {
// 		myImage.setAttribute('src','images/firefox2.png');
// 	} else {
// 		myImage.setAttribute('src','images/firefox-icon.png');
// 	}
// }

// let myButton = document.querySelector('button');

