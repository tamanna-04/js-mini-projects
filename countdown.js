var count = 10;  //set countdown count

function countdown(){
    console.log(count)   // starts countdown
    count--              // reverses countdown
    if(count == -1){    
        clearInterval(id) // stops countdown, (id) tells what setInteval to stop
    }
}

var id = setInterval(countdown, 1000);  //sets countdown interval