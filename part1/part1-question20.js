function printSecs() {  //calls printTime everysecond
    setInterval(printTime, 1000);
}

function printTime() {  //prints current time
    let d = new Date();
    console.log(d.toLocaleTimeString());
}

printSecs(); //will print the seconds forever

