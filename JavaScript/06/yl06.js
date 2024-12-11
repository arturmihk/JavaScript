/*
Artur-Mihk Peterson
21.11.2024
yl06
*/
// switch case program?

const number = 2
let numbriliik;
switch(true) {
    case (number > 0):
        numbriliik = "positiivne arv";
        break;
    case (number == 0):
        numbriliik = "null";
        break;
    case (number < 0):
        numbriliik = "negatiivne arv";
        break;
}

console.log(numbriliik);

// Restoran

const pronarv = 2;
let laud;

switch(true) {
    case (pronarv == 1 || pronarv == 2):
        laud = "Valige laud kahele inimesele";
        break;
    case (pronarv == 3 || pronarv == 4):
        laud = "Valige laud neljale inimesele";
        break;
    case (pronarv == 5 || pronarv == 6):
        laud = "Valige laud kuuele inimsele";
        break;
    default:
        laud = "Valige suur laud";
}

console.log(laud)