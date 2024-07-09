
 
console.log("hallo")



function minderjaerig() {
    let alterDassDerUserEingibt = Number(document.querySelector("#eingabe_alter").value);
    console.log(alterDassDerUserEingibt);

    if (alterDassDerUserEingibt >= 18) {
        console.log("du bist volljaehrig");
     document.querySelector(".output").innerHTML = `du bist volljaerig und kommst weiter`
    } 
    
    else {
        console.log("du bist minderjaehrig");
        document.querySelector(".output").innerHTML = `du bist minderjaehrig und DARFST NICHT WEITER`
    }
    elem.addEventListener ('click', function (evt) {
        evt.preventDefault();
     });

   
}

