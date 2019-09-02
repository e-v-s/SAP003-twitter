document.getElementById("text").addEventListener("keyup", disableButton);
document.getElementById("text").addEventListener("keypress", charCount);
document.getElementById("btn-submit").addEventListener("click", function() {
	twitter();
	click();
	charReset();
});

// document.getElementById("text").addEventListener("keydown", function(e) {
// 	if(e.which === 8 && count <140) {
// 		count++;
// 		document.getElementById("char-count").innerHTML = count;

// 	}
// })

let text = document.getElementById("text");
let maxLengthText = 139;
let button = document.getElementById("btn-submit");
let count = 0;

function disableButton() {
	event.preventDefault();

    if (text.value === "") {
        button.disabled = true;
    } else if (text.value !== "" && count >= 0) {
        button.disabled = false;
    } else {
    	button.disabled = true;
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
	if (count >= 0) {
		count = maxLengthText--;
		document.getElementById("char-count").innerHTML = count;
		if (count == 20) {
			document.getElementById("char-count").style.color = "blue";
		} else if (count == 10) {
			document.getElementById("char-count").style.color = "red";
		}
	} else if (count < 0) {
		count = maxLengthText--;
		document.getElementById("char-count").innerHTML = count;
		document.getElementById("char-count").style.color = "grey";
	}
}


function charReset() {
	count = 0;
	maxLengthText = 140;
	if (maxLengthText >= 0) {
		count = maxLengthText--;
	} 
	document.getElementById("char-count").innerHTML = 140;
}

function click() {
	document.getElementById("text").value = "";
	button.disabled = true;
}

