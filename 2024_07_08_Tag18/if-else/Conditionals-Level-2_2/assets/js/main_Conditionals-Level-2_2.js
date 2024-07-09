
console.log("hallo")
const meinBody = document.querySelector("#body")

function wetter() {
    const inputNumber = Number(document.querySelector("#reglerWetter").value);
    console.log(inputNumber);
    const outputValue = inputNumber*2;
    if (inputNumber >=100) {
        document.querySelector(".output").innerHTML = `Wetter gut`;
        meinBody.classList.toggle("green")
    }
     if else (inputNumber >=50 && <50) {
        document.querySelector(".output").innerHTML = `Wetter mittel`;
        meinBody.classList.toggle("yellow")
    }
    else {
    document.querySelector(".output").innerHTML = `Wetter schlecht`;
    meinBody.classList.toggle("red")
    }
}


