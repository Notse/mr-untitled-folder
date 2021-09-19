let contxtmenu = document.getElementById('context-menu');
let Folder = document.getElementById('visiblity');
let textBox = document.getElementById('text-box');
let body = document.getElementById('folder');
let Msg = document.getElementById('msg');

let mouth = document.getElementById('mood');  
let eyeBrows = document.getElementById('eyeBrows');
let leftEye = document.getElementById('eye-1');
let rightEye = document.getElementById('eye-2');
let leftEyebrow = document.getElementById('leftEyebrow');
let rightEyebrow = document.getElementById('rightEyebrow');

let title = document.getElementById('title');
let subtitle = document.getElementById('subtitle');
let info = document.getElementById('info');
let btn = document.getElementById('btn');
let hideText = document.getElementById('instruction');

let folderExist = 0;
let isCut;
let folderStatus = 0;

window.addEventListener('contextmenu', function(e) {
	e.preventDefault();
			Folder.style.zIndex = "-2";
			contxtmenu.style.top = e.offsetY + 'px';
			contxtmenu.style.left = e.offsetX + 'px';
			contxtmenu.classList.add('active');
			hideText.style.display = "none";
})

window.addEventListener('click', function(){
		contxtmenu.classList.remove('active');
})

function createFolder() {
	
	if (folderExist === 1) {
		infoAlert("Mr Untitled Folder says", "I am Already there !<br> No Need to create a New one");
		folderExist = 1;
	} else {
				Folder.style.display = 'block';
				eyeBrows.style.display = "none";
				Folder.style.animation = 'popup .5s ease-in-out ';
				leftEye.style.animation = "blink 3.5s infinite, eyesLookdown 3s linear forwards";
				rightEye.style.animation = "blink 3.5s infinite, eyesLookdown 3s linear forwards";
				textBox.value = 'Mr Untitled Folder';
				Msg.innerHTML = "Dude! Give me a Name";
				body.style.color = "#EDD645";
				mouth.classList.remove('smile');
				folderExist += 1;
	}
}

function deleteFolder() {
	if (folderExist === 1) {
		
			infoAlert("Mr Untitled Folder wants to Live", "Are You sure??? <br> Click Yes to Delete", "yes");
		body.style.color = "#EDD645";
		leftEyebrow.style.animation = 'eyeBrowUp .5s linear forwards';
		rightEyebrow.style.animation = 'eyeBrowUp .5s linear forwards';
		eyeBrows.style.display = "block";
			leftEyebrow.style.transform = "rotate(0)";
			rightEyebrow.style.transform = "rotate(0)";
			leftEyebrow.style.top= "35%";
			leftEyebrow.style.left= "18%";
			rightEyebrow.style.top= "35%";
			rightEyebrow.style.left= "65%";
		mouth.classList.remove('smile');
		Msg.innerHTML = "but Why?? We are Friends right?";
	} else {
		infoAlert("Mr Untitled Folder says", "There is nothing to delete ");
	}
	
	btn.addEventListener('click', function(e)  {
		if(btn.innerHTML.toLowerCase() === 'yes'){
			folderExist = 0;
			folderStatus = 1;
			Folder.style.animation = 'popDown .5s ease-in-out forwards';
			mouth.classList.remove('smile');
			eyeBrows.style.display = "none";
			body.style.color = "#EDD645";
			mouth.classList.remove('anger');
		  setTimeout(function reset(){ Folder.style.display = 'none';}, 1000);
		}
});
		
	
}


function renameFolder() {
	textBox.select();
	Folder.style.zIndex = "1";
	leftEye.style.animation = 'blink 3.5s infinite';
	rightEye.style.animation = 'blink 3.5s infinite';
}

function cutFolder() { 
	if(folderExist === 1) {
		isCut = true;
		body.style.color = "#ede195";
		Msg.innerHTML = "Paste me Somewhere";
		mouth.classList.remove('smile');
	}
}

function pasteFolder() { 
	if (isCut) {
		body.style.color = "#EDD645";
		Msg.innerHTML = "feeling fresh";
		mouth.classList.add('smile');
		isCut = false;
	}
}

