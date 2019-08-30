document.getElementById("text").addEventListener("keyup", disableButton);
document.getElementById("text").addEventListener("keypress", charCount);
document.getElementById("btn-submit").addEventListener("click", function() {
	twitter();
	click();
	charReset();
});

let text = "";
let maxLength = 139;

function disableButton() {
	event.preventDefault();

    let button = document.getElementById("btn-submit");
    let textInput = document.getElementById("text");

    if (text.value == "") {
        button.disabled = true;
    } else if (textInput.length == 140) {
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
    newTweet.appendChild(newNode)
    let newPost = document.getElementById("twitter-here");
    
    return newPost.appendChild(newTweet); 
}

function charCount() {
	let char = 0;

	if (maxLength >= 0) {
		char = maxLength--;
		document.getElementById("char-count").innerHTML = char;
	}
}

function charReset() {
	document.getElementById("char-count").innerHTML = 140;
}

function click() {
	document.getElementById("text").value = " ";
}
