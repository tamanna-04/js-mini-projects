var n = 1;

box.addEventListener("click", changeCount);

function changeCount(){
    document.getElementById("clicksCunt").innerText = "Box clicked " + n + " times"
    n++
}
