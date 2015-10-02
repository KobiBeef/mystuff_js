var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';

var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'imgs/firefox-icon.png'){
		myImage.setAttribute('src', 'imgs/firefox-icon2.png');
	}else{
		myImage.setAttribute('src', 'imgs/firefox-icon.png');
	}
}

function setUserName(){
	var myName = prompt('Enter you name');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool,' + myName;
	if (!localStorage.getItem('name')) {
		setUserName();
	}else {
		var storedName = localStorage.getItem('name');
		myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
	}
}


myButton.onclick = function(){
	setUserName();
}