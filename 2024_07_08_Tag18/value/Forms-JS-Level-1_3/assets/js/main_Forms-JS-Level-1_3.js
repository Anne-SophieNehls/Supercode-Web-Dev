console.log("test")


function berechnen() {
    const inputNumber1 = Number(document.querySelector("#Alter1").value);
    console.log(inputNumber1);
    const inputNumber2 = Number(document.querySelector("#Alter2").value);
    console.log(inputNumber2);
    const outputValue = inputNumber1-inputNumber2;
    
    document.querySelector(".output_alter").innerHTML = `Der Altersunterschied beträgt ${outputValue} Jahre!`;
}

/* Modulo-Operation mit dem % */