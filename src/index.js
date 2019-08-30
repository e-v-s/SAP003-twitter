document.getElementById("text").addEventListener("keyup", textEmpty);
document.getElementById("text").addEventListener("keypress", charCount);
document.getElementById("btn-submit").addEventListener("click", function() {
	twitter();
	click();
	charReset();
});

let text = "";
let maxLength = 140;

function textEmpty() {
	event.preventDefault();

    let button = document.getElementById("btn-submit");

    if (text.value == "") {
        button.disabled = true;
    } else if (document.getElementById("text").length == 140) {
    	button.disabled = true;
    } else {
        button.disabled = false;
    }
}

function twitter(){
    event.preventDefault();

    text = document.getElementById("text").value;

    localStorage.setItem("twitter", text);   
    
    return document.getElementById("twitter-here").innerHTML += localStorage.getItem("twitter") + " ";
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