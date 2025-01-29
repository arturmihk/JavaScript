/*
Artur-Mihk Peterson
29.01.2025
yl10
*/
// 

let toode = {
    nimi: "Mario maitsvad munad",
    hind: "0.03",
    kogus: "2",
}

console.log(toode);

const koguhind = toode.hind * toode.kogus;

toode.kogus = 4;


console.log(`Toote koguhind on ${koguhind}€`);
console.log(`Toode: ${toode.nimi}, Hind: ${toode.hind}€, Kogus: ${toode.kogus}`);

// ostukorvi asi
const ostukorv = {
    tooted: [
      { nimi: 'Piim', hind: 3.60, kogus: 2 },
      { nimi: 'Leib', hind: 2.00, kogus: 1 },
      { nimi: 'Munad', hind: 1.50, kogus: 6 },
      { nimi: 'Juust', hind: 4.20, kogus: 1 },
      { nimi: 'Tomatid', hind: 2.30, kogus: 3 }
    ]
  };

  for (let toode of ostukorv.tooted) {
    console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
  };

  ostukorv.tooted.push({ nimi: 'Kohv', hind: 5.80, kogus: 2 });

  let koguSumma = 0;
  for (let toode of ostukorv.tooted) {
    koguSumma += toode.hind * toode.kogus;
  }
  console.log('Ostukorvi kogu summa:', koguSumma, 'EUR');
  