function nameChange() {
	
	if(textBox.value.toLowerCase().includes("dumb")) {
		Msg.innerHTML = "enough is enough <br> I will Delete you.";
		eyeBrows.style.display = "block";
		leftEye.style.animation = 'blink 3.5s infinite, eyesLookup .5s linear forwards';
		rightEye.style.animation = 'blink 3.5s infinite, eyesLookup .5s linear forwards';
		
		leftEyebrow.style.transform = "rotate(35deg)";
		rightEyebrow.style.transform = "rotate(-35deg)";
		
		leftEyebrow.style.animation = 'eyeBrowUp .5s linear forwards';
		rightEyebrow.style.animation = 'eyeBrowUp .5s linear forwards';
		
		body.style.color = "#D43b30";
		mouth.classList.remove('smile');
		mouth.classList.add('anger');
		
	} else if(textBox.value.toLowerCase().includes("new")) {
		Msg.innerHTML = "Am I Joke To you?" ;
		leftEye.style.animation = 'blink 3.5s infinite, eyesLookup .5s linear forwards';
		rightEye.style.animation = 'blink 3.5s infinite, eyesLookup .5s linear forwards';
		
		leftEyebrow.style.animation = 'eyeBrowUp .5s linear forwards';
		rightEyebrow.style.animation = 'eyeBrowUp .5s linear forwards';
		
		body.style.color = "#EDD645";
		mouth.classList.remove('smile');
		
		eyeBrows.style.display = "block";
		leftEyebrow.style.transform = "rotate(0)";
		rightEyebrow.style.transform = "rotate(0)";
		leftEyebrow.style.top= "35%";
		leftEyebrow.style.left= "18%";

		rightEyebrow.style.top= "35%";
		rightEyebrow.style.left= "65%";
		
	}else if(textBox.value.toLowerCase() === "" || textBox.value.toLowerCase() === " " ){
		Msg.innerHTML = "empty? but i deserve a name" ;
		mouth.classList.remove('smile');
		body.style.color = "#EDD645";
		eyeBrows.style.display = "block";
		
		
		leftEye.style.animation = "blink 3.5s infinite, eyesLookup .5s linear forwards";
	rightEye.style.animation = "blink 3.5s infinite, eyesLookup .5s linear forwards";
		
		leftEyebrow.style.animation = 'eyeBrowUp .5s linear forwards';
		rightEyebrow.style.animation = 'eyeBrowUp .5s linear forwards';
		
		leftEyebrow.style.transform = "rotate(0)";
		rightEyebrow.style.transform = "rotate(0)";
		leftEyebrow.style.top= "35%";
		leftEyebrow.style.left= "18%";

		rightEyebrow.style.top= "35%";
		rightEyebrow.style.left= "65%";
		
	} else if(textBox.value.toLowerCase().includes('notse')) {
		Msg.innerHTML = "sounds Good! okay I love it" ;
		mouth.classList.add('smile');
		eyeBrows.style.display = "none";
		body.style.color = "#EDD645";
		leftEye.style.animation = 'blink 3.5s infinite, eyesLookup .5s linear forwards';
		rightEye.style.animation = 'blink 3.5s infinite, eyesLookup .5s linear forwards';
		leftEyebrow.style.animation = 'eyeBrowUp .5s linear forwards';
		rightEyebrow.style.animation = 'eyeBrowUp .5s linear forwards';
		
	} else {
		Msg.innerHTML = "Nope! I don't like it";
		mouth.classList.remove('smile');
		eyeBrows.style.display = "none";
		body.style.color = "#EDD645";
		leftEyebrow.style.animation = 'eyeBrowUp .5s linear forwards';
		leftEye.style.animation = 'blink 3.5s infinite, eyesLookup .5s linear forwards';
		rightEye.style.animation = 'blink 3.5s infinite, eyesLookup .5s linear forwards';
		rightEyebrow.style.animation = 'eyeBrowUp .5s linear forwards';
	}
}

function infoAlert(ttl, sub , resp="Ok") {
	info.style.bottom = "8%";
	title.innerHTML = ttl;
	subtitle.innerHTML = sub;
	btn.innerHTML = resp;
}

function closeAlert() {
	info.style.bottom = "-50%";
}

// function exist() {
// 	if (folderExist === 2) {
// 		infoAlert("Mr Untitled Folder says", "I am Already there !<br> No Need to create a New one");
// 		folderExist = 1;
// 	}
// }

function animation() {
		leftEyebrow.style.animation = 'eyeBrowDownExtd .5s linear forwards';
		leftEye.style.animation = 'blink 3.5s infinite, eyesLookdownExtd .5s linear forwards';
	rightEyebrow.style.animation = 'eyeBrowDownExtd .5s linear forwards';
	rightEye.style.animation = 'blink 3.5s infinite, eyesLookdownExtd .5s linear forwards';
	Msg.innerHTML = "????";
	mouth.classList.remove('smile');
}
