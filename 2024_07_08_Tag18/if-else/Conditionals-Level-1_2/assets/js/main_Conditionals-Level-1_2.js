console.log("hallo")

function weather() {
    const inputNumber = Number(document.querySelector("#eingabe__nummer").value);
    console.log(inputNumber);
    
    if (inputNumber > 10  || inputNumber < 0){
        document.querySelector(".output").innerHTML = `Die Zahl muss zwischen 1 und 10 liegen`;
    }

    else if (inputNumber >= 8) {
        document.querySelector(".output").innerHTML = `Gute Qualität`;
    }
     else if (inputNumber <= 7 && inputNumber >= 4) {
        document.querySelector(".output").innerHTML = `mittlere Qualität`;
    }

     else  {
        document.querySelector(".output").innerHTML = `Schlechte Qualität`;
    }
}
