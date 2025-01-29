/*
Artur-Mihk Peterson
29.01.2025
yl11
*/
// see on mingit moodi matemaatilised valemid


const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

const korrastatudNimed = [];
for (let i = 0; i < nimed.length; i++) {
  let osad = nimed[i].split(" ");
  for (let j = 0; j < osad.length; j++) {
    osad[j] = osad[j].charAt(0).toUpperCase() + osad[j].slice(1).toLowerCase();
  }
  korrastatudNimed.push(osad.join(" "));
}

const emailid = [];
for (let i = 0; i < nimed.length; i++) {
  let osad = nimed[i].split(" ");
  let perenimi = osad[osad.length - 1].toLowerCase();
  emailid.push(`${perenimi}@methsein.com`);
}

const otsing = "mari";
let leitudNimed = [];
for (let i = 0; i < nimed.length; i++) {
  if (nimed[i].toLowerCase().includes(otsing.toLowerCase())) {
    leitudNimed.push(nimed[i]);
  }
}

console.log(korrastatudNimed);
console.log(emailid);
console.log(leitudNimed.length > 0 ? leitudNimed.join(", ") : "Nime ei leitud");

// Isikukood

const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
  ];
  

  for (let i = 0; i < inimesteAndmed.length; i++) {
    const isikukood = inimesteAndmed[i].isikukood;
    const sunniaasta = parseInt(isikukood.substring(1, 3), 10);
    const sunnikuu = parseInt(isikukood.substring(3, 5), 10);
    const sunnipaeva = parseInt(isikukood.substring(5, 7), 10);
    const aasta = new Date().getFullYear();
    const sunniaeg = `${sunnipaeva}.${sunnikuu}.${sunniaasta < 24 ? 2000 + sunniaasta : 1900 + sunniaasta}`;
    const vanus = aasta - (sunniaasta < 24 ? 2000 + sunniaasta : 1900 + sunniaasta);
  
    console.log(`${inimesteAndmed[i].nimi}, sünniaeg: ${sunniaeg}, vanus: ${vanus}`);
  }
// õpilaste tulemused  
  const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
  ];
  
  for (let i = 0; i < opilased.length; i++) {
    let parimTulemus = opilased[i].tulemused[0];
    let summa = 0;
    for (let j = 0; j < opilased[i].tulemused.length; j++) {
      if (opilased[i].tulemused[j] > parimTulemus) {
        parimTulemus = opilased[i].tulemused[j];
      }
      summa += opilased[i].tulemused[j];
    }
    const keskmineTulemus = (summa / opilased[i].tulemused.length).toFixed(2);
    
    console.log(`${opilased[i].nimi} - Parim tulemus: ${parimTulemus}, Keskmine tulemus: ${keskmineTulemus}`);
  }
  