// Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt:  
//! ja das ist logisch, punkt vor strich rechnung, 5. Kloasse matteunterricht :D
let punktVorStrich = 5 + 5 * 10;  
console.log( punktVorStrich + score);

// Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern:  
let klammerZuerst = (5 + 5) * 10;  
console.log( klammerZuerst  + score);

//Du kannst Werte auf Variablen addieren:  
let score = 10;  
let zero = 0;  

variablenAddieren = zero + 10;  
console.log( variablenAddieren + score);

//Hiervon gibt es eine verkürzte Version:  
variablenAddieren += 10;  
console.log('Ergebnis: ' + score)

// Nun probiere es hiermit:
// Inkrementierungen und Dekrementierungen können wie folgt verwendet werden:  
let zahl = 1;  
zahl = zahl + 1;  
zahl += 1;

// Verwende den Inkrement-Operator:  
zahl++;  
console.log('increment: ' + zahl);

// Verwende den Dekrement-Operator:  
zahl--;  
console.log('dekrement: ' + zahl);