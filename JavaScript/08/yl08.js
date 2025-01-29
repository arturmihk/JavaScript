/*
Artur-Mihk Peterson
29.01.2025
yl08
*/
// while

const mundid = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20]
const omundid = []
let i = 0;
while (i < mundid.length) {
    if (mundid[i] <= 2 && mundid[i] > 0) { 
        omundid.push(mundid[i]);
    }
    i++;
}

let summa = 0;
for (let mundid of omundid) {
    summa += mundid;
}


console.log("Müntide arv:", omundid.length);
console.log("Müntide summa:", summa);
console.log("Mündid:", omundid);
