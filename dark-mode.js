var toggleMode = document.getElementById("p")
var count = 0

function whatever(){
    count ++
    if(count % 2 == 0){
        document.body.style.backgroundColor = "white"
        toggleMode.style.color = "black"
    }
    else{
        document.body.style.backgroundColor = "black"
        toggleMode.style.color = "white"
    }
}
