let myImage = document.querySelector('img');

myImage.onclick = function() {
let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.jpeg'){
		myImage.setAttribute('src','images/firefox2.jpg');
	}else{
	myImage.setAttribute('src','images/firefox-icon.jpeg')
	}
}

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
function setUserName(){
	let myName = prompt('please enter your name');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'mozilla is cool , ' + storedName;
}
myButton.onclick = function(){
	setUserName();
}
