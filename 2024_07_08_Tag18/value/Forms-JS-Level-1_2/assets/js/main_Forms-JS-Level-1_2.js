function berechnen() {
    const inputNumber = Number(document.querySelector("#geburtsjahr").value);
    console.log(inputNumber);
    const outputValue = 2024-inputNumber;
    document.querySelector(".output_alter").innerHTML = `Du bist ${outputValue} Jahre alt!`;
}

console.log("test")