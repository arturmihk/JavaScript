/*
Artur-Mihk Peterson
21.11.2024
yl05
*/
//temperatuuri asi
let temp = -82
if (temp <= 15) {
    console.log("cool weather")
  } else if (temp >=15 && temp <= 25){
     console.log("chill weather")
  } else {
     console.log("hot weather")
    }
//kasutajanime kontrollS

let kasutajanimi = "aada";
const sonum = kasutajanimi == "admin" ? "Tere, admin!" : "Tere, külaline"
console.log(sonum);
//pilet

const piletityyp = "täispilet"; 
const vanus = 24; 

let hind;

// Kontrolli pileti tüüpi
if (piletityyp == "täispilet") {
    if (vanus < 18) {
        hind = 10;
    } else if (vanus <= 64) {
        hind = 20;
    } else {
        hind = 15;
    }
} else if (piletityyp == "sooduspilet") {
    if (vanus < 18 || vanus >= 65) {
        hind = 8;
    } else {
        hind = 15;
    }
} else {
    hind = "Tundmatu piletitüüp";
}

// tulemus
if (typeof hind == "number") {
    console.log(`Pileti hind on ${hind} eurot.`);
} else {
    console.log(hind); 
}

