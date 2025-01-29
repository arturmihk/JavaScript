/*
Artur-Mihk Peterson
29.01.2025
yl09
*/
// funk

// Klassikaline funktsioon nime väljastamiseks
function minuNimi() {
    return "Ardur";
}

// Noolefunktsioon nime väljastamiseks
const minuNimiNF = () => "Sinu Nimi";

// Funktsioon, mis kuvab kuupäeva  keeles
function kuupaev(kuupaev) {
    const kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
    const osad = kuupaev.split(".");
    return `${parseInt(osad[0])}. ${kuud[parseInt(osad[1]) - 1]} 20${osad[2]}`;
}

// Funktsioon, mis arvutab summa ja keskmise teadmata hulga täisarvude puhul
function arvudestat(...arvud) {
    const summa = arvud.reduce((acc, num) => acc + num, 0);
    const keskmine = arvud.length ? summa / arvud.length : 0;
    return { summa, keskmine };
}

// Noolefunktsioon, mis asendab täishäälikud tärniga
const salajaneSonum = (sonum) => sonum.replace(/[aeiouõäöüAEIOUÕÄÖÜ]/g, "*");

// Noolefunktsioon unikaalsete nimede leidmiseks
const leiaUnikaalsedNimed = (nimed) => [...new Set(nimed)];

// Testimine
console.log(minuNimi());
console.log(minuNimiNF());
console.log(kuupaev("19.07.23"));
console.log(arvudestat(5, 10, 15, 20));
console.log(salajaneSonum("Salajane sõnum"));
console.log(leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]));
