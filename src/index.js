document.getElementById("text").addEventListener("keyup", disableButton);
document.getElementById("text").addEventListener("keypress", charCount);
document.getElementById("btn-submit").addEventListener("click", function() {
	twitter();
	click();
	charReset();
});

let text = "";
let maxLengthText = 139;

function disableButton() {
	event.preventDefault();

    let button = document.getElementById("btn-submit");

    if (text.value == "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

function twitter(){
    event.preventDefault();

    text = document.getElementById("text").value;

    localStorage.setItem("twitter", text);

    let newTweet = document.createElement("p");
    let newNode = document.createTextNode(localStorage.getItem("twitter"));
    newTweet.appendChild(newNode);
    let newPost = document.getElementById("twitter-here");
    
    return newPost.appendChild(newTweet); 
}

function charCount() {
	let char = 0;

	if (maxLengthText >= 0) {
		char = maxLengthText--;
		// document.getElementById("char-count").innerHTML = char;
	}
	document.getElementById("char-count").innerHTML = char;
}

function charReset() {
	let char = 0;
	maxLengthText = 140;
	if (maxLengthText >= 0) {
		char = maxLengthText--;
	}
	document.getElementById("char-count").innerHTML = 140;
}

function click() {
	document.getElementById("text").value = "";
}

