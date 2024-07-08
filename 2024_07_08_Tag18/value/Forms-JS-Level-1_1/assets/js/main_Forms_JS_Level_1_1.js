/* function malZwei() {
    outputVal = outputVal * 2
    output_calc_von_meinem_HTML.innerHTML = outputVal
}

function ergebnis() {
    document.querySelector(".output").innerHTML = `das Ergebnis ist ${malZwei}`
} */

/*
- meine funktion bekommt den value aus dem inputfeld (zahl)
- dieses wird *2 gerechnet 
- Ergebnisausgabe im HTML

onclick="malZwei()"*/

console.log("hallo")

function malZwei() {
    const inputNumber = Number(document.querySelector("#eingabe__nummer").value);
    console.log(inputNumber);
    const outputValue = inputNumber*2;
    document.querySelector(".output").innerHTML = `das Ergebnis ist ${outputValue}`
}


