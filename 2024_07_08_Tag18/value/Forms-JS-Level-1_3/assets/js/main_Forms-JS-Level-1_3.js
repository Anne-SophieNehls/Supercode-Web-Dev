console.log("test")


function berechnen() {
    const inputNumber = Number(document.querySelector("#geburtsjahr").value);
    console.log(inputNumber);
    const outputValue = 2024-inputNumber;
    
    document.querySelector(".output_alter").innerHTML = `Der altersunterschied beträgt ${outputValue} Jahre!`;
}