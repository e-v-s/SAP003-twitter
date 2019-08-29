document.getElementById("text").addEventListener("click", textEmpty);
let text = document.getElementById("text").value;

function textEmpty() {
    let button = document.getElementById("btn-submit");
    if (text.value != "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}




// function twitter(){
//     event.preventDefault();

//     localStorage["twitter"] = text;

//     let textStorage = localStorage["twitter"];

    
    
//     return document.getElementById("twitter-here").innerHTML = textStorage;
// }